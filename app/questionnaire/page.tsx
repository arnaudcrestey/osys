import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { QuestionnaireFlow } from "@/components/questionnaire/QuestionnaireFlow";

export const metadata: Metadata = {
  title: "Questionnaire",
  description:
    "Faire le point sur une situation avec une lecture confidentielle."
};

export default function QuestionnairePage() {
  return (
    <AppShell>
      <section className="section page-shell">
        <QuestionnaireFlow />
      </section>
    </AppShell>
  );
}