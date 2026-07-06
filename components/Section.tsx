import type { ReactNode } from "react";

export function Section({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-content scroll-mt-20 px-6 py-16 sm:py-24"
    >
      {children}
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">
      {children}
    </h2>
  );
}
