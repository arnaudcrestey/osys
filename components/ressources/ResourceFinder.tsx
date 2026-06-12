"use client";

import { useMemo, useState } from "react";
import { resources } from "@/lib/resources";

const quickFilters = [
  "Urgence",
  "Écoute",
  "SMS",
  "Victimes",
  "Droits",
  "Social"
];

export function ResourceFinder() {
  const [query, setQuery] = useState("");

  const filteredResources = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return resources;
    }

    return resources.filter((resource) => {
      return (
        resource.name.toLowerCase().includes(search) ||
        resource.type.toLowerCase().includes(search) ||
        resource.city.toLowerCase().includes(search) ||
        resource.postalCode.toLowerCase().includes(search) ||
        resource.description.toLowerCase().includes(search)
      );
    });
  }, [query]);

  return (
    <div className="mt-10 space-y-8">
      <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Orientation immédiate</p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              En cas de danger immédiat, contactez d’abord les urgences.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              OSYS aide à mieux comprendre une situation, mais ne doit jamais
              ralentir une demande d’aide urgente. Si une personne est en danger,
              menacée ou empêchée d’appeler librement, il faut privilégier les
              dispositifs d’urgence.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="tel:17"
              className="rounded-3xl border border-red-200 bg-red-50 p-5 transition hover:bg-red-100"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-red-700">
                Urgence
              </p>
              <p className="mt-3 text-3xl font-semibold text-red-900">17</p>
              <p className="mt-2 text-sm leading-6 text-red-900/80">
                Police / Gendarmerie
              </p>
            </a>

            <a
              href="sms:114"
              className="rounded-3xl border border-orange-200 bg-orange-50 p-5 transition hover:bg-orange-100"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange-700">
                SMS discret
              </p>
              <p className="mt-3 text-3xl font-semibold text-orange-900">114</p>
              <p className="mt-2 text-sm leading-6 text-orange-900/80">
                Urgence par SMS
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-sm md:p-8">
          <p className="eyebrow">Rechercher</p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
            De quel type d’aide avez-vous besoin ?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Vous pouvez rechercher par mot-clé : urgence, écoute, victime,
            juridique, social, SMS, 3919 ou 116 006.
          </p>

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Exemple : urgence, écoute, juridique..."
            className="mt-6 w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none transition focus:border-[#8D9A84]"
          />

          <div className="mt-5 flex flex-wrap gap-2">
            {quickFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setQuery(filter)}
                className="rounded-full bg-[#8D9A84] px-4 py-2 text-xs text-white transition hover:bg-[#7D8A74]"
              >
                {filter}
              </button>
            ))}
          </div>

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-5 text-sm text-[#6F7D66] underline underline-offset-4"
            >
              Réinitialiser la recherche
            </button>
          )}
        </aside>

        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <article
              key={resource.id}
              className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#6F7D66]">
                    {resource.type}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
                    {resource.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {resource.description}
                  </p>
                </div>

                <a
                  href={
                    resource.phone.includes("Voir") ||
                    resource.phone.includes("Selon") ||
                    resource.phone.includes("En ligne")
                      ? undefined
                      : `tel:${resource.phone.replace(/\s/g, "")}`
                  }
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#8D9A84] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#7D8A74]"
                >
                  {resource.phone}
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
  {[...new Set([resource.city, resource.postalCode, resource.distance])]
    .filter(Boolean)
    .map((tag) => (
      <span
        key={tag}
        className="rounded-full bg-[#EEF2EB] px-3 py-2 text-[#5F6B57]"
      >
        {tag}
      </span>
    ))}
</div>
            </article>
          ))}

          {filteredResources.length === 0 && (
            <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Aucun résultat précis.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Essayez avec un terme plus général : urgence, écoute, victime,
                juridique ou social.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}