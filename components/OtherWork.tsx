"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export default function OtherWork({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-2xl border border-border px-6 py-4 text-left text-sm font-medium transition-colors hover:border-accent"
      >
        <span>그 외 경력 {items.length}건</span>
        <Icon
          name="chevron"
          className={`h-5 w-5 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <ul className="mt-3 space-y-2 px-2 text-sm leading-relaxed text-muted">
          {items.map((it) => (
            <li key={it} className="flex gap-2">
              <span className="text-accent">·</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
