import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { ResourceFinder } from "@/components/ressources/ResourceFinder";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Numéros utiles et ressources d’orientation pour les personnes concernées par des violences."
};

export default function RessourcesPage() {
  return (
    <AppShell>
      <section className="section page-shell">
        <p className="eyebrow">Ressources</p>

        <h1 className="page-title mt-5">
          Trouver rapidement une aide adaptée.
        </h1>

        <p className="body-large mt-5 max-w-3xl">
          Cette page rassemble les principaux numéros d’urgence, d’écoute et
          d’orientation. En cas de danger immédiat, contactez les services
          d’urgence avant toute autre démarche.
        </p>

        <ResourceFinder />
      </section>
    </AppShell>
  );
}