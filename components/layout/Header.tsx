"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/shared/Container";

const navigation = [
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-800">
      <Container>
        <nav className="flex min-h-20 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-zinc-100"
          >
            Project Everest
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Resume */}
          <a
            href="/resume.pdf"
            className="hidden rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-100 transition-colors duration-200 hover:bg-zinc-900 md:inline-flex"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md border border-zinc-700 px-3 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-900 md:hidden"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-zinc-800 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors ${
                      isActive
                        ? "text-zinc-100"
                        : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <a
                href="/resume.pdf"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-zinc-400"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}