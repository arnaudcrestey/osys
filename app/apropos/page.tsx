import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Comprendre l’origine d’OSYS et la démarche qui a conduit à la création de cet outil."
};

export default function AproposPage() {
  return (
    <AppShell>
      <section className="section page-shell">
        <p className="eyebrow">À propos d’OSYS</p>

        <h1 className="page-title mt-5">
          Mieux comprendre pour avancer.
        </h1>

        <p className="body-large mt-5 max-w-3xl">
          OSYS est un outil gratuit, confidentiel et accessible à tous, conçu
          pour aider chacun à prendre du recul sur ce qu’il vit dans sa relation.
        </p>

        <div className="premium-card mt-10 p-7 md:p-10">
          <div className="mx-auto max-w-3xl space-y-7 text-[1rem] leading-8 text-slate-700">
            <p>
              OSYS est né de plusieurs années d&apos;accompagnement auprès de
              personnes confrontées aux violences au sein du couple.
            </p>

            <p>
              Pendant de nombreuses années, nous avons accueilli, écouté et
              accompagné des femmes, des hommes et des enfants confrontés à des
              situations parfois complexes, souvent difficiles à exprimer, à
              comprendre ou à nommer.
            </p>

            <p>
              En juin 2024, malgré l&apos;engagement de nos équipes et le soutien
              de nos partenaires, l&apos;activité d&apos;OSYS a dû
              s&apos;interrompre. Nos financeurs ont tout mis en œuvre pour
              tenter de maintenir le dispositif, mais les financements nécessaires
              à sa pérennisation n&apos;ont malheureusement pas pu être réunis.
            </p>

            <div className="rounded-[2rem] border border-[#8D9A84]/25 bg-[#EEF2EB] p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#6F7D66]">
                Question fondatrice
              </p>

              <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-slate-900">
                Comment permettre à une personne de mieux comprendre ce
                qu&apos;elle vit lorsqu&apos;elle s&apos;interroge sur sa relation
                de couple ?
              </p>
            </div>

            <p>
              Pour autant, notre engagement ne s&apos;est jamais arrêté. C&apos;est
              dans cet esprit qu&apos;est né cet outil.
            </p>

            <p>
  Le site internet utilise aujourd&apos;hui l&apos;adresse{" "}
  <span className="font-semibold tracking-wide">
    OSYS14.COM
  </span>,
  le nombre 14 faisant référence au département du Calvados,
  territoire sur lequel le dispositif a été créé, développé et
  accompagné pendant plusieurs années.
</p>

<p>
  Ce choix permet de conserver le lien avec l&apos;histoire du projet
  et le territoire qui l&apos;a vu naître, tout en mettant à disposition
  cet outil auprès d&apos;un public plus large.
</p>

            <p>
              Un outil simple, gratuit et totalement confidentiel, conçu pour
              aider chacun à prendre du recul sur sa situation et à identifier
              d&apos;éventuels mécanismes de violences au sein du couple.
            </p>

            

            <p>
              Cet outil n&apos;a pas vocation à poser un diagnostic ni à remplacer
              l&apos;accompagnement de professionnels spécialisés.
            </p>

            <p>
              Son objectif est avant tout de favoriser une première prise de
              conscience, de mettre des mots sur certaines situations et
              d&apos;offrir un point de repère à celles et ceux qui se questionnent.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Parce qu’il n’est pas toujours facile de savoir si ce que l’on vit est normal.",
                "Parce qu’il n’est pas toujours simple d’en parler.",
                "Parce qu’il n’est pas toujours évident de demander de l’aide."
              ].map((sentence) => (
                <div
                  key={sentence}
                  className="rounded-[1.5rem] border border-black/10 bg-white p-5 text-sm leading-7 text-slate-700"
                >
                  {sentence}
                </div>
              ))}
            </div>

            <p>
              Comprendre constitue souvent la première étape avant de pouvoir
              décider, agir ou se protéger.
            </p>

            <p>
              Aujourd&apos;hui, nous mettons cet outil librement à disposition de
              toutes les personnes qui en ressentent le besoin, avec la conviction
              qu&apos;un accès simple à l&apos;information peut parfois représenter
              un premier pas important dans un parcours de protection, de
              reconstruction ou d&apos;accompagnement.
            </p>

            <div className="rounded-[2rem] bg-[#8D9A84] p-6 text-white md:p-8">
  <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/80">
    Engagement OSYS
  </p>

  <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
    Gratuit. Confidentiel. Accessible à tous.
  </p>

  <p className="mt-4 text-sm leading-7 text-white/90">
    Parce que personne ne devrait rester seul face à ses interrogations.
  </p>
</div>

            <div className="rounded-[2rem] border border-[#8D9A84]/25 bg-[#F7F8F5] p-6 md:p-8">
  <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#6F7D66]">
    Notre intention
  </p>

  <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
    Mieux comprendre pour avancer.
  </p>

  <p className="mt-4 text-sm leading-7 text-slate-600">
    Lorsqu'une situation devient difficile à comprendre, il peut être utile de
    prendre du recul, de mettre des mots sur ce que l'on vit et de retrouver
    quelques repères. C'est l'ambition d'OSYS : offrir un premier espace de
    réflexion, accessible à tous, sans jugement et en toute confidentialité.
  </p>
</div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}