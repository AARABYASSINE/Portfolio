import { Education, Project, Skill, Activity, Interest } from '../types';

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Ingénieur en Cybersécurité",
    institution: "Institut national des postes et télécommunications",
    period: "2024-Présent",
    description: "Formation d'ingénieur spécialisée en cybersécurité, couvrant les aspects techniques et stratégiques de la sécurité informatique."
  },
  {
    id: 2,
    degree: "Classes Préparatoires (CPGE)",
    institution: "Abulcasis International University of Health Sciences",
    period: "2023-2024",
    description: "Programme intensif de préparation aux grandes écoles d'ingénieurs."
  },
  {
    id: 3,
    degree: "MPSI",
    institution: "Lycée Mohamed V",
    period: "2022-2023",
    description: "Classe préparatoire Mathématiques, Physique et Sciences de l'Ingénieur."
  },
  {
    id: 4,
    degree: "Baccalauréat Scientifique",
    institution: "Lycée Qualifiant Al Massira",
    period: "2021-2022",
    description: "Obtenu avec Mention Très Bien."
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Plateforme Collaborative Sécurisée de Partage de Fichiers",
    period: "En cours",
    description: "Développement d'une plateforme collaborative sécurisée pour le partage de fichiers en réseau local et environnements éducatifs.",
    technologies: ["Node.js", "Express", "Socket.io", "Encryption", "Authentication"],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Serveur MQTT avec Raspberry Pi et Service Cloud (IOT)",
    period: "2024-2025",
    description: "Configuration d'un serveur MQTT sur Raspberry Pi pour publier des données simulées, récupérées depuis des sources en ligne sur un cloud pour visualisation en temps réel.",
    technologies: ["Raspberry Pi", "MQTT", "Python", "Cloud Services", "IoT"],
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Mesure et Prédiction de la Popularité des Ligues Sportives (TIPE)",
    period: "2024",
    description: "Développement d'un modèle de prévision pour la popularité des ligues sportives utilisant l'analyse de séries temporelles et des modèles statistiques avancés.",
    technologies: ["Python", "R", "Machine Learning", "Statistiques", "Data Analysis"],
    image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const skillsData: Skill[] = [
  // Technical skills
  { id: 1, name: "Python", level: 85, category: "technical" },
  { id: 2, name: "C", level: 75, category: "technical" },
  { id: 3, name: "Java", level: 70, category: "technical" },
  { id: 4, name: "Bash", level: 80, category: "technical" },
  { id: 5, name: "R", level: 65, category: "technical" },
  { id: 6, name: "SQL", level: 70, category: "technical" },
  { id: 7, name: "LaTeX", level: 90, category: "technical" },
  { id: 8, name: "Linux", level: 85, category: "technical" },
  { id: 9, name: "Nmap", level: 80, category: "technical" },
  { id: 10, name: "Wireshark", level: 75, category: "technical" },
  
  // Languages
  { id: 11, name: "Français", level: 95, category: "language" },
  { id: 12, name: "Anglais", level: 90, category: "language" },
  { id: 13, name: "Italien", level: 100, category: "language" },
  { id: 14, name: "Arabe", level: 100, category: "language" },
  
  // Soft skills
  { id: 15, name: "Communication", level: 90, category: "soft" },
  { id: 16, name: "Travail d'équipe", level: 85, category: "soft" },
  { id: 17, name: "Résolution de problèmes", level: 95, category: "soft" },
  { id: 18, name: "Adaptabilité", level: 90, category: "soft" }
];

export const activitiesData: Activity[] = [
  {
    id: 1,
    name: "Morocco Blockchain and Cryptocurrencies Days",
    role: "Membre du staff",
    period: "2025",
    description: "Participation à l'organisation et à la logistique de l'événement blockchain au Maroc."
  },
  {
    id: 2,
    name: "CIT Security cell",
    role: "Membre actif",
    period: "2024",
    description: "Participation aux ateliers et projets de sécurité informatique, partage de connaissances et veille technologique."
  },
  {
    id: 3,
    name: "Chess Ibnou BAJA",
    role: "Membre actif",
    period: "2022-2023",
    description: "Participation aux tournois et événements d'échecs, développement de stratégies et analyse de parties."
  }
];

export const interestsData: Interest[] = [
  {
    id: 1,
    name: "IA et Machine Learning",
    icon: "brain",
    description: "Passionné par les avancées en intelligence artificielle et leur application en cybersécurité."
  },
  {
    id: 2,
    name: "Course à pied",
    icon: "running",
    description: "Pratique régulière pour maintenir une bonne condition physique et mentale."
  },
  {
    id: 3,
    name: "Dessin",
    icon: "pencil",
    description: "Expression artistique et développement de la créativité à travers le dessin."
  },
  {
    id: 4,
    name: "Écriture",
    icon: "pen-tool",
    description: "Rédaction d'articles techniques et créatifs comme moyen d'expression et de partage de connaissances."
  },
  {
    id: 5,
    name: "Voyage",
    icon: "map",
    description: "Exploration de nouvelles cultures et apprentissage à travers les voyages internationaux."
  }
];