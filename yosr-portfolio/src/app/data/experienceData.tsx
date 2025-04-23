export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    duration: string;
    date: string;
    description: string[];
  }
  
  export const experiences: Experience[] = [
    {
      id: 1,
      title: "Stage d'immersion en entreprise",
      company: "VERMEG",
      location: "Tunis",
      duration: "3 mois",
      date: "Juin 2024 - Août 2024",
      description: [
        "Développement d'un Jira AI Connector pour automatiser les tickets",
        "Création d'une interface graphique utilisateur intuitive",
        "Mise en place d'un système de gestion de l'historique des résolutions"
      ]
    },
    {
      id: 2,
      title: "Stage de Fin d'Études (PFE)",
      company: "TenStep",
      location: "Tunis",
      duration: "5 mois",
      date: "Février 2023 - Juin 2023",
      description: [
        "Conception et développement d'un site web novateur pour TenStep"
      ]
    }
  ];