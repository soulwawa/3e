import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";

const base = process.argv[2] ?? "http://127.0.0.1:3000";
const request = (path, method = "GET") =>
  fetch(new URL(path, base), { method, signal: AbortSignal.timeout(5000) });
const files = (await readdir("_projects")).filter((file) => file.endsWith(".md"));
assert(files.length > 0, "Project fixtures must exist");

for (const mapping of ["{}", "{ value: 1 }"]) {
  const aliases = Array(101).fill("*base").join(", ");
  assert.throws(
    () => matter(`---\nbase: &base ${mapping}\nmerged:\n  <<: [${aliases}]\n---\n`),
    { name: "YAMLException" },
    "Excessive YAML merge sequences must be rejected",
  );
}

const home = await request("/");
assert.equal(home.status, 200, "Home page");
const homeHtml = await home.text();
assert(homeHtml.includes('id="builds"'), "Home project section");
let imageCount = 0;

for (const file of files) {
  const slug = file.slice(0, -3);
  const { data } = matter(await readFile(`_projects/${file}`, "utf8"));
  const response = await request(`/projects/${slug}`);
  assert.equal(response.status, 200, slug);
  const html = await response.text();
  const title = data.title.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  assert(html.includes(`<title>${title}`), `${slug}: page title`);
  assert(html.includes('name="description"'), `${slug}: description`);
  for (const image of data.images ?? []) {
    const asset = await request(image, "HEAD");
    assert.equal(asset.status, 200, `${slug}: ${image}`);
    imageCount++;
  }
}

const missing = await request("/projects/nonexistent-smoke-test");
assert.equal(missing.status, 404, "Unknown project");
const traversal = await request("/projects/%2e%2e%2fpackage.json");
assert([400, 404].includes(traversal.status), "Encoded path traversal must be rejected");

const sitemapResponse = await request("/sitemap.xml");
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
assert.equal((sitemap.match(/<loc>/g) ?? []).length, files.length + 1);
for (const file of files) assert(sitemap.includes(`/projects/${file.slice(0, -3)}</loc>`));
const robotsResponse = await request("/robots.txt");
assert.equal(robotsResponse.status, 200);
assert((await robotsResponse.text()).includes("Sitemap: https://www.3es.dev/sitemap.xml"));

console.log(`PASS: YAML merge limits, home, ${files.length} projects, ${imageCount} images, metadata, 404, path rejection, sitemap and robots.`);
