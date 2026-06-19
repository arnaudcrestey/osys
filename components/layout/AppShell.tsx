import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-osys-background text-osys-ink">
      <SiteHeader />

      <main>{children}</main>

      <footer className="mt-16 border-t border-osys-line bg-[#7C8B76] text-white">
        <div className="page-shell py-8">
          <div className="grid items-center gap-8 md:grid-cols-[180px_360px_1fr_auto]">
            {/* OSYS */}
            <div className="flex justify-center md:justify-start">
              <Link
                href="/"
                className="font-signature text-[2.4rem] leading-none tracking-[0.12em] transition hover:text-white/80"
                aria-label="Accueil OSYS"
              >
                OSYS
              </Link>
            </div>

            {/* Signature Arnaud Crestey */}
            <div className="flex justify-center">
  <a
    href="https://arnaudcrestey.com"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:scale-105"
    aria-label="Arnaud Crestey"
  >
    <img
      src="/images/signature-ac.png"
      alt="Arnaud Crestey"
      className="h-auto w-[120px] opacity-95 transition hover:opacity-100"
    />
  </a>
</div>
            {/* Navigation principale */}
            <nav
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90 md:justify-start"
              aria-label="Navigation principale"
            >
              <Link href="/apropos" className="transition hover:text-white">
                À propos
              </Link>

              <Link href="/proches" className="transition hover:text-white">
                Proches
              </Link>

              <Link href="/ressources" className="transition hover:text-white">
                Besoin d&apos;aide ?
              </Link>
            </nav>

            {/* Liens légaux */}
            <nav
              className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/80 md:justify-end"
              aria-label="Informations légales"
            >
              <Link
                href="/confidentialite"
                className="transition hover:text-white"
              >
                Confidentialité
              </Link>

              <Link
                href="/mentions-legales"
                className="transition hover:text-white"
              >
                Mentions légales
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
