import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Comprendre",
  description:
    "Bibliothèque pédagogique OSYS sur l'emprise, les violences psychologiques et les ressources d'aide."
};

const topics = [
  {
    title: "Violences psychologiques",
    intro:
      "Identifier les mécanismes de dévalorisation, d'isolement ou de peur diffuse.",
    detail:
      "Elles peuvent prendre la forme de remarques répétées, de culpabilisation, de menaces implicites, de contrôle émotionnel ou d'une perte progressive de confiance en soi."
  },
  {
    title: "Violences verbales",
    intro:
      "Comprendre l'impact des insultes, menaces, humiliations ou propos répétés.",
    detail:
      "Les mots peuvent installer la peur, la honte ou le doute. Même sans violence physique, des paroles répétées peuvent fragiliser profondément une personne."
  },
  {
    title: "Violences physiques",
    intro:
      "Repérer les gestes inquiétants, les intimidations et les situations de mise en danger.",
    detail:
      "Il peut s'agir de coups, de bousculades, de gestes menaçants, d'objets lancés ou de toute attitude qui fait craindre pour sa sécurité."
  },
  {
    title: "Violences sexuelles",
    intro:
      "Clarifier les notions de consentement, pression et sécurité intime.",
    detail:
      "Le consentement doit être libre, clair et réversible. La pression, l'insistance, la peur ou le chantage ne permettent pas un choix libre."
  },
  {
    title: "Violences économiques",
    intro:
      "Comprendre le contrôle de l'argent, des papiers ou de l'autonomie matérielle.",
    detail:
      "Elles peuvent limiter l'accès à l'argent, aux documents, aux comptes, au travail ou aux moyens de partir en sécurité."
  },
  {
    title: "Cyberviolences",
    intro:
      "Identifier surveillance, mots de passe exigés, localisation et contrôle numérique.",
    detail:
      "Le contrôle peut passer par le téléphone, les réseaux sociaux, les messages, la géolocalisation ou l'accès forcé aux comptes personnels."
  },
  {
    title: "Emprise",
    intro:
      "Mettre des mots sur la confusion, le doute de soi et l'impression de ne plus choisir librement.",
    detail:
      "L'emprise s'installe souvent progressivement. Elle peut rendre difficile le fait de penser clairement, demander de l'aide ou envisager une décision."
  },
  {
    title: "Enfants",
    intro:
      "Observer ce que les tensions peuvent produire dans le quotidien des enfants.",
    detail:
      "Même lorsqu'ils ne sont pas directement visés, les enfants peuvent ressentir la peur, l'instabilité, les tensions ou les changements de comportement autour d'eux."
  },
  {
    title: "Séparation",
    intro:
      "Préparer les étapes avec prudence, discrétion et soutien.",
    detail:
      "Une séparation peut nécessiter de l'anticipation : documents, argent, hébergement, contacts de confiance, sécurité numérique et soutien professionnel."
  },
  {
    title: "Aides",
    intro:
      "Explorer les points d'appui administratifs, sociaux et juridiques possibles.",
    detail:
      "Certaines aides peuvent exister selon la situation : accompagnement social, droits, logement, protection, démarches administratives ou soutien associatif."
  }
];

export default function ComprendrePage() {
  return (
    <AppShell>
      <section className="section page-shell">
        <p className="eyebrow">Comprendre</p>

        <div className="mt-5 grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
  <h1 className="page-title">Mieux comprendre pour mieux décider.</h1>

  
</div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article key={topic.title} className="premium-card min-h-56 p-6">
              <h2 className="font-display text-xl font-semibold text-osys-ink">
                {topic.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                {topic.intro}
              </p>

              <div className="mt-6 h-[2px] w-12 bg-[#8D9A84]" />

              <details className="group mt-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-full border border-[#DDE5D8] bg-[#EEF4EA] px-4 py-3 text-sm font-medium text-[#53624F] transition hover:border-[#C9D6C2] hover:bg-[#E4EDDF]">
  <span>En savoir plus</span>
  <ChevronDown
    size={17}
    aria-hidden="true"
    className="shrink-0 transition group-open:rotate-180"
  />
</summary>

                <div className="mt-4 rounded-2xl bg-[#F6F4F1]/70 px-4 py-4">
                  <p className="text-sm leading-7 text-slate-700">
                    {topic.detail}
                  </p>
                </div>
              </details>
            </article>
          ))}
        </div>

        <div className="premium-card mt-8 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
  <p className="max-w-2xl text-sm leading-7 text-slate-700">
    Les ressources présentées ici ont pour objectif d'aider à identifier les
    premiers interlocuteurs utiles. Selon la situation, un échange avec une
    structure spécialisée ou un professionnel peut être nécessaire. En cas de
    danger immédiat, privilégiez toujours les dispositifs d'urgence.
  </p>

  <a
    href="/questionnaire"
    className="inline-flex items-center justify-center rounded-full bg-[#8D9A84] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7D8A74]"
  >
    Faire le point
  </a>
</div>
      </section>
    </AppShell>
  );
}