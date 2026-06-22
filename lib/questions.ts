export type Answer = {
  id: string;
  label: string;
  score: number;
};

export type QuestionCategory =
  | "Respect"
  | "Contrôle"
  | "Isolement"
  | "Dévalorisation"
  | "Intimité"
  | "Pression"
  | "Gestes"
  | "Impact";

export type Question = {
  id: string;
  category: QuestionCategory;
  text: string;
  answers: Answer[];
};

export type StoredAnswer = {
  answerId: string;
  score: number;
};

export type StoredAnswers = Record<string, StoredAnswer>;

export type OsysAnalysisData = {
  respect: number;
  controle: number;
  isolement: number;
  devalorisation: number;
  intimite: number;
  pression: number;
  gestes: number;
  impact: number;
};

const sharedAnswers: Answer[] = [
  { id: "never", label: "Non, jamais", score: 0 },
  { id: "sometimes", label: "Cela arrive parfois", score: 1 },
  { id: "often", label: "Cela revient souvent", score: 2 },
  { id: "unclear", label: "Je ne sais pas vraiment", score: 1 }
];

export const questions: Question[] = [
  {
    id: "respect-1",
    category: "Respect",
    text: "Vos décisions sont-elles parfois remises en question ?",
    answers: sharedAnswers
  },
  {
    id: "respect-2",
    category: "Respect",
    text: "Vos envies ou vos goûts sont-ils parfois critiqués ?",
    answers: sharedAnswers
  },
  {
    id: "respect-3",
    category: "Respect",
    text: "Votre accord est-il parfois peu pris en compte ?",
    answers: sharedAnswers
  },
  {
    id: "devalorisation-1",
    category: "Dévalorisation",
    text: "Vous sentez-vous parfois rabaissé dans vos opinions ou vos projets ?",
    answers: sharedAnswers
  },
  {
    id: "devalorisation-2",
    category: "Dévalorisation",
    text: "Vous arrive-t-il d’être moqué devant d’autres personnes ?",
    answers: sharedAnswers
  },
  {
    id: "devalorisation-3",
    category: "Dévalorisation",
    text: "Vous sentez-vous parfois humilié lorsque vous exprimez un désaccord ?",
    answers: sharedAnswers
  },
  {
    id: "controle-1",
    category: "Contrôle",
    text: "Vos sorties sont-elles parfois contrôlées ?",
    answers: sharedAnswers
  },
  {
    id: "controle-2",
    category: "Contrôle",
    text: "Votre manière de vous habiller est-elle parfois contrôlée ?",
    answers: sharedAnswers
  },
  {
    id: "controle-3",
    category: "Contrôle",
    text: "Votre téléphone, vos messages ou vos applications sont-ils parfois consultés ?",
    answers: sharedAnswers
  },
  {
    id: "controle-4",
    category: "Contrôle",
    text: "La jalousie prend-elle parfois beaucoup de place dans la relation ?",
    answers: sharedAnswers
  },
  {
    id: "controle-5",
    category: "Contrôle",
    text: "Vous arrive-t-il de faire certaines choses pour éviter une réaction ?",
    answers: sharedAnswers
  },
  {
    id: "isolement-1",
    category: "Isolement",
    text: "Votre relation avec votre partenaire complique-t-elle parfois vos relations avec vos proches ?",
    answers: sharedAnswers
  },
  {
    id: "isolement-2",
    category: "Isolement",
    text: "Vous arrive-t-il de vous éloigner de votre famille ou de vos amis ?",
    answers: sharedAnswers
  },
  {
    id: "intimite-1",
    category: "Intimité",
    text: "Vous arrive-t-il d’accepter une situation intime sans en avoir vraiment envie ?",
    answers: sharedAnswers
  },
  {
    id: "intimite-2",
    category: "Intimité",
    text: "Vos limites sont-elles parfois peu respectées ?",
    answers: sharedAnswers
  },
  {
    id: "intimite-3",
    category: "Intimité",
    text: "Vos refus sont-ils parfois peu entendus ?",
    answers: sharedAnswers
  },
  {
    id: "intimite-4",
    category: "Intimité",
    text: "Vous arrive-t-il de ressentir une pression autour de photos ou messages intimes ?",
    answers: sharedAnswers
  },
  {
    id: "pression-1",
    category: "Pression",
    text: "Vous arrive-t-il de subir du chantage lorsque vous refusez quelque chose ?",
    answers: sharedAnswers
  },
  {
    id: "pression-2",
    category: "Pression",
    text: "Avez-vous parfois peur que des informations ou photos soient utilisées contre vous ?",
    answers: sharedAnswers
  },
  {
    id: "pression-3",
    category: "Pression",
    text: "Certaines réactions vous inquiètent-elles lorsqu’un désaccord apparaît ?",
    answers: sharedAnswers
  },
  {
    id: "gestes-1",
    category: "Gestes",
    text: "Avez-vous déjà été poussé, tiré, secoué ou frappé ?",
    answers: sharedAnswers
  },
  {
    id: "gestes-2",
    category: "Gestes",
    text: "Certains gestes physiques vous ont-ils déjà fait peur ?",
    answers: sharedAnswers
  },
  {
    id: "impact-1",
    category: "Impact",
    text: "Ce que vous vivez perturbe-t-il parfois votre sommeil ?",
    answers: sharedAnswers
  },
  {
    id: "impact-2",
    category: "Impact",
    text: "Ce que vous vivez pèse-t-il parfois sur votre énergie ou votre santé ?",
    answers: sharedAnswers
  }
];

