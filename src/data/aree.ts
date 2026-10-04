/**
 * Le 9 aree di servizio IT di PGNetwork (dall'infografica del cliente).
 * Usate dalla home (griglia sintetica) e da /servizi (schede con dettaglio).
 * `icon` contiene i tracciati SVG (viewBox 24x24, stile lucide, solo stroke).
 */
export interface Servizio {
  title: string;
  desc: string;
}

export interface Area {
  slug: string;
  title: string;
  icon: string;
  short: string;
  desc: string;
  tech: string[];
  servizi?: Servizio[];
}

export const aree: Area[] = [
  {
    slug: "sviluppo",
    title: "Development & Integration",
    icon: '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
    short: "Applicazioni, API e integrazioni che collegano i tuoi sistemi.",
    desc: "Sviluppo di applicazioni e integrazione tra sistemi: API, microservizi e connettori per far dialogare software, database e infrastruttura.",
    tech: ["Sviluppo applicazioni", "API", "Microservizi", "Integrazioni"],
  },
  {
    slug: "database",
    title: "Database & Data Management",
    icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    short: "Amministrazione, performance e affidabilità dei dati aziendali.",
    desc: "Il cuore di PGNetwork: amministrazione, ottimizzazione e messa in sicurezza dei database aziendali, con un metodo verificabile dall'assessment all'handover.",
    tech: ["Oracle Database", "SQL Server", "PostgreSQL", "MongoDB", "MySQL / MariaDB", "IBM Db2"],
    servizi: [
      {
        title: "Database Assessment",
        desc: "Analisi dello stato di salute di database e infrastrutture: performance, sicurezza, configurazioni e criticità, con report e piano di intervento.",
      },
      {
        title: "Performance Tuning",
        desc: "Ottimizzazione delle prestazioni di database e istanze: analisi dei colli di bottiglia, tuning di parametri, indici e risorse.",
      },
      {
        title: "Ottimizzazione Query",
        desc: "Analisi e riscrittura delle query critiche, gestione di indici e piani di esecuzione per ridurre tempi di risposta e carico sui sistemi.",
      },
      {
        title: "Supporto DBA",
        desc: "Gestione ordinaria e straordinaria degli ambienti: monitoraggio, manutenzione, patching e presidio continuo, anche in affiancamento ai team interni.",
      },
      {
        title: "Migration & Consolidation",
        desc: "Migrazione, refresh e consolidamento di ambienti database, con assessment, pianificazione, collaudo e documentazione tecnica.",
      },
    ],
  },
  {
    slug: "cloud",
    title: "Cloud Oracle",
    icon: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    short: "Progettazione, migrazione e gestione su Oracle Cloud.",
    desc: "Progettazione, migrazione e gestione di ambienti Oracle Cloud Infrastructure ed Exadata, con attenzione a prestazioni, costi e sicurezza.",
    tech: ["OCI", "Exadata", "OAC", "OIC", "OKE", "Cloud Migration"],
  },
  {
    slug: "infrastruttura",
    title: "System & Infrastructure",
    icon: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
    short: "Server, virtualizzazione, storage e rete gestiti con continuità.",
    desc: "Gestione di server Linux e Windows, virtualizzazione, storage e networking, per infrastrutture stabili, monitorate e documentate.",
    tech: ["Linux", "Windows", "Virtualizzazione", "Storage", "Networking"],
    servizi: [
      {
        title: "Cloud & Infrastructure",
        desc: "Progettazione e gestione di infrastrutture on-premise e cloud (Oracle Cloud, Linux, networking, storage), con focus su affidabilità e sicurezza.",
      },
    ],
  },
  {
    slug: "sicurezza",
    title: "Cybersecurity",
    icon: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    short: "Valutazione dei rischi, controllo accessi e conformità.",
    desc: "Valutazione dei rischi, controllo degli accessi, auditing e hardening per proteggere dati e sistemi e restare conformi.",
    tech: ["Security Assessment", "Access Control", "Compliance", "Audit"],
    servizi: [
      {
        title: "Security & Compliance",
        desc: "Security assessment, access control, auditing e hardening per mettere in sicurezza database e infrastrutture.",
      },
    ],
  },
  {
    slug: "backup",
    title: "Backup & Disaster Recovery",
    icon: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    short: "Backup e ripristino per ridurre fermi e perdite di dati.",
    desc: "Strategie di backup, test di ripristino, replica e alta disponibilità per proteggere i dati e ridurre i tempi di fermo.",
    tech: ["Backup Strategy", "Replication", "HA / DR", "Business Continuity"],
    servizi: [
      {
        title: "Backup & Recovery",
        desc: "Strategie di backup, test di ripristino, replica e continuità operativa (HA/DR) per proteggere i dati e ridurre i tempi di fermo.",
      },
    ],
  },
  {
    slug: "devops",
    title: "DevOps & Automation",
    icon: '<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/>',
    short: "Automazione, container e pipeline di rilascio.",
    desc: "Automazione dei processi IT, container e pipeline di rilascio per rendere gli ambienti ripetibili, monitorati e affidabili.",
    tech: ["CI/CD", "Ansible", "Docker", "Kubernetes", "Monitoring"],
  },
  {
    slug: "dati",
    title: "Data & Analytics",
    icon: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    short: "Dai dati grezzi alle decisioni: integrazione e BI.",
    desc: "Integrazione dei dati, business intelligence e modellazione per trasformare i dati in informazioni utili alle decisioni.",
    tech: ["Data Integration", "Business Intelligence", "Data Modeling"],
  },
  {
    slug: "consulenza",
    title: "Consulenza tecnica",
    icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    short: "Architetture, tuning e supporto specialistico.",
    desc: "Supporto specialistico su architetture, performance e problem solving, anche in affiancamento ai team interni.",
    tech: ["Architettura", "Performance Tuning", "Problem Solving", "Supporto Specialistico"],
    servizi: [
      {
        title: "Consulenza Database",
        desc: "Supporto specialistico su Oracle, SQL Server, PostgreSQL, MongoDB, MySQL / MariaDB e Db2: architettura, scelte tecnologiche e best practice.",
      },
    ],
  },
];
