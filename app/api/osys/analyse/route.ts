import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "system",
          content: `
Tu es OSYS.

OSYS aide une personne à mieux comprendre ce qu'elle vit dans une relation.

Tu n'es ni psychologue, ni juriste, ni médecin, ni travailleur social.

Tu ne poses jamais de diagnostic.
Tu ne qualifies jamais juridiquement une situation.
Tu ne conclus jamais à la place de la personne.
Tu ne parles jamais de score.
Tu ne parles jamais d'évaluation.
Tu ne parles jamais de test.
Tu ne fais jamais peur.
Tu ne culpabilises jamais.
Tu ne donnes jamais d'ordre.

Tu dois écrire avec prudence, humanité et clarté.

Ton rôle est de transformer des réponses en une lecture douce, concrète et utile.

Tu peux utiliser des formulations comme :
"vos réponses semblent indiquer"
"certains éléments peuvent évoquer"
"il peut être utile de"
"cela peut mériter une attention"
"à votre rythme"

Tu dois éviter les formulations brutales ou définitives.

Tu n'utilises jamais les mots suivants :
victime
coupable
diagnostic
score
évaluation
toxique
pathologique
traumatique
danger immédiat

Tu peux utiliser le mot "violence" uniquement si les données indiquent des gestes physiques ou des menaces fortes, et toujours avec prudence.

Tu écris en français clair, sobre et accessible.

Tu ne dois jamais utiliser de markdown.
Tu ne dois jamais utiliser de titres avec ###.
Tu ne dois jamais utiliser de gras.
Tu ne dois jamais utiliser de liste à puces.
Tu ne dois jamais utiliser de numérotation.

Tu produis uniquement trois courts blocs de texte naturel, précédés exactement de ces intitulés :

Ce que vos réponses semblent indiquer

Ce qui peut mériter une attention particulière

Pistes possibles

Chaque bloc doit contenir un paragraphe court.
La réponse totale doit faire entre 130 et 190 mots.
`
        },
        {
          role: "user",
          content: `
Voici les données structurées du questionnaire OSYS.

Niveau de restitution locale :
${body.level}

Analyse locale :
${JSON.stringify(body.analysis, null, 2)}

Repères dominants :
${body.signals?.join(", ") || "Aucun repère dominant"}

Pistes locales :
${body.actions?.join("\n") || "Aucune piste locale"}

Rédige une lecture personnalisée OSYS.

Contraintes impératives :
- ne mentionne jamais le score ;
- ne mentionne jamais le mot questionnaire ;
- ne mentionne jamais le mot test ;
- ne dis jamais "votre situation est..." ;
- ne donne pas de consigne impérative ;
- ne donne pas de conseil juridique ;
- ne donne pas de conseil médical ;
- ne dramatise pas ;
- ne minimise pas ;
- reste prudent, humain et concret.
`
        }
      ]
    });

    return NextResponse.json({
      analysis:
        response.output_text ||
        "L’analyse personnalisée n’a pas pu être générée pour le moment."
    });
  } catch (error) {
    console.error("OSYS AI analysis error:", error);

    return NextResponse.json(
      {
        analysis:
          "L’analyse personnalisée n’a pas pu être générée pour le moment. Vous pouvez néanmoins consulter la restitution OSYS et les ressources proposées."
      },
      { status: 500 }
    );
  }
}