export function getResultLevel(score: number) {
  if (score <= 6) {
    return {
      title: "Situation à clarifier",
      tone: "Vos réponses font apparaître quelques éléments qui peuvent mériter une attention calme et progressive.",
      next: "Vous pouvez prendre le temps d’observer ce qui revient et consulter les pages Comprendre ou Préparer à votre rythme."
    };
  }

  if (score <= 15) {
    return {
      title: "Situation préoccupante",
      tone: "Plusieurs réponses indiquent qu’il peut être utile de mieux comprendre ce qui se répète et de ne pas rester seul avec vos questions.",
      next: "Identifier une personne de confiance, conserver certains repères et préparer progressivement quelques ressources peut vous aider à avancer avec plus de sécurité."
    };
  }

  return {
    title: "Situation méritant une attention particulière",
    tone: "Vos réponses font apparaître plusieurs éléments qui peuvent appeler une attention particulière et, si possible, un soutien extérieur spécialisé.",
    next: "Vous pouvez vous appuyer sur les ressources proposées, préparer les éléments essentiels et échanger avec une structure ou un professionnel si vous en ressentez le besoin."
  };
}

export function getOsysAnalysis(answers: StoredAnswers): OsysAnalysisData {
  const data: OsysAnalysisData = {
    respect: 0,
    controle: 0,
    isolement: 0,
    devalorisation: 0,
    intimite: 0,
    pression: 0,
    gestes: 0,
    impact: 0
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    if (questionId.startsWith("respect")) data.respect += answer.score;
    if (questionId.startsWith("controle")) data.controle += answer.score;
    if (questionId.startsWith("isolement")) data.isolement += answer.score;
    if (questionId.startsWith("devalorisation")) data.devalorisation += answer.score;
    if (questionId.startsWith("intimite")) data.intimite += answer.score;
    if (questionId.startsWith("pression")) data.pression += answer.score;
    if (questionId.startsWith("gestes")) data.gestes += answer.score;
    if (questionId.startsWith("impact")) data.impact += answer.score;
  });

  return data;
}

export function getDominantSignals(data: OsysAnalysisData): string[] {
  const signals: string[] = [];

  if (data.respect >= 2) {
    signals.push("Respect ou accord parfois fragilisé");
  }

  if (data.controle >= 2) {
    signals.push("Signaux de contrôle");
  }

  if (data.isolement >= 2) {
    signals.push("Éloignement possible des proches");
  }

  if (data.devalorisation >= 2) {
    signals.push("Paroles ou attitudes dévalorisantes");
  }

  if (data.intimite >= 2) {
    signals.push("Limites personnelles moins respectées");
  }

  if (data.pression >= 2) {
    signals.push("Pressions ou réactions inquiétantes");
  }

  if (data.gestes >= 1) {
    signals.push("Gestes ou comportements physiques inquiétants");
  }

  if (data.impact >= 1) {
    signals.push("Impact sur le quotidien");
  }

  return signals;
}

export function getSummary(signals: string[]): string {
  if (signals.length === 0) {
    return "Vos réponses ne font pas apparaître de signal particulièrement marqué à ce stade. Certaines situations peuvent néanmoins évoluer avec le temps et mériter une attention progressive.";
  }

  return `Vos réponses font apparaître certains repères importants : ${signals.join(
    ", "
  )}. Ces éléments ne permettent pas de qualifier à eux seuls une situation, mais ils peuvent aider à mieux comprendre ce que vous vivez.`;
}

export function getPriorityActions(data: OsysAnalysisData): string[] {
  const actions: string[] = [];

  if (data.gestes >= 1 || data.pression >= 2) {
    actions.push("Identifier une personne, un lieu ou une ressource fiable vers laquelle vous pourriez vous tourner si la situation se tend.");
  }

  if (data.controle >= 2 || data.isolement >= 2) {
    actions.push("Préserver, autant que possible, un lien avec une personne de confiance.");
  }

  if (data.devalorisation >= 2 || data.intimite >= 2 || data.respect >= 2) {
    actions.push("Noter les situations qui reviennent peut aider à mieux repérer ce qui se répète.");
  }

  if (data.impact >= 1) {
    actions.push("Échanger avec une ressource fiable peut aider à ne pas porter seul ce que vous vivez.");
  }

  if (actions.length === 0) {
    actions.push("Continuer à observer la situation et avancer à votre rythme.");
    actions.push("Consulter les pages Comprendre et Préparer peut aider à clarifier certains repères.");
  }

  return actions;
}
