"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  function enterOsys() {
    router.replace("/accueil");
  }

  return (
    <main className="min-h-svh overflow-hidden bg-[#FAF8F5] text-[#1F2937]">
      <section className="relative flex min-h-svh items-center justify-center px-4 py-5 sm:px-6 sm:py-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,139,118,0.14),transparent_34rem)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(216,195,165,0.22),transparent_32rem)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#FAF8F5_0%,#F6F4F1_100%)]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl">
          <div className="relative mx-auto flex min-h-[70svh] max-w-4xl flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-[#7C8B76]/14 bg-[#FFFCF7]/76 px-6 py-10 text-center shadow-[0_42px_140px_rgba(73,84,68,0.12)] backdrop-blur-xl sm:min-h-[74svh] sm:rounded-[2.3rem] sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute right-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#7C8B76]/10 blur-3xl" />
            <div className="pointer-events-none absolute left-[-10rem] bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#D8C3A5]/22 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-[0.56rem] font-semibold uppercase tracking-[0.34em] text-[#7C8B76] sm:text-[0.68rem] sm:tracking-[0.42em]">
                Prévention · Préparation · Orientation
              </p>

              <h1 className="mt-7 font-signature text-[3.7rem] font-normal leading-none tracking-[0.13em] text-[#263128] sm:mt-8 sm:text-[6.4rem] md:text-[7.2rem]">
                OSYS
              </h1>

              <div className="mx-auto mt-6 h-px w-20 bg-[#7C8B76]/38 sm:mt-7 sm:w-24" />

              <h2 className="mx-auto mt-8 max-w-3xl font-display text-[2.15rem] font-medium leading-[1.1] tracking-[-0.055em] text-[#1F2937] sm:mt-9 sm:text-[3.35rem] md:text-[4.25rem]">
                <span className="block">Anticiper.</span>
                <span className="mt-2 block sm:mt-3">Organiser.</span>
                <span className="mt-2 block sm:mt-3">Se protéger.</span>
              </h2>

              <button
                type="button"
                onClick={enterOsys}
                className="mt-9 inline-flex min-w-[170px] items-center justify-center rounded-full border border-[#7C8B76]/28 bg-[#7C8B76] px-9 py-3.5 text-sm font-semibold text-white shadow-[0_22px_60px_rgba(124,139,118,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6F8069] sm:mt-10 sm:min-w-[188px] sm:px-10 sm:py-4"
              >
                Entrer
              </button>

              <p className="mx-auto mt-9 max-w-[34rem] font-signature text-[1.18rem] leading-7 text-[#5D6859] sm:text-[1.45rem] sm:leading-8">
                <span className="block">
                  Préparer aujourd’hui ce dont vous pourriez
                </span>
                <span className="block">avoir besoin demain.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}