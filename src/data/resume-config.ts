// Copy resume-config.example.ts and customize it with your own information.
// See docs/CUSTOMIZATION.md for a detailed guide.
import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Victor De Vos',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo2.jpg',
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Technical Writer',
      fr: 'Rédacteur technique',
    },
    subtitle: {
      en: '2 years of experience',
      fr: '2 ans d\'expérience',
    },
    location: 'Lyon, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Victor De Vos — Technical Writer',
    description: 'Interactive resume of Victor De Vos, Technical Writer specializing in documentation and content creation.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'VictorDvs', href: 'https://github.com/VictorDvs' },
    { type: 'linkedin', label: 'Victor De Vos', href: 'https://linkedin.com/in/victor2vos' },
    { type: 'email', label: 'victordevos.pro@gmail.com' },
    { type: 'phone', label: '+33 6 81 88 31 76' },
    { type: 'location', label: 'Lyon, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'TOEIC 950' },
      ],
    },
    {
      title: { en: 'CCMS', fr: 'CCMS' },
      type: 'badges',
      items: [
        { name: 'Oxygen XML' },
        { name: 'Ixia CCMS' },
        { name: 'Paligo' },
      ],
    },
    {
      title: { en: 'Languages & Frameworks', fr: 'Langages & Frameworks' },
      type: 'badges',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'SCSS' },
        { name: 'JavaScript' },
        { name: 'Vue.js' },
        { name: 'PHP' },
        { name: 'Symfony' },
        { name: 'MySQL' },
        { name: 'Markdown' },
        { name: 'JSON' },
        { name: 'YAML' },
        { name: 'API REST' },
      ],
    },
    {
      title: { en: 'Other Tools', fr: 'Autres outils' },
      type: 'badges',
      items: [
        { name: 'VS Code' },
        { name: 'Git' },
        { name: 'MkDocs' },
        { name: 'Docusaurus' },
        { name: 'Postman' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Docs-as-Code, Agile, Structured Writing, Peer Review, Code Review', fr: 'Docs-as-Code, Agile, Rédaction structurée, Peer Review, Code Review' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'Efor Group', fr: 'Efor Group' },
      role: { en: 'Consultant', fr: 'Consultant' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: 'Nov. 2025 - Jan. 2026', fr: 'Nov. 2025 - Jan. 2026' },
      description: {
        en: 'Created user guides for a medical software. Structured writing, minimalist style, DITA XML ➡️ PDF.',
        fr: 'Création du guide utilisateur d\'un logiciel dans le domaine médical. Rédaction structurée, style minimaliste, DITA XML ➡️ PDF.',
      },
      techs: ['Ixia CCMS', 'DITA'],
      isHighlighted: false,
      details: {
        context: {
          en: 'The client needed a technical writer to create a user guide. Recurring points with the project manager, technical reviews, and generation of an initial version of the guide.',
          fr: 'Le client avait besoin d\'un rédacteur technique pour créer un guide utilisateur en vue du déploiement d\'un de ses logiciels. Points récurrents avec le chef de projet, review technique et génération d\'une première version du guide.',
        },
        tasks: {
          en: [
            'Gathered technical information from project manager',
            'Used Ixia CCMS to create the guide structure and write content in DITA XML',
            'Wrote with a minimalist, user-focused style',
            'Respected technical writing standards and regulatory requirements of the medical industry',
            'Respected tight project deadlines for delivering the first version of the guide',
          ],
          fr: [
            'Recueillir les informations techniques auprès du chef de projet',
            'Utiliser Ixia CCMS pour créer la structure du guide et rédiger les contenus en DITA XML',
            'Rédiger avec un style minimaliste et orienté utilisateur',
            'Respecter les normes de rédaction technique et les exigences réglementaires du secteur médical',
            'Respecter les délais serrés du projet pour la livraison de la première version du guide',
          ],
        },
        training: {
          en: [
            'Ixia CCMS internal training',
          ],
          fr: [
            'Formation interne sur Ixia CCMS',
          ],
        },
        env: {
        },
    },
    },
    {
      id: 'company-b',
      company: { en: 'Baïfall Dream', fr: 'Baïfall Dream' },
      role: { en: 'Web Developer', fr: 'Développeur web' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'Jan. 2025 - Mar. 2025', fr: 'Jan. 2025 - Mar. 2025' },
      description: {
        en: 'Website design and development.',
        fr: 'Création et développement d\'un site web.',
      },
      techs: ['Symfony', 'MySQL', 'SCSS', 'Webpack', 'GitHub', 'Figma', 'Hostinger'],
      details: {
        context: {
          en: 'I needed to build a website for a client who owns a restaurant. This was a project I completed as part of my Web Developer training program, working in tandem with a classmate.',
          fr: 'Besoin de créer un site pour un client restaurateur. Stage de ma formation de Développeur Web, effectué en duo avec une collègue de promotion.',
        },
        tasks: {
          en: [
            'Creating website mockups in Figma in collaboration with the client',
            'Designing the relationships and structure of the MySQL database',
            'Implementing core and secondary features (online payment, user account, admin panel, dynamic menu)',
            'Regular feedback with the client to ensure the project meets their expectations',
            'Integration of third-party API (Stripe)',
            'Integration of unit and functional tests with PHPUnit',
          ],
          fr: [
            'Réalisation des maquettes du site avec Figma en collaboration avec le client',
            'Créer les relations et la structure de la base de données MySQL',
            'Ajouts de fonctionnalités principales et secondaires (paiement en ligne, compte utilisateur, panneau d\'administration, menu dynamique)',
            'Feedback régulier avec le client pour s\'assurer que le projet correspond à ses attentes',
            'Intégration d\'API tierce (Stripe)',
            'Intégration de tests unitaires et fonctionnels avec PHPUnit',
          ],
        },
        training: {
          en: [
            'Getting Started with Hostinger',
          ],
          fr: [
            'Prise en main d\'Hostinger',
          ],
        },
        env: {
          en: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
          fr: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
        },
      },
    },
    {
      id: 'internship',
      company: { en: 'StartupXYZ', fr: 'StartupXYZ' },
      role: { en: 'Fullstack Developer Intern', fr: 'Stagiaire Développeuse Fullstack' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '2018 - 2019', fr: '2018 - 2019' },
      description: {
        en: 'Contributed to the development of an e-commerce platform. Gained experience in fullstack development.',
        fr: 'Contribution au développement d\'une plateforme e-commerce. Acquisition d\'expérience en développement fullstack.',
      },
      techs: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
      details: {
        context: {
          en: 'Early-stage startup (seed round), small team of 5 developers building an e-commerce platform from the ground up. Fast-paced environment with weekly releases.',
          fr: 'Startup en phase de démarrage (seed round), petite équipe de 5 développeurs construisant une plateforme e-commerce from scratch. Environnement rapide avec des releases hebdomadaires.',
        },
        tasks: {
          en: [
            'Developed the product catalog with advanced filtering and search',
            'Built the shopping cart with real-time inventory checking',
            'Integrated Stripe payment gateway with 3D Secure support',
            'Implemented user authentication with JWT and OAuth (Google, Facebook)',
            'Created an admin dashboard for order management and analytics',
            'Wrote API documentation with Swagger/OpenAPI',
          ],
          fr: [
            'Développement du catalogue produits avec filtrage avancé et recherche',
            'Création du panier d\'achat avec vérification de stock en temps réel',
            'Intégration de la passerelle de paiement Stripe avec support 3D Secure',
            'Implémentation de l\'authentification utilisateur avec JWT et OAuth (Google, Facebook)',
            'Création d\'un tableau de bord admin pour la gestion des commandes et les analytics',
            'Rédaction de la documentation API avec Swagger/OpenAPI',
          ],
        },
        env: {
          en: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
          fr: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'Portfolio of Pablo Cirès (Short documentary film director)', fr: 'Portfolio de Pablo Cirès (Réalisateur de court-métrage de documentaire)' },
      description: {
        en: 'Developed a portfolio website for short documentary film director Pablo Cirès, showcasing his films. Designed an elegant and responsive interface for an optimal user experience.',
        fr: 'Développement d\'un portfolio pour le réalisateur de court-métrage Pablo Cirès mettant en avant ses films. Conception d\'une interface élégante et responsive pour une expérience utilisateur optimale.',
      },
      techs: ['Vue.js', 'JavaScript', 'SCSS'],
      url: 'https://www.pablocires.me/',
    },
    {
      id: 'project-b',
      title: { en: 'Fastpack', fr: 'Fastpack' },
      description: {
        en: 'Documentation for a fictional packaging tool designed to automate, simplify, and standardize the preparation of web projects prior to deployment.',
        fr: 'Documentation d\'un outil fictif de packaging conçu pour automatiser, simplifier et standardiser la préparation de projets web avant déploiement.',
      },
      techs: ['Docusaurus', 'Markdown', 'Netlify'],
      github: 'https://github.com/VictorDvs/Fastpack',
      url: 'https://fastpack-documentation.netlify.app/',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'AFPA Digital Territory', fr: 'AFPA Territoire Digital' },
      degree: { en: 'Professional Title (Front-end validated)', fr: 'Titre Professionnel (Front-end validé)' },
      specialty: { en: 'Web & Mobile Development', fr: 'Développement Web & Mobile' },
      period: '2024-2025',
    },
    {
      school: { en: 'University Paris Cité', fr: 'Université Paris Cité' },
      degree: { en: 'Bachelor', fr: 'Licence professionnelle' },
      specialty: { en: 'Technical Communication', fr: 'Communication Technique' },
      period: '2021 - 2022',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Muay Thaï', fr: 'Muay Thaï' },
    },
    {
      title: { en: 'Table Tennis', fr: 'Tennis de table' },
      details: [
        { en: 'Competition', fr: 'Compétition' },
      ],
    },
    {
      title: { en: 'Gaming', fr: 'Jeux' },
            details: [
        { en: 'Chess', fr: 'Échecs' },
        { en: 'Video Games', fr: 'Jeux Vidéo' },
      ],
    },
    {
      title: { en: 'Life in Coliving', fr: 'La vie en coliving' },
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'minimal', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}

