import { HomeHero } from "@/components/sections/HomeHero";
import { UrgencyBand } from "@/components/sections/UrgencyBand";
import { AppShell } from "@/components/layout/AppShell";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function HomePage() {
  return (
    <AppShell>
      <HomeHero />

      <UrgencyBand />

      <section className="page-shell py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[1.35rem] font-medium leading-relaxed text-osys-ink sm:text-[1.6rem]">
            Faire le point peut aider
            <br />à mieux comprendre ce que vous vivez.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            En quelques minutes, répondez à quelques questions et obtenez une
            lecture personnalisée des repères qui ressortent de votre situation.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            Sans création de compte. Sans conservation des réponses détaillées.
          </p>

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
