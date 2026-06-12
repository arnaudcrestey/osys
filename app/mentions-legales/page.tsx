import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site OSYS."
};

export default function MentionsLegalesPage() {
  return (
    <AppShell>
      <section className="section page-shell">
        <p className="eyebrow">Mentions légales</p>

        <h1 className="page-title mt-5">
          Informations légales.
        </h1>

        <div className="premium-card mt-10 p-8 md:p-10">
          <div className="mx-auto max-w-3xl space-y-8 text-[1rem] leading-8 text-slate-700">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Éditeur du site
              </h2>

              <p className="mt-3">
                OSYS
                <br />
                Responsable de publication : Arnaud Crestey
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Hébergement
              </h2>

              <p className="mt-3">
                Le site est hébergé par l'hébergeur utilisé pour son
                exploitation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Propriété intellectuelle
              </h2>

              <p className="mt-3">
                L'ensemble des contenus présents sur ce site est protégé par les
                dispositions relatives à la propriété intellectuelle.
              </p>

              <p>
                Toute reproduction, diffusion ou réutilisation sans autorisation
                préalable est interdite.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Limitation de responsabilité
              </h2>

              <p className="mt-3">
                Les informations proposées sur OSYS ont une vocation
                informative et pédagogique.
              </p>

              <p>
                Elles ne constituent ni un avis juridique, ni un avis médical,
                ni un diagnostic professionnel.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#8D9A84] p-6 text-white md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/80">
                Important
              </p>

              <p className="mt-4 text-2xl font-semibold tracking-tight">
                OSYS est un outil d'information et de sensibilisation.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/90">
                En cas de danger immédiat ou de besoin d'accompagnement,
                rapprochez-vous des services compétents ou consultez la page
                Ressources du site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}