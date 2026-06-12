import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type NotificationPayload = {
  totalScore: number;
  resultTitle: string;
  dominantSignals: string[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NotificationPayload;

    const notificationEmail = process.env.OSYS_NOTIFICATION_EMAIL;

    if (!notificationEmail) {
      return NextResponse.json(
        { error: "Adresse de notification manquante." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: `"OSYS" <${process.env.SMTP_USER}>`,
      to: notificationEmail,
      subject: "OSYS — Questionnaire complété",
      text: `
Un questionnaire OSYS vient d'être complété.

Date : ${new Date().toLocaleString("fr-FR", {
        timeZone: "Europe/Paris"
      })}

Score global : ${body.totalScore}
Niveau obtenu : ${body.resultTitle}

Signaux dominants :
${
  body.dominantSignals.length > 0
    ? body.dominantSignals.map((signal) => `- ${signal}`).join("\n")
    : "- Aucun signal dominant marqué"
}

Notification statistique anonyme.
Aucune identité, aucune adresse IP et aucune réponse détaillée ne sont transmises.
      `.trim()
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de la notification." },
      { status: 500 }
    );
  }
}
