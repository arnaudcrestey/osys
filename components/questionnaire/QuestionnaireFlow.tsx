"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import {
  getDominantSignals,
  getOsysAnalysis,
  getPriorityActions,
  getResultLevel,
  getSummary,
  questions,
  type Question,
  type StoredAnswers
} from "@/lib/questions";
import { getStorage, setStorage, shuffle } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";

const QUESTION_COUNT = 12;
const ANALYSIS_DELAY = 5000;

const calmReading = `Ce que vos réponses semblent indiquer

Vos réponses ne font pas apparaître de signal particulièrement marqué à ce stade.

Ce qui peut mériter une attention particulière

Certaines situations peuvent évoluer avec le temps. Il peut être utile de rester attentif à ce qui vous semble important dans votre relation, sans chercher à conclure trop vite.

Pistes possibles

Vous pouvez poursuivre votre cheminement à votre rythme, revenir plus tard si vous ressentez le besoin de faire à nouveau le point, ou consulter les ressources proposées pour mieux comprendre certains repères.`;

async function sendOsysNotification(
  totalScore: number,
  resultTitle: string,
  dominantSignals: string[]
) {
  try {
    await fetch("/api/osys/notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        totalScore,
        resultTitle,
        dominantSignals
      })
    });
  } catch {
    // L'échec d'envoi du mail ne doit jamais bloquer l'utilisateur.
  }
}

