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
                <strong>OSYS</strong>
                <br />
                Association déclarée conformément à la loi du 1er juillet 1901.
              </p>

              <p className="mt-3">
                <strong>Président :</strong> Arnaud Crestey
                <br />
                <strong>Numéro RNA :</strong> W142018192
                <br />
                <strong>Numéro SIREN :</strong> 934 846 817
                <br />
                <strong>Date de création :</strong> 24 octobre 2024
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Hébergement
              </h2>

              <p className="mt-3">
                Vercel Inc.
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </p>

              <p>
                Site internet : https://vercel.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Propriété intellectuelle
              </h2>

              <p className="mt-3">
                L'ensemble des contenus présents sur le site OSYS, notamment les
                textes, éléments graphiques, logos, illustrations, ressources
                documentaires, questionnaires et contenus pédagogiques, est
                protégé par les dispositions relatives à la propriété
                intellectuelle.
              </p>

              <p>
                Toute reproduction, représentation, diffusion, adaptation ou
                réutilisation, totale ou partielle, sans autorisation préalable
                écrite de l'association OSYS est interdite.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Protection des données
              </h2>

              <p className="mt-3">
                Le site OSYS s'attache à respecter la confidentialité des
                informations communiquées par les utilisateurs.
              </p>

              <p>
                Les données éventuellement collectées via les formulaires du
                site sont utilisées uniquement dans le cadre de son
                fonctionnement, de l'amélioration des services proposés ou du
                traitement des demandes adressées à l'association.
              </p>

              <p>
                Aucune donnée personnelle n'est cédée ou vendue à des tiers.
              </p>

              <p>
                Conformément à la réglementation applicable, toute personne
                dispose d'un droit d'accès, de rectification, d'opposition et
                de suppression des données la concernant.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Limitation de responsabilité
              </h2>

              <p className="mt-3">
                Les informations proposées sur OSYS ont une vocation
                exclusivement informative, pédagogique et préventive.
              </p>

              <p>
                Le questionnaire proposé sur le site ne constitue ni un
                diagnostic, ni une expertise, ni une évaluation juridique,
                médicale, psychologique ou sociale.
              </p>

              <p>
                Les résultats fournis ont uniquement pour objectif d'aider les
                utilisateurs à identifier certains repères et à mieux comprendre
                leur situation.
              </p>

              <p>
                OSYS ne saurait être tenu responsable des décisions prises sur
                la seule base des informations fournies par le site.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#8D9A84] p-6 text-white md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/80">
                Important
              </p>

              <p className="mt-4 text-2xl font-semibold tracking-tight">
                OSYS est un outil d'information, de sensibilisation et de
                prévention.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/90">
                En cas de danger immédiat, d'urgence ou de besoin
                d'accompagnement spécialisé, contactez les services compétents
                ou consultez la rubrique « Ressources » du site afin d'obtenir
                les coordonnées des structures adaptées à votre situation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
