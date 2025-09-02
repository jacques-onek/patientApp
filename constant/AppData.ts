
export const patients = 
    {
      id: 1,
      prenom: "Samuel",
      nom: "Kabeya",
      age: 34,
      sexe: "M"
    }
  
  
    export const rendezvous = [
      {
        id: 1,
        medecin: "Dr. Nathalie Mbala",
        specialite: "Généraliste",
        date: "2025-09-03",
        lieu: "Centre Médical de Gombe",
        heure: "14:30",
        statut: "à venir",
        description: "Fièvre persistante"
      },
      {
        id: 2,
        medecin: "Dr. Jean-Claude Ilunga",
        specialite: "Cardiologue",
        date: "2025-09-15",
        lieu: "Clinique Ngaliema",
        heure: "14:30",
        statut: "à venir",
        description: "Douleur thoracique"
      },
      {
        id: 3,
        medecin: "Dr. Chantal Tshibangu",
        specialite: "Dentiste",
        date: "2025-08-12",
        lieu: "Hôpital du Cinquantenaire",
        heure: "14:30",
        statut: "passé",
        description: "Carie dentaire"
      },
      {
        id: 4,
        medecin: "Dr. Augustin Mulumba",
        specialite: "Dermatologue",
        date: "2025-07-28",
        lieu: "Polyclinique Kinshasa",
        heure: "14:30",
        statut: "passé",
        description: "Éruption cutanée"
      },
      {
        id: 5,
        medecin: "Dr. Marie-Louise Kapinga",
        specialite: "Ophtalmologue",
        date: "2025-09-20",
        lieu: "Centre Hospitalier Monkole",
        heure: "14:30",
        statut: "à venir",
        description: "Vision floue"
      }
    ];
    
  
    export const dossiers = [
      {
        titre: "Dossier médical de suivi HTA et paludisme",
        patient: {
          nom: "Kabongo Jean",
          age: 45,
          sexe: "Masculin",
          numeroDossier: "DOSS-2025-001"
        },
        docteur: "Dr. Nathalie Mbala",
        dateCreation: "2023-10-01",
        derniereMiseAJour: "2025-08-20",
        statut: "en cours",
        symptomes: [
          "Maux de tête fréquents",
          "Vertiges",
          "Fatigue persistante",
          "Douleurs musculaires occasionnelles"
        ],
        antecedents: [
          {
            maladie: "Hypertension artérielle",
            dateDiagnostic: "2020-06-15",
            docteur: "Dr. Nathalie Mbala",
            statut: "Maladie chronique"
          },
          {
            maladie: "Paludisme à répétition",
            dateDiagnostic: "2018-09-20",
            docteur: "Dr. Jean-Claude Ilunga",
            statut: "Infection aiguë"
          },
          {
            maladie: "Appendicectomie",
            dateDiagnostic: "2015-04-10",
            docteur: "Dr. Patrick Tshibangu",
            statut: "Chirurgie"
          },
          {
            maladie: "Antécédent familial : diabète (père)",
            dateDiagnostic: "Historique familial",
            docteur: "N/A",
            statut: "Antécédent familial"
          }
        ],               
        allergies: [
          "Pénicilline",
          "Arachides"
        ],
        traitements: [
          {
            medicament: "Amlodipine",
            posologie: "1 comprimé de 5mg chaque matin",
            debut: "2023-10-01",
            statut: "en cours"
          },
          {
            medicament: "Vitamine D",
            posologie: "1 gélule par semaine",
            debut: "2024-03-15",
            statut: "en cours"
          },
          {
            medicament: "Paracétamol",
            posologie: "500mg en cas de douleurs",
            debut: "2024-12-10",
            statut: "au besoin"
          },
          {
            medicament: "Hydroxychloroquine",
            posologie: "200mg pendant 7 jours",
            debut: "2021-06-05",
            fin: "2021-06-12",
            statut: "terminé"
          }
        ],
        examens: [
          {
            type: "Tension artérielle",
            resultat: "145/95 mmHg",
            date: "2025-08-15"
          },
          {
            type: "Analyse sanguine",
            resultat: "Normale sauf légère anémie",
            date: "2025-08-10"
          }
        ],
        notes: "Patient suivi pour HTA, traitement bien toléré. Surveillance mensuelle recommandée."
      }
    ];
    
  
  export const recommandations = [
    {
      id: 1,
      categorie: "Nutrition",
      titre: "Hydratation quotidienne",
      conseil: "Buvez au minimum 1,5 litre d’eau par jour.",
      description: "L’eau permet de maintenir une bonne circulation sanguine, d’éliminer les toxines et d’éviter la fatigue et les maux de tête liés à la déshydratation."
    },
    {
      id: 2,
      categorie: "Sommeil",
      titre: "Sommeil réparateur",
      conseil: "Essayez de dormir 7 à 8 heures chaque nuit.",
      description: "Un sommeil suffisant améliore la concentration, renforce le système immunitaire et réduit le risque de maladies chroniques."
    },
    {
      id: 3,
      categorie: "Activité physique",
      titre: "Bouger chaque jour",
      conseil: "Pratiquez au moins 30 minutes de marche rapide ou de sport léger par jour.",
      description: "Une activité physique régulière aide à contrôler le poids, réduit le stress et améliore la santé cardiovasculaire."
    },
    {
      id: 4,
      categorie: "Nutrition",
      titre: "Limiter les boissons sucrées",
      conseil: "Réduisez la consommation de boissons sucrées et gazeuses.",
      description: "Ces boissons favorisent la prise de poids, les caries et augmentent le risque de diabète de type 2."
    },
    {
      id: 5,
      categorie: "Sommeil",
      titre: "Éviter les excitants",
      conseil: "Évitez le café ou le thé après 18h.",
      description: "La caféine perturbe l’endormissement et réduit la qualité du sommeil profond."
    },
    {
      id: 6,
      categorie: "Activité physique",
      titre: "Privilégier les escaliers",
      conseil: "Privilégiez les escaliers plutôt que l’ascenseur.",
      description: "Ce petit effort quotidien renforce les muscles, améliore l’endurance et augmente la dépense énergétique."
    },
    {
      id: 7,
      categorie: "Nutrition",
      titre: "Fruits et légumes au quotidien",
      conseil: "Mangez au moins 5 fruits et légumes par jour.",
      description: "Riches en fibres, vitamines et minéraux, ils réduisent les risques de maladies cardiovasculaires et renforcent le système immunitaire."
    },
    {
      id: 8,
      categorie: "Sommeil",
      titre: "Horaires réguliers",
      conseil: "Maintenez des horaires réguliers de coucher et de réveil.",
      description: "Une routine de sommeil stable régule l’horloge biologique et favorise un repos de meilleure qualité."
    }
  ];
  