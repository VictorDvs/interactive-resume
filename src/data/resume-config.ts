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
      en: 'Software Technical Writer',
      fr: 'Rédacteur Technique Logiciel',
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
    { type: 'website', label: 'Portfolio', href: 'https://victor-de-vos-portfolio.netlify.app/' },
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
      title: { en: 'Languages & Standards', fr: 'Langages & Standards' },
      type: 'badges',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'SCSS' },
        { name: 'JavaScript' },
        { name: 'PHP' },
        { name: 'MySQL' },
        { name: 'Markdown' },
        { name: 'JSON' },
        { name: 'YAML' },
        { name: 'DITA XML' },
        { name: 'DocBook' },
        { name: 'OpenAPI' },
      ],
    },
    {
      title: { en: 'Other Tools', fr: 'Autres outils' },
      type: 'badges',
      items: [
        { name: 'Postman' },
        { name: 'Git' },
        { name: 'MkDocs' },
        { name: 'Docusaurus' },
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
      id: 'efor',
      company: { en: 'Efor Group', fr: 'Efor Group' },
      role: { en: 'Consultant', fr: 'Consultant' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: 'Nov 2025 - Jan 2026', fr: 'Nov 2025 - Jan 2026' },
      description: {
        en: 'Created user guides for a medical software. Structured writing, minimalist style, DITA XML to PDF',
        fr: 'Création du guide utilisateur d\'un logiciel dans le domaine médical. Rédaction structurée, style minimaliste, DITA XML vers PDF',
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
            'Gather technical information from project manager',
            'Use Ixia CCMS to create the guide structure and write content in DITA XML',
            'Write with a minimalist, user-focused style',
            'Apply technical writing standards and regulatory requirements of the medical industry',
            'Respected tight project deadlines for delivering the first version of the guide',
          ],
          fr: [
            'Recueillir les informations techniques auprès du chef de projet',
            'Utiliser Ixia CCMS pour créer la structure du guide et rédiger les contenus en DITA XML',
            'Rédiger avec un style minimaliste et orienté utilisateur',
            'Appliquer les normes de rédaction technique et les exigences réglementaires du secteur médical',
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
      id: 'baifall-dream',
      company: { en: 'Baïfall Dream', fr: 'Baïfall Dream' },
      role: { en: 'Web Developer', fr: 'Développeur web' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'Jan 2025 - Mar 2025', fr: 'Jan 2025 - Mars 2025' },
      description: {
        en: 'Website design and development',
        fr: 'Création et développement d\'un site web',
      },
      techs: ['Symfony', 'MySQL', 'SCSS', 'Webpack', 'GitHub', 'Figma', 'Hostinger'],
      details: {
        context: {
          en: 'I needed to build a website for a client who owns a restaurant. This was a project I completed as part of my Web Developer training program, working in tandem with a classmate.',
          fr: 'Besoin de créer un site pour un client restaurateur. Stage de ma formation de Développeur Web, effectué en duo avec une collègue de promotion.',
        },
        tasks: {
          en: [
            'Create website mockups in Figma in collaboration with the client',
            'Design the relationships and structure of the MySQL database',
            'Implement core and secondary features (online payment, user account, admin panel, dynamic menu)',
            'Communicate regularly with the client to ensure the project meets their expectations',
            'Integrate third-party APIs and libraries (Stripe, Leaflet)',
            'Implementunit and functional tests with PHPUnit',
          ],
          fr: [
            'Réaliser des maquettes du site avec Figma en collaboration avec le client',
            'Créer les relations et la structure de la base de données MySQL',
            'Implémenter les fonctionnalités principales et secondaires (paiement en ligne, compte utilisateur, panneau d\'administration, menu dynamique)',
            'Échanger régulièrement avec le client pour s\'assurer que le projet correspond à ses attentes',
            'Intégrer des API et des bibliothèques tierces (Stripe, Leaflet)',
            'Implémenter des tests unitaires et fonctionnels avec PHPUnit',
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
        },
      },
    },
    {
      id: 'exfo',
      company: { en: 'EXFO', fr: 'EXFO' },
      role: { en: 'Technical Writer', fr: 'Rédacteur Technique' },
      type: { en: 'Temporary work', fr: 'Intérim' },
      period: { en: 'Nov 2022 - Aug 2023', fr: 'Nov 2022 - Août 2023' },
      description: {
        en: 'Production and maintenance of technical product documentation',
        fr: 'Production et maintenance de la documentation technique produits',
      },
      techs: ['GitLab', 'MySQL', 'Oxygen XML', 'DITA XML', 'MkDocs', 'Markdown', 'YAML'],
      details: {
        context: {
          en: 'I was hired to temporarily fill in for a technical writer. My role focused on managing several sets of documentation in DITA format and migrating documentation from Markdown, with the goal of transitioning to a “docs-as-code” workflow. ',
          fr: 'J\'ai été recruté afin de remplacer temporairement une rédactrice technique. Mon rôle se concentrait sur la gestion de plusieurs documentations en format DITA et la migration d\'une documentation en Markdown, en vue de travailler en docs-as-code.',
        },
        tasks: {
          en: [
            'Write and update technical content',
            'Gather feedback from subject matter experts',
            'Proofread developer documentation',
            'Migrate content from DITA to Markdown using the Oxygen XML CCMS',
            'Adhere to documentation release milestones (major, minor, and fix releases)',
          ],
          fr: [
            'Rédiger, Mettre à jour le contenu technique',
            'Rassembler le feedback des experts métier',
            'Relecture de la documentation des développeurs',
            'Migrer le contenu en DITA vers le Markdown depuis le CCMS Oxygen XML',
            'Respecter les jalons de publication de la documentation (versions majeures, mineures, fix)',
          ],
        },
        env: {},
      },
    },
    {
      id: 'olfeo',
      company: { en: 'Olfeo', fr: 'Olfeo' },
      role: { en: 'Technical Writer', fr: 'Rédacteur Technique' },
      type: { en: 'Work-study Program', fr: 'Alternance' },
      period: { en: 'Aug 2021 - Sep 2022', fr: 'Août 2021 - Sept 2022' },
      description: {
        en: 'Writing and managing technical documentation for the Olfeo software (SaaS)',
        fr: 'Rédaction et gestion de la documentation technique du logiciel Olfeo (SaaS)',
      },
      techs: ['Paligo', 'DocBook', 'Confluence'],
      details: {
        context: {
          en: 'I managed the technical documentation for the Olfeo software as part of its transition to a SaaS model. Since the documentation was new, my role was to organize it and update it as the product evolved.',
          fr: 'J\'ai géré la documentation technique du logiciel Olfeo dans le cadre de son passage en mode SaaS. La documentation étant nouvelle, mon rôle était de la structurer et de la faire évoluer au fil du développement du produit.',
        },
        tasks: {
          en: [
            'Create, write, and update technical content',
            'Contribute to information architecture',
            'Participate in daily and weekly meetings with the Product team (daily, weekly, retro)',
            'Gather information from the Product Owner and internal tools',
            'Create a knowledge base and its sections (Release Notes, Troubleshooting, FAQ)',
          ],
          fr: [
            'Créer, rédiger et mettre à jour le contenu technique',
            'Participer à l\'architecture de l\'information',
            'Participer aux points quotidiens avec l\'équipe Produit (daily, weekly, retro)',
            'Collecter l\'information auprès du Product Owner et des outils internes',
            'Créer une base de connaissances et ses sections (Release Notes, Troubleshooting, FAQ)',
          ],
        },
        env: {},
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'portfolio-pablo-cires',
      title: { en: 'Portfolio of Pablo Cirès (Short documentary film director)', fr: 'Portfolio de Pablo Cirès (Réalisateur de court-métrage de documentaire)' },
      description: {
        en: 'Developed a portfolio website for short documentary film director Pablo Cirès, showcasing his films. Designed an elegant and responsive interface for an optimal user experience.',
        fr: 'Développement d\'un portfolio pour le réalisateur de court-métrage Pablo Cirès mettant en avant ses films. Conception d\'une interface élégante et responsive pour une expérience utilisateur optimale.',
      },
      techs: ['Vue.js', 'JavaScript', 'SCSS', 'Netlify'],
      url: 'https://www.pablocires.me/',
    },
    {
      id: 'fastpack',
      title: { en: 'Fastpack', fr: 'Fastpack' },
      description: {
        en: 'Fastpack is a fictitious packaging tool designed to automate, simplify and standardize the preparation of web projects prior to deployment. I\'ve tried to document it here with Docusaurus. (French version only, for the moment).',
        fr: 'Fastpack est un outil fictif de packaging conçu pour automatiser, simplifier et standardiser la préparation de projets web avant déploiement. J\'ai tenté ici de le documenter avec Docusaurus (En version française uniquement pour le moment).',
      },
      techs: ['Docusaurus', 'Markdown', 'Netlify'],
      github: 'https://github.com/VictorDvs/Fastpack',
      url: 'https://fastpack-documentation.netlify.app/',
    },
    {
      id: 'restokit',
      title: { en: 'Restokit', fr: 'Restokit' },
      description: {
        en: 'RestoKit is a fictitious SDK. For RESTful API references, I used the OpenAPI standard and integrated the Redocly tool into the project.',
        fr: 'RestoKit est un SDK fictif. Pour les références API RESTful, j\'ai utilisé le standard OpenAPI et intégré l\'outil Redocly au projet.',
      },
      techs: ['MkDocs', 'Markdown', 'Netlify', 'OpenAPI', 'Redocly'],
      github: 'https://github.com/VictorDvs/RestoKit',
      url: 'https://restokit-sdk-documentation.netlify.app/',
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
      title: { en: 'Movies, Theater, Opera', fr: 'Cinéma, Théâtre, Opéra' },
    },
    {
      title: { en: 'Sports', fr: 'Sports' },
      details: [
        { en: 'Table Tennis', fr: 'Tennis de table' },
        { en: 'Muay Thaï', fr: 'Muay Thaï' },
      ],
    },
    {
      title: { en: 'Gaming', fr: 'Jeux' },
            details: [
        { en: 'Chess', fr: 'Échecs' },
        { en: 'Video Games', fr: 'Jeux Vidéos' },
      ],
    },
    {
      title: { en: 'Life in Coliving', fr: 'La vie en coliving' },
                  details: [
        { en: 'Evening events', fr: 'Soirées' },
        { en: 'Barbecue', fr: 'Barbecue' },
        { en: 'Excursions', fr: 'Excursions' },
      ],
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

