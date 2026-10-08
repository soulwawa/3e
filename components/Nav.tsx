"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";
import { profile } from "@/data/profile";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Builds", href: "/#builds" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {profile.handle}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="테마 전환"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Icon name="sun" className="hidden h-5 w-5 dark:block" />
            <Icon name="moon" className="h-5 w-5 dark:hidden" />
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="테마 전환"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Icon name="sun" className="hidden h-5 w-5 dark:block" />
            <Icon name="moon" className="h-5 w-5 dark:hidden" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴"
            aria-expanded={open}
            className="text-foreground"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 md:hidden">
          <div className="mx-auto flex max-w-content flex-col px-6 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
