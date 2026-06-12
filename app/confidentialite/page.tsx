import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Informations relatives à la confidentialité et à la protection des données sur OSYS."
};

export default function ConfidentialitePage() {
  return (
    <AppShell>
      <section className="section page-shell">
        <p className="eyebrow">Confidentialité</p>

        <h1 className="page-title mt-5">
          Votre confidentialité est essentielle.
        </h1>

        <div className="premium-card mt-10 p-8 md:p-10">
          <div className="mx-auto max-w-3xl space-y-7 text-[1rem] leading-8 text-slate-700">
            <p>
              OSYS a été conçu avec une attention particulière portée à la
              confidentialité des personnes qui utilisent cet outil.
            </p>

            <p>
              L'utilisation du questionnaire est libre et gratuite. Les réponses
              fournies ont pour seul objectif de générer une lecture
              personnalisée destinée à l'utilisateur.
            </p>

            <p>
              OSYS ne cherche pas à établir de diagnostic et ne remplace pas
              l'accompagnement de professionnels spécialisés.
            </p>

            <div className="rounded-[2rem] bg-[#8D9A84] p-6 text-white md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/80">
                Engagement de confidentialité
              </p>

              <p className="mt-4 text-2xl font-semibold tracking-tight">
                Respect. Discrétion. Protection.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/90">
                Les informations partagées dans le cadre de l'utilisation
                d'OSYS doivent être traitées avec le plus grand respect de la
                vie privée des utilisateurs.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900">
              Données personnelles
            </h2>

            <p>
              Selon les fonctionnalités utilisées, certaines données techniques
              ou informations nécessaires au fonctionnement du service peuvent
              être traitées.
            </p>

            <p>
              Ces traitements sont réalisés dans le respect de la réglementation
              applicable en matière de protection des données personnelles.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900">
              Vos droits
            </h2>

            <p>
              Conformément à la réglementation en vigueur, toute personne
              dispose notamment d'un droit d'accès, de rectification,
              d'effacement et de limitation du traitement de ses données.
            </p>

            <p>
              Pour toute question relative à la confidentialité ou à la
              protection des données, vous pouvez utiliser les coordonnées
              figurant dans les mentions légales du site.
            </p>
          </div>
        </div>
      </section>
    </AppShell>
  );
}