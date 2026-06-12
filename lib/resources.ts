export type Resource = {
  id: string;
  name: string;
  type: string;
  city: string;
  postalCode: string;
  phone: string;
  distance: string;
  description: string;
};

export const resources: Resource[] = [
  {
    id: "3919",
    name: "3919 — Violences Femmes Info",
    type: "Écoute nationale",
    city: "France",
    postalCode: "National",
    phone: "3919",
    distance: "National",
    description:
      "Numéro national d’écoute, d’information et d’orientation pour les femmes victimes de violences, leur entourage et les professionnels concernés."
  },
  {
    id: "116006",
    name: "116 006 — Aide aux victimes",
    type: "Aide aux victimes",
    city: "France",
    postalCode: "National",
    phone: "116 006",
    distance: "National",
    description:
      "Numéro gratuit permettant d’être écouté et orienté vers une association d’aide aux victimes ou un service spécialisé."
  },
  {
    id: "17",
    name: "Police Secours",
    type: "Urgence",
    city: "France",
    postalCode: "National",
    phone: "17",
    distance: "Urgence",
    description:
      "À contacter immédiatement en cas de danger actuel, menace, violence en cours ou besoin d’intervention urgente."
  },
  {
    id: "114",
    name: "Urgence SMS — 114",
    type: "Urgence discrète",
    city: "France",
    postalCode: "National",
    phone: "114",
    distance: "National",
    description:
      "Numéro d’urgence accessible par SMS, utile lorsqu’il n’est pas possible de parler ou d’appeler en sécurité."
  },
  {
    id: "cidff-national",
    name: "CIDFF — Centres d’information sur les droits des femmes et des familles",
    type: "Information juridique",
    city: "France",
    postalCode: "National",
    phone: "Selon département",
    distance: "Annuaire",
    description:
      "Information sur les droits, accompagnement, orientation et soutien dans les démarches."
  },
  {
    id: "france-victimes-national",
    name: "France Victimes",
    type: "Aide aux victimes",
    city: "France",
    postalCode: "National",
    phone: "116 006",
    distance: "National",
    description:
      "Réseau d’associations d’aide aux victimes permettant une écoute, une orientation et un accompagnement adapté."
  },
  {
    id: "mjd-national",
    name: "Maisons de justice et du droit",
    type: "Permanence juridique",
    city: "France",
    postalCode: "National",
    phone: "Selon ville",
    distance: "Annuaire",
    description:
      "Lieux d’accès au droit proposant des informations juridiques et des permanences de proximité."
  },
  {
    id: "services-sociaux",
    name: "Services sociaux départementaux ou municipaux",
    type: "Services sociaux",
    city: "France",
    postalCode: "National",
    phone: "Selon commune",
    distance: "Local",
    description:
      "Accompagnement social, logement, aides administratives, protection familiale et orientation vers les dispositifs locaux."
  }
];

export const resourceTypes = [
  "Écoute nationale",
  "Urgence",
  "Urgence discrète",
  "Aide aux victimes",
  "Information juridique",
  "Permanence juridique",
  "Services sociaux"
];