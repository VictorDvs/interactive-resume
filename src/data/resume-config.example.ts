import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
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
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Angular' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Python' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD', fr: 'Agile/Scrum, TDD, Code Review, CI/CD' } },
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
      isHighlighted: true,
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
          en: 'React / TypeScript / Node.js / PostgreSQL / GraphQL / Redis / Docker / AWS / GitHub Actions / Datadog',
          fr: 'React / TypeScript / Node.js / PostgreSQL / GraphQL / Redis / Docker / AWS / GitHub Actions / Datadog',
        },
      },
    },
    {
      id: 'company-b',
      company: { en: 'WebAgency', fr: 'WebAgency' },
      role: { en: 'Frontend Developer', fr: 'Développeuse Frontend' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2019 - 2022', fr: '2019 - 2022' },
      description: {
        en: 'Developed responsive web applications for various clients. Specialized in React and Angular projects.',
        fr: 'Développement d\'applications web responsives pour divers clients. Spécialisée en projets React et Angular.',
      },
      techs: ['React', 'Angular', 'TypeScript', 'SCSS'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          en: [
            'Built 15+ client-facing web applications from scratch',
            'Created and maintained a shared design system used across all agency projects',
            'Implemented complex form workflows with multi-step validation',
            'Optimized web performance achieving 90+ scores on Core Web Vitals',
            'Integrated third-party APIs (payment, CRM, analytics)',
            'Set up Storybook documentation for reusable components',
            'Collaborated closely with UX designers to translate Figma mockups into pixel-perfect UIs',
          ],
          fr: [
            'Développement de 15+ applications web clients from scratch',
            'Création et maintenance d\'un design system partagé utilisé sur tous les projets de l\'agence',
            'Implémentation de workflows de formulaires complexes avec validation multi-étapes',
            'Optimisation des performances web avec scores 90+ sur les Core Web Vitals',
            'Intégration d\'APIs tierces (paiement, CRM, analytics)',
            'Mise en place de la documentation Storybook pour les composants réutilisables',
            'Collaboration étroite avec les designers UX pour traduire les maquettes Figma en interfaces pixel-perfect',
          ],
        },
        training: {
          en: [
            'Angular Advanced workshop (2 days)',
            'Accessibility (WCAG 2.1) certification',
          ],
          fr: [
            'Workshop Angular Avancé (2 jours)',
            'Certification Accessibilité (WCAG 2.1)',
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
      degree: { en: 'Bachelor in Computer Science', fr: 'Licence professionnelle' },
      period: '2021 - 2022',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Photography', fr: 'Photographie' },
      details: [
        { en: 'Street photography', fr: 'Photo de rue' },
        { en: '5 years', fr: '5 ans' },
      ],
    },
    {
      title: { en: 'Hiking', fr: 'Randonnée' },
      details: [
        { en: 'Mountain trails', fr: 'Sentiers de montagne' },
      ],
    },
    {
      title: { en: 'Open Source', fr: 'Open Source' },
    },
    {
      title: { en: 'Guitar', fr: 'Guitare' },
      details: [
        { en: '3 years', fr: '3 ans' },
      ],
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  // pdf: {
  //   label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
  //   path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  // },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
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
