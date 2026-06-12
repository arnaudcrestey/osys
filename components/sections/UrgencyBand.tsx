import { LockKeyhole } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function UrgencyBand() {
  return (
    <section className="bg-osys-sage text-white">
      <div className="page-shell flex flex-col gap-6 py-9 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/30">
            <LockKeyhole aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-xl font-medium">Vous avez besoin d'aide immédiatement ?</h2>
            <p className="mt-1 text-sm text-white/80">Accédez rapidement aux numéros et contacts utiles.</p>
          </div>
        </div>
        <ButtonLink href="/urgence" variant="alert">
          Accéder à l'urgence
        </ButtonLink>
      </div>
    </section>
  );
}
