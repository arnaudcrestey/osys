"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  function enterOsys() {
    router.replace("/accueil");
  }

  return (
    <main className="min-h-svh overflow-hidden bg-[#FAF8F5] text-[#1F2937]">
      <section className="relative flex min-h-svh items-center justify-center px-4 py-5 sm:px-6 sm:py-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,139,118,0.14),transparent_30rem)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(216,195,165,0.2),transparent_28rem)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#FAF8F5_0%,#F6F4F1_100%)]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl">
          <div className="relative mx-auto flex min-h-[72svh] max-w-4xl flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-[#7C8B76]/15 bg-[#FFFCF7]/78 px-5 py-10 text-center shadow-[0_34px_100px_rgba(73,84,68,0.12)] backdrop-blur-xl sm:min-h-[74svh] sm:rounded-[2.4rem] sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute right-[-9rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#7C8B76]/10 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
            <div className="pointer-events-none absolute bottom-[-10rem] left-[-9rem] h-[24rem] w-[24rem] rounded-full bg-[#D8C3A5]/20 blur-3xl sm:h-[30rem] sm:w-[30rem]" />

            <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center">
              <p className="max-w-[18rem] text-[0.58rem] font-semibold uppercase leading-5 tracking-[0.34em] text-[#7C8B76] sm:max-w-none sm:text-[0.68rem] sm:tracking-[0.42em]">
                Prévention · Préparation · Orientation
              </p>

              <h1 className="mt-7 font-signature text-[3.8rem] font-normal leading-none tracking-[0.13em] text-[#263128] sm:mt-8 sm:text-[6.4rem] md:text-[7.2rem]">
                OSYS
              </h1>

              <div className="mx-auto mt-6 h-px w-20 bg-[#7C8B76]/38 sm:mt-7 sm:w-24" />

              <h2 className="mx-auto mt-8 max-w-[21rem] font-display text-[2.25rem] font-medium leading-[1.08] tracking-[-0.055em] text-[#1F2937] sm:mt-9 sm:max-w-3xl sm:text-[3.35rem] md:text-[4.25rem]">
                <span className="block">Anticiper.</span>
                <span className="mt-2 block sm:mt-3">Organiser.</span>
                <span className="mt-2 block sm:mt-3">Se protéger.</span>
              </h2>

              <button
                type="button"
                onClick={enterOsys}
                className="mt-9 inline-flex min-w-[175px] items-center justify-center rounded-full border border-[#7C8B76]/28 bg-[#7C8B76] px-9 py-3.5 text-sm font-semibold text-white shadow-[0_22px_60px_rgba(124,139,118,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6F8069] sm:mt-10 sm:min-w-[190px] sm:px-10 sm:py-4"
              >
                Entrer
              </button>

              <p className="mx-auto mt-9 max-w-[18.5rem] text-balance font-signature text-[1.22rem] leading-8 text-[#5D6859] sm:max-w-[36rem] sm:text-[1.5rem] sm:leading-9">
                Préparer aujourd’hui ce dont vous pourriez avoir besoin demain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
