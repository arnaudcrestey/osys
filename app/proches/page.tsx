import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Proches",
  description: "Comprendre comment aider une personne concernée avec calme, respect et prudence."
};

const entries = [
  ["Je suis un proche", "Rester disponible, croire ce qui est confié, éviter de décider à la place."],
  ["Je suis un parent", "Soutenir sans pression, préserver le lien et proposer des appuis concrets."],
  ["Je suis un ami", "Offrir un espace calme, aider à noter les informations importantes."],
  ["Je suis un collègue", "Respecter la confidentialité, orienter vers les ressources internes ou externes."],
  ["Je suis un professionnel", "Ecouter, sécuriser l'information et orienter vers les dispositifs adaptés."]
];

export default function ProchesPage() {
  return (
    <AppShell>
      <section className="section page-shell">
        <p className="eyebrow">Proches</p>
        <h1 className="page-title mt-5">Aider sans brusquer, soutenir sans imposer.</h1>
        <p className="body-large mt-5 max-w-2xl">
          Des repères pour comprendre comment être présent, avec prudence et respect du rythme de la personne.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {entries.map(([title, text]) => (
            <article key={title} className="premium-card p-6">
              <h2 className="font-display text-xl font-medium">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
