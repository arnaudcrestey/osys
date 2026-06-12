import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PlanBuilder } from "@/components/plan/PlanBuilder";

export const metadata: Metadata = {
  title: "Mon plan",
  description: "Assistant de préparation OSYS avec checklists, progression et sauvegarde locale."
};

export default function PreparerPage() {
  return (
    <AppShell>
      <section className="section page-shell">
        <p className="eyebrow">L'ESSENTIEL</p>
        <h1 className="page-title mt-5">Préparer l'essentiel, étape par étape.</h1>
        <p className="body-large mt-5 max-w-2xl">
          Une checklist personnelle pour rassembler, à votre rythme, ce dont vous pourriez avoir besoin.
        </p>
        <PlanBuilder />
      </section>
    </AppShell>
  );
}
