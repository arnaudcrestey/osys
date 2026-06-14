import { HomeHero } from "@/components/sections/HomeHero";
import { UrgencyBand } from "@/components/sections/UrgencyBand";
import { AppShell } from "@/components/layout/AppShell";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function HomePage() {
  return (
    <AppShell>
      <HomeHero />

      <UrgencyBand />

      <section className="page-shell py-14 sm:py-20">
  <div className="mx-auto max-w-4xl rounded-[2rem] border border-osys-line bg-white/75 px-6 py-10 text-center shadow-[0_24px_70px_rgba(31,41,55,0.08)] sm:px-12 sm:py-14">
    <p className="eyebrow">Analyse personnalisée</p>

<h2 className="mt-5 font-display text-3xl font-medium leading-tight text-osys-ink sm:text-5xl">
  Faire le point peut parfois aider.
</h2>

<p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
  Prendre quelques minutes pour répondre à quelques questions
  peut parfois permettre de regarder une situation avec un peu plus
  de recul.
</p>

<p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600">
  Et parfois, de mieux comprendre ce que l&apos;on vit.
</p>

<div className="mx-auto mt-7 grid max-w-3xl gap-3 text-sm text-slate-600 sm:grid-cols-4">
  <div className="rounded-2xl bg-osys-surface px-4 py-3">
    12 questions
  </div>

  <div className="rounded-2xl bg-osys-surface px-4 py-3">
    Gratuit
  </div>

  <div className="rounded-2xl bg-osys-surface px-4 py-3">
    Sans compte
  </div>

  <div className="rounded-2xl bg-osys-surface px-4 py-3">
    Confidentiel
  </div>
</div>

<div className="mt-8">
  <ButtonLink href="/questionnaire" showArrow>
    Faire le point maintenant
  </ButtonLink>
</div>
  </div>
</section>
    </AppShell>
  );
}