export function QuestionnaireFlow() {
  const [ordered, setOrdered] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<StoredAnswers>({});
  const [aiAnalysis, setAiAnalysis] = useState("");
  const [analysisVisible, setAnalysisVisible] = useState(false);
  const [notificationSent, setNotificationSent] = useState(false);

  useEffect(() => {
    const randomized = shuffle(questions)
      .slice(0, QUESTION_COUNT)
      .map((question) => ({
        ...question,
        answers: shuffle(question.answers)
      }));

    setOrdered(randomized);
    setAnswers(getStorage<StoredAnswers>("osys-questionnaire", {}));
  }, []);

  useEffect(() => {
    setStorage("osys-questionnaire", answers);
  }, [answers]);

  const score = useMemo(() => {
    return Object.values(answers).reduce(
      (total, answer) => total + answer.score,
      0
    );
  }, [answers]);

  const complete = useMemo(() => {
    return (
      ordered.length > 0 &&
      ordered.every((question) => answers[question.id] !== undefined)
    );
  }, [ordered, answers]);

  const current = ordered[index];

  const progress = ordered.length
    ? Math.round(((index + 1) / ordered.length) * 100)
    : 0;

  const result = useMemo(() => getResultLevel(score), [score]);
  const analysis = useMemo(() => getOsysAnalysis(answers), [answers]);
  const signals = useMemo(() => getDominantSignals(analysis), [analysis]);
  const summary = useMemo(() => getSummary(signals), [signals]);
  const actions = useMemo(() => getPriorityActions(analysis), [analysis]);

  useEffect(() => {
    if (!complete) return;

    let cancelled = false;

    async function generateAnalysis() {
      setAnalysisVisible(false);
      setAiAnalysis("");

      if (!notificationSent) {
        await sendOsysNotification(score, result.title, signals);
        setNotificationSent(true);
      }

      const delay = new Promise((resolve) => {
        window.setTimeout(resolve, ANALYSIS_DELAY);
      });

      const reading = async () => {
        if (signals.length === 0) {
          return calmReading;
        }

        try {
          const response = await fetch("/api/osys/analyse", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              level: result.title,
              score,
              analysis,
              signals,
              actions
            })
          });

          const data = await response.json();

          return (
            data.analysis ||
            "La lecture personnalisée n’a pas pu être générée pour le moment. Vous pouvez néanmoins consulter les repères proposés."
          );
        } catch {
          return "La lecture personnalisée n’a pas pu être générée pour le moment. Vous pouvez néanmoins consulter les repères proposés.";
        }
      };

      const [finalReading] = await Promise.all([reading(), delay]);

      if (!cancelled) {
        setAiAnalysis(finalReading);
        setAnalysisVisible(true);
      }
    }

    generateAnalysis();

    return () => {
      cancelled = true;
    };
  }, [
    complete,
    result.title,
    score,
    analysis,
    signals,
    actions,
    notificationSent
  ]);

  function resetQuestionnaire() {
    setAnswers({});
    setIndex(0);
    setAiAnalysis("");
    setAnalysisVisible(false);
    setNotificationSent(false);
    window.localStorage.removeItem("osys-questionnaire");

    const randomized = shuffle(questions)
      .slice(0, QUESTION_COUNT)
      .map((question) => ({
        ...question,
        answers: shuffle(question.answers)
      }));

    setOrdered(randomized);
  }

  if (!current) {
    return (
      <div
        className="premium-card mt-9 min-h-80 animate-pulse p-6"
        aria-label="Chargement du questionnaire"
      />
    );
  }

  if (complete && !analysisVisible) {
    return (
      <div className="premium-card mt-9 p-8 sm:p-10">
        <p className="eyebrow">Lecture en cours</p>

        <h2 className="mt-4 font-display text-3xl font-medium">
          Préparation de votre lecture personnalisée.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
          Chaque situation est unique. OSYS prend quelques instants pour
          préparer une lecture personnalisée à partir des repères qui ressortent
          de vos réponses.
        </p>

        <div className="mt-10 rounded-3xl border border-osys-line bg-white/55 p-6">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 animate-pulse rounded-full bg-osys-sage" />
            <span className="h-3 w-3 animate-pulse rounded-full bg-osys-sage [animation-delay:150ms]" />
            <span className="h-3 w-3 animate-pulse rounded-full bg-osys-sage [animation-delay:300ms]" />
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600">
            Quelques instants sont nécessaires pour préparer votre lecture.
          </p>
        </div>
      </div>
    );
  }

  if (complete) {
    return (
      <div className="premium-card mt-9 p-6 sm:p-8">
        <p className="eyebrow">Restitution OSYS</p>

        <h2 className="mt-4 font-display text-3xl font-medium">
          {result.title}
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
          {result.tone}
        </p>

        <div className="mt-8 rounded-3xl border border-osys-line bg-white/55 p-5 sm:p-6">
          <h3 className="font-display text-2xl font-medium">
            Ce qui ressort principalement
          </h3>

          {signals.length > 0 ? (
            <ul className="mt-5 grid gap-3">
              {signals.map((signal) => (
                <li
                  key={signal}
                  className="rounded-2xl border border-osys-line bg-white/70 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {signal}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
              Aucun signal dominant ne ressort fortement à ce stade.
            </p>
          )}
        </div>

        <div className="mt-5 rounded-3xl border border-osys-line bg-white/55 p-5 sm:p-6">
          <h3 className="font-display text-2xl font-medium">
            Lecture personnalisée OSYS
          </h3>

          <p className="mt-5 max-w-3xl whitespace-pre-line text-base leading-8 text-slate-700">
            {aiAnalysis || summary}
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-osys-line bg-white/40 p-6 sm:p-8">
          <p className="font-display text-xl font-medium text-slate-800">
            Prendre un moment pour regarder sa situation avec un peu de recul
            n&apos;est jamais anodin.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Il n&apos;est pas toujours simple de comprendre ce que l&apos;on
            vit, ni de savoir quelle place accorder à certains événements,
            ressentis ou questionnements.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Vous n&apos;avez pas besoin d&apos;avoir toutes les réponses
            aujourd&apos;hui.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Cette lecture a simplement pour objectif de vous offrir quelques
            repères afin de vous aider à prendre du recul, mieux comprendre
            certaines situations et avancer à votre rythme.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Si certains éléments vous interpellent, les ressources proposées par
            OSYS peuvent constituer un premier point d&apos;appui. Vous pouvez
            également, si vous en ressentez le besoin, échanger avec un
            professionnel ou une structure spécialisée capable de vous
            accompagner.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            L&apos;essentiel est de rester à l&apos;écoute de ce qui vous paraît
            juste pour vous, au moment qui vous semble le plus approprié.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/preparer" showArrow>
            Préparer l&apos;essentiel
          </ButtonLink>

          <ButtonLink href="/ressources" variant="secondary" showArrow>
            Voir les ressources
          </ButtonLink>

          <button
            type="button"
            className="btn-secondary gap-2"
            onClick={resetQuestionnaire}
          >
            <RotateCcw size={16} aria-hidden="true" />
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <p className="eyebrow">Faire le point</p>

      <h1 className="page-title mt-5">
        Mieux comprendre ce que vous vivez.
      </h1>

      <p className="body-large mt-5 max-w-2xl">
        Répondez aux questions qui suivent à votre rythme. Cette lecture a pour
        objectif de vous aider à prendre du recul et à identifier certains
        repères.
      </p>

      <div className="premium-card mt-9 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-slate-600">
            Question {index + 1} sur {ordered.length}
          </p>

          <p className="eyebrow">{current.category}</p>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-osys-surface">
          <div
            className="h-full rounded-full bg-osys-sage transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <fieldset className="mt-8">
          <legend className="font-display text-2xl font-medium leading-snug">
            {current.text}
          </legend>

          <div className="mt-6 grid gap-3">
            {current.answers.map((answer) => {
              const selected = answers[current.id]?.answerId === answer.id;

              return (
                <label
                  key={answer.id}
                  className={[
                    "flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition",
                    selected
                      ? "border-osys-sage bg-white"
                      : "border-osys-line bg-white/50 hover:border-osys-sage hover:bg-white"
                  ].join(" ")}
                >
                  <input
                    type="radio"
                    name={current.id}
                    value={answer.id}
                    checked={selected}
                    onChange={() =>
                      setAnswers((value) => ({
                        ...value,
                        [current.id]: {
                          answerId: answer.id,
                          score: answer.score
                        }
                      }))
                    }
                    className="h-4 w-4 accent-osys-sage"
                  />

                  <span className="text-sm font-medium leading-6">
                    {answer.label}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            className="btn-secondary gap-2"
            onClick={() => setIndex((value) => Math.max(0, value - 1))}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Retour
          </button>

          <button
            type="button"
            className="btn-primary gap-2"
            onClick={() =>
              setIndex((value) => Math.min(ordered.length - 1, value + 1))
            }
            disabled={answers[current.id] === undefined}
          >
            Suivant
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}
