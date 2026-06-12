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
                OSYS ne demande pas la création de compte, ne collecte pas
                l'identité des utilisateurs et ne conserve pas les réponses
                apportées au questionnaire.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900">
              Données personnelles
            </h2>

            <p>
              OSYS ne demande pas la création de compte et ne collecte pas les
              informations personnelles saisies par les utilisateurs dans le
              cadre du questionnaire.
            </p>

            <p>
              Les réponses fournies sont utilisées uniquement pour générer le
              résultat affiché à l'écran et ne sont pas conservées par
              l'association OSYS.
            </p>

            <p>
              Aucune donnée personnelle issue du questionnaire n'est vendue,
              transmise ou exploitée à des fins commerciales.
            </p>

            <p>
              Les éventuelles données techniques nécessaires au fonctionnement
              du site sont traitées dans le respect de la réglementation
              applicable.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900">
              Cookies et traceurs
            </h2>

            <p>
              OSYS n'utilise pas de cookies publicitaires, de dispositif de
              profilage commercial ou d'outil destiné à suivre le comportement
              individuel des utilisateurs à des fins marketing.
            </p>

            <p>
              Si des outils techniques de mesure ou de sécurité sont utilisés
              par l'hébergeur, ils le sont uniquement pour assurer le bon
              fonctionnement, la stabilité et la sécurité du site.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900">
              Vos droits
            </h2>

            <p>
              Conformément à la réglementation en vigueur, toute personne
              dispose notamment d'un droit d'accès, de rectification,
              d'effacement, d'opposition et de limitation du traitement de ses
              données personnelles.
            </p>

            <p>
              Pour toute question relative à la confidentialité ou à la
              protection des données, vous pouvez utiliser les coordonnées
              figurant dans les mentions légales du site.
            </p>

            <div className="rounded-[2rem] bg-[#8D9A84] p-6 text-white md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/80">
                Important
              </p>

              <p className="mt-4 text-2xl font-semibold tracking-tight">
                Les réponses au questionnaire ne sont pas enregistrées par OSYS.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/90">
                Elles servent uniquement à afficher une lecture immédiate à
                l'écran. En cas de danger immédiat ou de besoin
                d'accompagnement, consultez la page Ressources ou contactez les
                services compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
