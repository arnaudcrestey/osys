import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Urgence",
  description: "Numéros utiles en cas de danger immédiat ou de besoin d'aide."
};

const numbers = [
  ["17", "Police secours"],
  ["112", "Urgence européenne"],
  ["114", "SMS pour personnes sourdes, malentendantes ou empêchées de parler"],
  ["3919", "Ecoute violences femmes info"],
  ["119", "Enfance en danger"]
];

export default function UrgencePage() {
  return (
    <AppShell>
      <section className="section page-shell">
        <p className="eyebrow text-osys-alert">Urgence</p>
        <h1 className="page-title mt-5">Besoin d'aide immédiatement ?</h1>
        <p className="body-large mt-5 max-w-2xl">
          Si un danger est immédiat, contactez les services d'urgence. Cette page reste volontairement simple et très lisible.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {numbers.map(([number, label]) => (
            <a
              key={number}
              href={`tel:${number}`}
              className="rounded-2xl border border-osys-alert/20 bg-white p-6 text-center shadow-card transition hover:-translate-y-0.5 hover:border-osys-alert"
            >
              <span className="font-display text-5xl font-medium text-osys-alert">{number}</span>
              <span className="mt-4 block text-sm font-medium leading-6 text-osys-ink">{label}</span>
            </a>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
