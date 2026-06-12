import { HomeHero } from "@/components/sections/HomeHero";
import { UrgencyBand } from "@/components/sections/UrgencyBand";
import { AppShell } from "@/components/layout/AppShell";

export default function HomePage() {
  return (
    <AppShell>
      <HomeHero />

      <UrgencyBand />

      <section className="page-shell py-14 sm:py-16">
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-[1.35rem] font-medium leading-relaxed text-osys-ink sm:text-[1.6rem]">
      Parfois, savoir par où commencer
      <br />
      est déjà une étape.
    </p>
  </div>
</section>
    </AppShell>
  );
}