/**
 * Mappa organizzativa di PGNetwork (organigramma).
 * Dati separati dalla grafica: per aggiungere aree, partner o collaboratori
 * basta modificare questo file, la sezione si aggiorna da sola.
 *
 * NOTE DA CONFERMARE col cliente (vedi messaggio):
 *  - area di Gaetano (partner esterno) non indicata nel brief.
 *  - terzo DBA tra i collaboratori: nel brief compare sia "Emanuele" (due
 *    volte) sia "Roberto". Qui messo Roberto: confermare il nome esatto.
 */
export interface Persona {
  name: string;
  tipo: "Partner esterno" | "Collaboratore";
  area: string;
}

export const leader = {
  name: "Patrizia Gardis",
  ruolo: "Founder & CEO",
  org: "PGNetwork",
  desc: "Direzione strategica, sviluppo commerciale, partnership e coordinamento del network.",
  foto: "/patrizia-ritratto.jpg",
};

// Ramo A: direzione e sviluppo dei servizi PGNetwork
export const areeServizi: string[] = [
  "AI & Intelligent Automation",
  "AI Service Desk",
  "Sviluppo commerciale e partnership",
  "Database & Data Management",
];

// Ramo B1: partner esterni autonomi (nessun rapporto gerarchico coi collaboratori)
export const partnerEsterni: Persona[] = [
  { name: "Enrico", tipo: "Partner esterno", area: "IT Management" },
  { name: "Gaetano", tipo: "Partner esterno", area: "Specializzazione da definire" },
];

// Ramo B2: collaboratori
export const collaboratori: Persona[] = [
  { name: "Fabrizio", tipo: "Collaboratore", area: "Cybersecurity e Sistemi Operativi" },
  { name: "Simone", tipo: "Collaboratore", area: "Windows e Systems Administration" },
  { name: "Emanuele", tipo: "Collaboratore", area: "Database Administration" },
  { name: "Marco", tipo: "Collaboratore", area: "Database Administration" },
  { name: "Roberto", tipo: "Collaboratore", area: "Database Administration" },
];
