import Image from "next/image";
import { ArrowRight, ClipboardList, Lightbulb, Send } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { QuietExit } from "@/components/ui/QuietExit";

const cards = [
  {
    title: "Comprendre",
    text: "Mieux comprendre certaines situations et vos droits.",
    href: "/comprendre",
    icon: Lightbulb,
    tint: "bg-[#eeeee7]"
  },
  {
    title: "Me préparer",
    text: "Préparer chaque étape, sécuriser l'essentiel, créer votre plan.",
    href: "/preparer",
    icon: ClipboardList,
    tint: "bg-[#e9eee8]"
  },
  {
    title: "Agir",
    text: "Trouver les bons interlocuteurs près de chez vous.",
    href: "/ressources",
    icon: Send,
    tint: "bg-[#e8edf0]"
  }
];

export function HomeHero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-osys-line">
        <div className="page-shell grid min-h-[34rem] items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:py-14">
          <div className="z-10 max-w-xl">
            <h1 className="display-title">
              Anticiper.
              <br />
              Organiser.
              <br />
              Se protéger.
            </h1>
            <div className="my-6 h-0.5 w-16 bg-osys-sage" />
            <p className="body-large max-w-md">Des outils concrets et des ressources fiables pour avancer à votre rythme.</p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/preparer">Préparer l&apos;essentiel</ButtonLink>
              <QuietExit />
            </div>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-3xl lg:min-h-[32rem] lg:rounded-none">
            <Image
              src="/images/osys-vase-hero.png"
              alt="Vase clair avec feuillage dans une pièce lumineuse"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="page-shell -mt-8 grid gap-4 pb-8 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <a key={card.title} href={card.href} className="premium-card group flex min-h-36 items-center justify-between gap-5 p-6">
              <span>
                <span className="eyebrow">{card.title}</span>
                <span className="mt-4 block max-w-[14rem] text-sm leading-6 text-slate-700">{card.text}</span>
                <ArrowRight className="mt-4 transition group-hover:translate-x-1" size={18} aria-hidden="true" />
              </span>
              <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-full ${card.tint}`}>
                <Icon size={28} aria-hidden="true" />
              </span>
            </a>
          );
        })}
      </section>
    </>
  );
}
