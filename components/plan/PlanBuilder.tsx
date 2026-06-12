"use client";

import { useEffect, useMemo, useState } from "react";
import { Banknote, FileText, HeartPulse, Home, Laptop, ShieldCheck, Users } from "lucide-react";
import { getStorage, setStorage } from "@/lib/utils";

const sections = [
  {
    title: "Documents",
    icon: FileText,
    items: ["Pièce d'identité", "Livret de famille", "Contrats et justificatifs", "Copies numériques sécurisées"]
  },
  {
    title: "Argent",
    icon: Banknote,
    items: ["Moyens de paiement accessibles", "RIB personnel", "Budget minimal", "Aides financières à explorer"]
  },
  {
    title: "Santé",
    icon: HeartPulse,
    items: ["Ordonnances", "Carte Vitale", "Contacts médicaux", "Informations de suivi importantes"]
  },
  {
    title: "Enfants",
    icon: Users,
    items: ["Documents scolaires", "Carnets de santé", "Personnes autorisées", "Routine sécurisante"]
  },
  {
    title: "Logement",
    icon: Home,
    items: ["Solutions temporaires", "Double des clés", "Adresse de confiance", "Trajet repéré"]
  },
  {
    title: "Réseau de confiance",
    icon: ShieldCheck,
    items: ["Personne informée", "Mot convenu", "Contact professionnel", "Lieu sûr identifié"]
  },
  {
    title: "Sécurité numérique",
    icon: Laptop,
    items: ["Mots de passe changés", "Localisation vérifiée", "Sauvegarde privée", "Historique sensible effacé"]
  }
];

type State = Record<string, boolean>;

export function PlanBuilder() {
  const [checked, setChecked] = useState<State>({});

  useEffect(() => {
    setChecked(getStorage<State>("osys-plan", {}));
  }, []);

  useEffect(() => {
    setStorage("osys-plan", checked);
  }, [checked]);

  const allItems = sections.flatMap((section) => section.items.map((item) => `${section.title}:${item}`));
  const done = useMemo(() => allItems.filter((item) => checked[item]).length, [checked, allItems]);
  const progress = Math.round((done / allItems.length) * 100);

  return (
    <div className="mt-9 grid gap-6 lg:grid-cols-[20rem_1fr]">
      <aside className="premium-card h-fit p-6">
        <p className="eyebrow">PROGRESSION</p>
        <p className="mt-4 font-display text-5xl font-medium">{progress}%</p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-osys-surface">
          <div className="h-full bg-osys-sage transition-all" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          {done} élément{done > 1 ? "s" : ""} préparé{done > 1 ? "s" : ""} sur {allItems.length}.
        </p>
      </aside>

      <div className="grid gap-4">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <article key={section.title} className="premium-card p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-osys-surface">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h2 className="font-display text-xl font-medium">{section.title}</h2>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {section.items.map((item) => {
                  const id = `${section.title}:${item}`;
                  return (
                    <label key={id} className="flex cursor-pointer items-start gap-3 rounded-xl bg-white/50 p-4 text-sm leading-6">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-osys-sage"
                        checked={Boolean(checked[id])}
                        onChange={() => setChecked((value) => ({ ...value, [id]: !value[id] }))}
                      />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
