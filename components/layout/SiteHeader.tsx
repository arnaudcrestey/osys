"use client";

import Link from "next/link";
import { EyeOff, Menu, X } from "lucide-react";
import { useState } from "react";
import { QuietExit } from "@/components/ui/QuietExit";

const links = [
  { href: "/comprendre", label: "Comprendre" },
  { href: "/preparer", label: "Me préparer" },
  { href: "/questionnaire", label: "Faire le point" },
  { href: "/ressources", label: "Ressources" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-osys-line bg-[#FAF8F5]/92 backdrop-blur-xl">
      <div className="page-shell flex h-[4.25rem] items-center justify-between gap-4 py-4">
        <Link
          href="/accueil"
          className="font-signature text-[2.45rem] font-normal leading-none tracking-[0.12em] text-[#263128] transition hover:text-osys-sage"
          aria-label="Accueil OSYS"
          onClick={closeMenu}
        >
          OSYS
        </Link>

        <nav
          className="hidden items-center gap-9 text-sm font-medium text-slate-800 lg:flex"
          aria-label="Navigation principale"
        >
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="transition hover:text-osys-sage"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <QuietExit compact />

          <Link
            href="/urgence"
            className="rounded-full border border-osys-alert/40 px-5 py-2.5 text-sm font-medium text-osys-alert transition hover:bg-osys-alert hover:text-white"
          >
            Besoin d&apos;aide ?
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-osys-line bg-white/70 text-osys-ink transition hover:border-osys-sage hover:bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <X size={19} aria-hidden="true" />
          ) : (
            <Menu size={19} aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-osys-line bg-[#FAF8F5] px-5 py-4 lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-md flex-col gap-2 text-sm font-medium"
            aria-label="Navigation mobile"
          >
            {links.map((link) => (
              <Link
                key={`${link.href}-${link.label}-mobile`}
                href={link.href}
                className="rounded-xl px-3 py-3 text-osys-ink transition hover:bg-white/70"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-osys-line" />

            <QuietExit />

            <Link
              href="/urgence"
              className="rounded-xl bg-osys-alert px-3 py-3 text-center font-semibold text-white transition hover:bg-[#a24747]"
              onClick={closeMenu}
            >
              Besoin d&apos;aide ?
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}