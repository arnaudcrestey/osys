"use client";

import { EyeOff } from "lucide-react";

export function QuietExit({ compact = false }: { compact?: boolean }) {
  function leave() {
    window.location.replace("https://www.google.fr");
  }

  return (
    <button
      type="button"
      onClick={leave}
      className="inline-flex items-center gap-2 rounded-full border border-transparent px-2.5 py-2 text-xs font-medium text-slate-700 underline-offset-4 transition hover:border-osys-line hover:bg-white/70 hover:text-osys-ink"
      aria-label="Quitter immédiatement vers Google"
    >
      <EyeOff aria-hidden="true" size={15} />
      <span>{compact ? "Discrétion" : "Je navigue en toute discrétion"}</span>
    </button>
  );
}
