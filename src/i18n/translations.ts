export type Locale = 'en' | 'fr' | 'ar';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      news: 'News',
      about: 'About',
      solutions: 'Solutions',
      benefits: 'Benefits',
      estimation: 'Estimation',
      contact: 'Contact',
      cta: 'Free Quote',
      language: 'Language',
    },
    hero: {
      titleLine1: 'Powering',
      titleLine2: 'Industry',
      subtitle: 'Sustainable Energy Solutions for a Global Future.',
      primaryButton: 'Our Solutions',
      secondaryButton: 'Learn More',
      yearsExperience: 'Years Experience',
      projectsCompleted: 'Projects Completed',
      totalCapacity: 'Total Capacity',
      scrollToExplore: 'Scroll to explore',
    },
    about: {
      sectionTitle: 'Who We Are',
      heading: 'Custom photovoltaic solutions for homes and businesses.',
      paragraph1:
        'RPS Razgallah specializes in the sale, study, and installation of custom photovoltaic solutions. We support homeowners and businesses through their energy transition with reliable, high-performance, and sustainable solar systems, and we are certified by ANME.',
      paragraph2:
        'Based in Rue 20 Mars en face kiosque Agil, Msaken, Tunisia, 4070, our team delivers tailored solar projects from technical study to full installation, with long-term performance and durability at the core of every system.',
      yearsExcellence: 'Started in 2022',
      engineeringTitle: 'Engineering',
      engineeringDesc: 'Custom design and technical feasibility studies for complex energy projects.',
      installationTitle: 'Installation',
      installationDesc: 'Turnkey installation services by certified master electricians and engineers.',
      maintenanceTitle: 'Maintenance',
      maintenanceDesc: 'Comprehensive O&M services to ensure maximum uptime and performance.',
      consultingTitle: 'Consulting',
      consultingDesc: 'Strategic energy consulting to optimize consumption and reduce carbon footprint.',
      downloadProfile: 'Download Company Profile',
    },
    solutions: {
      sectionTitle: 'Featured Products',
      sectionDesc:
        'RPS focuses on professional photovoltaic distribution and reliable product solutions for installers, companies, and self-consumption projects.',
      distributorLine: 'Professional solar panel distributor',
      serviceLine: 'RPS Photovoltaic & Service',
      badges: ['ANME approved installer', 'Partner for installers & solar companies', 'Reliable solutions for projects and self-consumption'],
      products: [
        {
          title: '450W Double Glass Panel',
          brand: 'Canadian Solar',
          image: '/CanadianSolar.png',
          overview:
            'A high-efficiency 450W photovoltaic module designed for durability and long-term performance, suitable for commercial installations and large solar projects.',
          keyFeatures: [
            'N-Type TOPCon cells with low degradation over time (LID/LeTID resistant).',
            'Double-glass construction for stronger protection against weather and environmental stress.',
            'High mechanical load tolerance: 5400 Pa front / 2400 Pa rear.',
            'Anti-PID protection to prevent voltage-induced performance loss.',
          ],
          electricalSpecs: [
            { label: 'Vmp', value: '44.8 V' },
            { label: 'Imp', value: '10.05 A' },
            { label: 'Voc', value: '52.9 V' },
            { label: 'Isc', value: '10.68 A' },
          ],
          bestFor:
            'Reliable industrial or residential systems where durability and stability are priorities.',
        },
        {
          title: '635W Bifacial TigerNeo Panel',
          brand: 'JinkoSolar',
          image: '/jinko.jpg',
          overview:
            'A premium high-power module delivering 635W output with bifacial technology, designed for maximum energy yield in large-scale installations.',
          keyFeatures: [
            'N-Type TOPCon technology for higher efficiency and slower aging.',
            'Bifacial dual-glass design generating power from both front and back.',
            'Enhanced mechanical load: 5400 Pa front / 2400 Pa rear.',
            'HOT 3.0 technology for improved reliability and performance stability.',
            'SMBB technology for better current collection and lower resistance losses.',
            'Anti-PID protection for long-term efficiency preservation.',
          ],
          electricalSpecs: [
            { label: 'Vmp', value: '47.70 V' },
            { label: 'Imp', value: '13.31 A' },
            { label: 'Voc', value: '56.22 V' },
            { label: 'Isc', value: '13.92 A' },
          ],
          bestFor:
            'Utility-scale solar farms or projects where maximum power density and energy yield are critical.',
        },
      ],
      comparison: {
        title: 'Quick Comparison',
        headers: ['Feature', 'Canadian Solar 450W', 'Jinko TigerNeo 635W'],
        rows: [
          ['Power', '450W', '635W'],
          ['Cell Type', 'N-Type TOPCon', 'N-Type TOPCon'],
          ['Design', 'Double glass', 'Bifacial dual glass'],
          ['Efficiency Potential', 'High', 'Very high'],
          ['Ideal Use', 'Commercial / Residential', 'Utility-scale / large projects'],
        ],
      },
      bestForLabel: 'Best for',
      cta: 'Contact RPS for Pricing',
    },
    benefits: {
      sectionTitle: 'Why Choose Us',
      heading: 'A commitment to quality and sustainable innovation.',
      cleanEnergy: 'Clean Energy Solutions',
      items: [
        {
          title: 'Cost Efficiency',
          description: 'Significantly reduce operational costs by harnessing the power of the sun.',
        },
        {
          title: 'Sustainability',
          description: 'Join the global movement towards a carbon-neutral future.',
        },
        {
          title: 'Reliability',
          description: 'High-performance components and expert installation for long-term peace of mind.',
        },
        {
          title: 'Innovation',
          description: 'Cutting-edge solar technology tailored to your specific energy needs.',
        },
      ],
    },
    estimation: {
      titleLine1: 'Calculate Your',
      titleLine2: 'Energy Savings',
      description:
        'Our proprietary estimation tool provides a detailed analysis of your solar potential based on current utility rates and regional solar irradiation data.',
      bullet1: 'Personalized ROI Analysis',
      bullet2: 'Local Incentive Integration',
      chatbotHint: 'Need more information? Use our RPS chatbot to get guidance or calculate a technical flow for your project.',
      monthlyBill: 'Average Monthly Bill',
      generateEstimate: 'Generate Estimate',
      monthlySavings: 'Monthly Savings',
      projectedSavings: '25-Year Projected Savings',
      recalculate: 'Recalculate',
      requestAudit: 'Request Full Audit',
    },
    testimonials: {
      sectionTag: 'Testimonials',
      sectionTitle: 'What Our Clients Say',
      items: [
        {
          name: 'Jean Dupont',
          role: 'Industrial Director',
          content:
            'RPS Solar provided a turnkey solution that exceeded our expectations. Their technical expertise and project management were outstanding.',
        },
        {
          name: 'Ahmed Mansour',
          role: 'Commercial Manager',
          content:
            'The ROI on our solar installation was even better than projected. A highly professional team that delivers on its promises.',
        },
      ],
    },
    news: {
      backToHome: 'Back to Home',
      pageTitle: 'RPS News',
      pageDescription: 'Company updates and latest product additions from RPS Razgallah.',
      items: [
        {
          title: 'Panneaux Canadian Solar 450W N-Type TOPCon – Double Verre',
          date: 'Product update',
          summary: 'Product added.',
        },
      ],
    },
    chatbot: {
      title: 'RPS Solar Assistant',
      subtitle: 'Custom support for RPS clients',
      welcome:
        "Welcome to RPS Solar Energy. I'll guide you through a quick technical flow for your solar project in Tunisia.",
      starterTitle: 'Starter questions',
      starterQuestions: ['How do I start with solar?', 'What system size do I need?', 'Can I apply for ANME financing?'],
      quickAnswersTitle: 'Quick answers',
      flowQuestions: [
        'What is your average STEG bill?',
        'Where in Tunisia are you located?',
        'Is your roof space clear (terrace available, limited shading)?',
        'Would you like an ANME loan option?',
      ],
      flowAnswerSuggestions: [
        ['Below 150 TND', '150–300 TND', '300–600 TND', 'Above 600 TND'],
        ['Sfax / South', 'Sahel / Center', 'Grand Tunis', 'North (Bizerte area)'],
        ['Yes, clear terrace', 'Partially clear', 'Limited roof space', 'Not sure yet'],
        ['Yes, interested', 'No, self-financed', 'Need explanation first'],
      ],
      answerRecorded: 'Great, noted.',
      inputPlaceholder: 'Type your answer or question...',
      disclaimer: 'RPS assistant — responses are for guidance and can be confirmed by our team.',
      recommendationLead: 'Based on your answers, here is an initial recommendation:',
      contactPrompt:
        'For full details and to start your project, please contact RPS Solar Energy directly at +216 27 139 263 or via the Contact section.',
    },
    contact: {
      sectionTitle: 'Contact Us',
      heading: 'Visit Our Office in Msaken, Tunisia',
      description:
        'Find us at Rue 20 Mars en face kiosque Agil and speak with our team about your free solar estimation.',
      addressLabel: 'Address',
      address: 'Rue 20 Mars en face kiosque Agil, Msaken, Tunisia, 4070',
      phoneLabel: 'Phone',
      phone: '+216 27 139 263',
      mapButton: 'Open in Google Maps',
      cta: 'Free Quote',
      iframeTitle: 'RPS Solar Energy Map',
    },
    footer: {
      aboutText:
        'RPS Razgallah specializes in custom photovoltaic solutions and supports homeowners and businesses with reliable, high-performance, and sustainable systems. Certified by ANME.',
      quickLinks: 'Quick Links',
      solutions: 'Solutions',
      contact: 'Contact',
      rights: '© 2026 RPS Solar Energy, Tunisia. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      viewMap: 'View on Google Maps',
      home: 'Home',
      news: 'News',
      about: 'About Us',
      projects: 'Projects',
      contactLink: 'Contact',
      industrial: 'Industrial Solar',
      commercial: 'Commercial Projects',
      residential: 'Residential Systems',
      storage: 'Energy Storage',
      maintenance: 'Maintenance',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      news: 'Actualités',
      about: 'À propos',
      solutions: 'Solutions',
      benefits: 'Avantages',
      estimation: 'Estimation',
      contact: 'Contact',
      cta: 'Devis gratuit',
      language: 'Langue',
    },
    hero: {
      titleLine1: 'Alimenter',
      titleLine2: "l'industrie",
      subtitle: 'Des solutions énergétiques durables pour un avenir meilleur.',
      primaryButton: 'Nos solutions',
      secondaryButton: 'En savoir plus',
      yearsExperience: "Années d'expérience",
      projectsCompleted: 'Projets réalisés',
      totalCapacity: 'Capacité totale',
      scrollToExplore: 'Faites défiler pour explorer',
    },
    about: {
      sectionTitle: 'Qui sommes-nous',
      heading: 'Des solutions photovoltaïques sur mesure pour particuliers et entreprises.',
      paragraph1:
        'RPS Razgallah est spécialisée dans la vente, l’étude et l’installation de solutions photovoltaïques sur mesure. Nous accompagnons particuliers et entreprises dans leur transition énergétique grâce à des systèmes solaires fiables, performants et durables, et nous sommes certifiés par l’ANME.',
      paragraph2:
        'Depuis notre siège à Rue 20 Mars en face kiosque Agil, Msaken, Tunisie, 4070, nous réalisons des projets solaires personnalisés, de l’étude technique à l’installation complète, avec un engagement fort sur la fiabilité et la performance à long terme.',
      yearsExcellence: 'Créée en 2022',
      engineeringTitle: 'Ingénierie',
      engineeringDesc: 'Conception sur mesure et études de faisabilité technique pour des projets énergétiques complexes.',
      installationTitle: 'Installation',
      installationDesc: 'Services d’installation clé en main par des électriciens et ingénieurs certifiés.',
      maintenanceTitle: 'Maintenance',
      maintenanceDesc: 'Services complets d’exploitation et maintenance pour une performance maximale.',
      consultingTitle: 'Conseil',
      consultingDesc: 'Conseil stratégique pour optimiser la consommation et réduire l’empreinte carbone.',
      downloadProfile: "Télécharger le profil de l'entreprise",
    },
    solutions: {
      sectionTitle: 'Produits mis en avant',
      sectionDesc:
        'RPS se concentre sur la distribution photovoltaïque professionnelle et des solutions produits fiables pour installateurs, sociétés et projets en autoconsommation.',
      distributorLine: 'Distributeur professionnel de panneaux solaires',
      serviceLine: 'RPS Photovoltaïque et Service',
      badges: ['Installateur agréé ANME', 'Partenaire installateurs & sociétés solaires', 'Solutions fiables pour projets et autoconsommation'],
      products: [
        {
          title: 'Panneau 450W Double Verre',
          brand: 'Canadian Solar',
          image: '/CanadianSolar.png',
          overview:
            'Module photovoltaïque haute efficacité de 450W conçu pour la durabilité et la performance à long terme, idéal pour installations commerciales et grands projets solaires.',
          keyFeatures: [
            'Cellules N-Type TOPCon : faible dégradation dans le temps (résistant LID/LeTID).',
            'Construction double verre : meilleure protection contre les intempéries et le stress environnemental.',
            'Charge mécanique élevée : 5400 Pa face avant / 2400 Pa face arrière.',
            'Protection anti-PID : évite les pertes de puissance liées à la dégradation induite par la tension.',
          ],
          electricalSpecs: [
            { label: 'Vmp', value: '44.8 V' },
            { label: 'Imp', value: '10.05 A' },
            { label: 'Voc', value: '52.9 V' },
            { label: 'Isc', value: '10.68 A' },
          ],
          bestFor:
            'Systèmes industriels ou résidentiels fiables où la durabilité et la stabilité sont prioritaires.',
        },
        {
          title: 'Panneau 635W Bifacial TigerNeo',
          brand: 'JinkoSolar',
          image: '/jinko.jpg',
          overview:
            'Module premium haute puissance de 635W avec technologie bifaciale, conçu pour maximiser le rendement énergétique sur les grandes installations.',
          keyFeatures: [
            'Technologie N-Type TOPCon : meilleure efficacité et vieillissement plus lent.',
            'Design bifacial double verre : production d’énergie sur les deux faces.',
            'Charge mécanique renforcée : 5400 Pa face avant / 2400 Pa face arrière.',
            'Technologie HOT 3.0 : fiabilité et stabilité de performance améliorées.',
            'Technologie SMBB : meilleure collecte du courant et pertes par résistance réduites.',
            'Protection anti-PID : préservation de l’efficacité à long terme.',
          ],
          electricalSpecs: [
            { label: 'Vmp', value: '47.70 V' },
            { label: 'Imp', value: '13.31 A' },
            { label: 'Voc', value: '56.22 V' },
            { label: 'Isc', value: '13.92 A' },
          ],
          bestFor:
            'Fermes solaires utilitaires ou projets où la densité de puissance et le rendement sont critiques.',
        },
      ],
      comparison: {
        title: 'Comparatif rapide',
        headers: ['Critère', 'Canadian Solar 450W', 'Jinko TigerNeo 635W'],
        rows: [
          ['Puissance', '450W', '635W'],
          ['Type de cellule', 'N-Type TOPCon', 'N-Type TOPCon'],
          ['Conception', 'Double verre', 'Bifacial double verre'],
          ['Potentiel de rendement', 'Élevé', 'Très élevé'],
          ['Usage idéal', 'Commercial / Résidentiel', 'Utility-scale / grands projets'],
        ],
      },
      bestForLabel: 'Idéal pour',
      cta: 'Contacter RPS pour le tarif',
    },
    benefits: {
      sectionTitle: 'Pourquoi nous choisir',
      heading: 'Un engagement envers la qualité et l’innovation durable.',
      cleanEnergy: 'Solutions 100% énergie propre',
      items: [
        {
          title: 'Efficacité des coûts',
          description: 'Réduisez significativement vos coûts opérationnels grâce à l’énergie solaire.',
        },
        {
          title: 'Durabilité',
          description: 'Participez au mouvement mondial vers un avenir neutre en carbone.',
        },
        {
          title: 'Fiabilité',
          description: 'Composants performants et installation experte pour une tranquillité durable.',
        },
        {
          title: 'Innovation',
          description: 'Technologie solaire de pointe adaptée à vos besoins énergétiques.',
        },
      ],
    },
    estimation: {
      titleLine1: 'Calculez vos',
      titleLine2: 'économies d’énergie',
      description:
        'Notre outil d’estimation fournit une analyse détaillée de votre potentiel solaire selon vos coûts actuels et l’irradiation régionale.',
      bullet1: 'Analyse ROI personnalisée',
      bullet2: 'Intégration des incitations locales',
      chatbotHint: 'Besoin de plus d’informations ? Utilisez notre chatbot RPS pour vous guider ou calculer un flux technique pour votre projet.',
      monthlyBill: 'Facture mensuelle moyenne',
      generateEstimate: 'Générer une estimation',
      monthlySavings: 'Économies mensuelles',
      projectedSavings: 'Économies projetées sur 25 ans',
      recalculate: 'Recalculer',
      requestAudit: 'Demander un audit complet',
    },
    testimonials: {
      sectionTag: 'Témoignages',
      sectionTitle: 'Ce que disent nos clients',
      items: [
        {
          name: 'Jean Dupont',
          role: 'Directeur industriel',
          content:
            'RPS Solar a fourni une solution clé en main qui a dépassé nos attentes. Leur expertise technique et leur gestion de projet étaient remarquables.',
        },
        {
          name: 'Ahmed Mansour',
          role: 'Responsable commercial',
          content:
            'Le retour sur investissement de notre installation solaire a dépassé les prévisions. Une équipe très professionnelle.',
        },
      ],
    },
    news: {
      backToHome: 'Retour à l’accueil',
      pageTitle: 'Actualités RPS',
      pageDescription: 'Mises à jour de l’entreprise et derniers produits ajoutés par RPS Razgallah.',
      items: [
        {
          title: 'Panneaux Canadian Solar 450W N-Type TOPCon – Double Verre',
          date: 'Mise à jour produit',
          summary: 'Produit ajouté.',
        },
      ],
    },
    chatbot: {
      title: 'Assistant Solaire RPS',
      subtitle: 'Support personnalisé pour les clients RPS',
      welcome:
        'Bienvenue chez RPS Solar Energy. Je vais vous guider avec un court flux technique pour votre projet solaire en Tunisie.',
      starterTitle: 'Questions de départ',
      starterQuestions: ['Comment démarrer avec le solaire ?', 'Quelle taille de système me faut-il ?', 'Puis-je demander un financement ANME ?'],
      quickAnswersTitle: 'Réponses rapides',
      flowQuestions: [
        'Quelle est votre facture STEG moyenne ?',
        'Où êtes-vous situé en Tunisie ?',
        'Votre toiture est-elle dégagée (terrasse disponible, peu d’ombre) ?',
        'Souhaitez-vous une option de prêt ANME ?',
      ],
      flowAnswerSuggestions: [
        ['Moins de 150 TND', '150–300 TND', '300–600 TND', 'Plus de 600 TND'],
        ['Sfax / Sud', 'Sahel / Centre', 'Grand Tunis', 'Nord (zone Bizerte)'],
        ['Oui, terrasse dégagée', 'Partiellement dégagée', 'Espace limité', 'Pas encore sûr'],
        ['Oui, intéressé', 'Non, autofinancement', 'J’ai besoin d’explications'],
      ],
      answerRecorded: 'Parfait, noté.',
      inputPlaceholder: 'Tapez votre réponse ou votre question...',
      disclaimer: 'Assistant RPS — les réponses sont indicatives et peuvent être confirmées par notre équipe.',
      recommendationLead: 'Selon vos réponses, voici une recommandation initiale :',
      contactPrompt:
        'Pour tous les détails et pour démarrer votre projet, contactez directement RPS Solar Energy au +216 27 139 263 ou via la section Contact.',
    },
    contact: {
      sectionTitle: 'Contactez-nous',
      heading: 'Visitez notre bureau à Msaken, Tunisie',
      description:
        'Retrouvez-nous à Rue 20 Mars en face kiosque Agil et échangez avec notre équipe pour votre estimation solaire gratuite.',
      addressLabel: 'Adresse',
      address: 'Rue 20 Mars en face kiosque Agil, Msaken, Tunisie, 4070',
      phoneLabel: 'Téléphone',
      phone: '+216 27 139 263',
      mapButton: 'Ouvrir dans Google Maps',
      cta: 'Devis gratuit',
      iframeTitle: 'Carte RPS Solar Energy',
    },
    footer: {
      aboutText:
        'RPS Razgallah est spécialisée dans les solutions photovoltaïques sur mesure et accompagne particuliers et entreprises avec des systèmes fiables, performants et durables. Certifiée par l’ANME.',
      quickLinks: 'Liens rapides',
      solutions: 'Solutions',
      contact: 'Contact',
      rights: '© 2026 RPS Solar Energy, Tunisie. Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      terms: "Conditions d'utilisation",
      viewMap: 'Voir sur Google Maps',
      home: 'Accueil',
      news: 'Actualités',
      about: 'À propos',
      projects: 'Projets',
      contactLink: 'Contact',
      industrial: 'Solaire industriel',
      commercial: 'Projets commerciaux',
      residential: 'Systèmes résidentiels',
      storage: 'Stockage d’énergie',
      maintenance: 'Maintenance',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      news: 'الأخبار',
      about: 'من نحن',
      solutions: 'الحلول',
      benefits: 'المزايا',
      estimation: 'التقدير',
      contact: 'اتصل بنا',
      cta: 'عرض سعر مجاني',
      language: 'اللغة',
    },
    hero: {
      titleLine1: 'نُشغّل',
      titleLine2: 'الصناعة',
      subtitle: 'حلول طاقة مستدامة لمستقبل أفضل.',
      primaryButton: 'حلولنا',
      secondaryButton: 'اعرف المزيد',
      yearsExperience: 'سنوات الخبرة',
      projectsCompleted: 'مشروع مُنجز',
      totalCapacity: 'إجمالي السعة',
      scrollToExplore: 'مرّر للاستكشاف',
    },
    about: {
      sectionTitle: 'من نحن',
      heading: 'حلول كهروضوئية مخصّصة للأفراد والشركات.',
      paragraph1:
        'RPS Razgallah متخصصة في بيع ودراسة وتركيب حلول الطاقة الكهروضوئية المصممة حسب الطلب. نرافق الأفراد والشركات في الانتقال الطاقي عبر أنظمة شمسية موثوقة وعالية الأداء ومستدامة، ونحن معتمدون من ANME.',
      paragraph2:
        'من مقرنا في Rue 20 Mars en face kiosque Agil، مساكن، تونس 4070، ننفذ مشاريع شمسية مخصّصة بدءًا من الدراسة الفنية وحتى التركيب الكامل، مع تركيز قوي على الاعتمادية والأداء طويل المدى.',
      yearsExcellence: 'تأسست في 2022',
      engineeringTitle: 'الهندسة',
      engineeringDesc: 'تصميم مخصص ودراسات جدوى فنية للمشاريع الطاقية المعقدة.',
      installationTitle: 'التركيب',
      installationDesc: 'خدمات تركيب متكاملة على يد مهندسين وكهربائيين معتمدين.',
      maintenanceTitle: 'الصيانة',
      maintenanceDesc: 'خدمات تشغيل وصيانة شاملة لضمان أفضل أداء.',
      consultingTitle: 'الاستشارات',
      consultingDesc: 'استشارات استراتيجية لتحسين الاستهلاك وتقليل البصمة الكربونية.',
      downloadProfile: 'تحميل ملف الشركة',
    },
    solutions: {
      sectionTitle: 'المنتجات الأساسية',
      sectionDesc:
        'تركّز RPS على التوزيع الاحترافي للألواح الشمسية وتقديم حلول موثوقة للمركّبين والشركات ومشاريع الاستهلاك الذاتي.',
      distributorLine: 'موزّع محترف للألواح الشمسية',
      serviceLine: 'RPS Photovoltaïque et Service',
      badges: ['مركّب معتمد من ANME', 'شريك للمركّبين والشركات الشمسية', 'حلول موثوقة للمشاريع والاستهلاك الذاتي'],
      products: [
        {
          title: 'لوح 450 واط زجاج مزدوج',
          brand: 'Canadian Solar',
          image: '/CanadianSolar.png',
          overview:
            'وحدة كهروضوئية عالية الكفاءة بقدرة 450 واط مصممة للمتانة والأداء طويل المدى، مناسبة للتركيبات التجارية والمشاريع الشمسية الكبيرة.',
          keyFeatures: [
            'خلايا N-Type TOPCon مع تدهور منخفض بمرور الوقت (مقاومة LID/LeTID).',
            'تصميم زجاج مزدوج لحماية أقوى ضد الطقس والظروف البيئية.',
            'تحمّل ميكانيكي عالٍ: 5400 باسكال أمامي / 2400 باسكال خلفي.',
            'حماية Anti-PID لمنع فقدان القدرة بسبب التدهور الناتج عن الجهد.',
          ],
          electricalSpecs: [
            { label: 'Vmp', value: '44.8 V' },
            { label: 'Imp', value: '10.05 A' },
            { label: 'Voc', value: '52.9 V' },
            { label: 'Isc', value: '10.68 A' },
          ],
          bestFor:
            'أنظمة صناعية أو سكنية موثوقة عندما تكون المتانة والاستقرار أولوية.',
        },
        {
          title: 'لوح 635 واط Bifacial TigerNeo',
          brand: 'JinkoSolar',
          image: '/jinko.jpg',
          overview:
            'وحدة ممتازة عالية القدرة بخرج 635 واط مع تقنية ثنائية الوجه، مصممة لتحقيق أعلى مردود طاقي في المشاريع واسعة النطاق.',
          keyFeatures: [
            'تقنية N-Type TOPCon لكفاءة أعلى وتقدّم أبطأ في التقادم.',
            'تصميم ثنائي الوجه بزجاج مزدوج لتوليد الطاقة من الجهتين.',
            'تحمّل ميكانيكي محسّن: 5400 باسكال أمامي / 2400 باسكال خلفي.',
            'تقنية HOT 3.0 لتحسين الموثوقية واستقرار الأداء.',
            'تقنية SMBB لتحصيل تيار أفضل وخسائر مقاومة أقل.',
            'حماية Anti-PID للحفاظ على الكفاءة على المدى الطويل.',
          ],
          electricalSpecs: [
            { label: 'Vmp', value: '47.70 V' },
            { label: 'Imp', value: '13.31 A' },
            { label: 'Voc', value: '56.22 V' },
            { label: 'Isc', value: '13.92 A' },
          ],
          bestFor:
            'محطات شمسية كبيرة أو مشاريع تتطلب كثافة قدرة ومردود طاقي مرتفعين.',
        },
      ],
      comparison: {
        title: 'مقارنة سريعة',
        headers: ['الميزة', 'Canadian Solar 450W', 'Jinko TigerNeo 635W'],
        rows: [
          ['القدرة', '450W', '635W'],
          ['نوع الخلايا', 'N-Type TOPCon', 'N-Type TOPCon'],
          ['التصميم', 'زجاج مزدوج', 'ثنائي الوجه زجاج مزدوج'],
          ['إمكانات الكفاءة', 'مرتفعة', 'مرتفعة جدًا'],
          ['الاستخدام المثالي', 'تجاري / سكني', 'مشاريع كبرى / Utility-scale'],
        ],
      },
      bestForLabel: 'مناسب لـ',
      cta: 'تواصل مع RPS لمعرفة الأسعار',
    },
    benefits: {
      sectionTitle: 'لماذا نحن',
      heading: 'التزام بالجودة والابتكار المستدام.',
      cleanEnergy: 'حلول طاقة نظيفة 100%',
      items: [
        {
          title: 'خفض التكاليف',
          description: 'قلل تكاليف التشغيل بشكل كبير عبر الاستفادة من طاقة الشمس.',
        },
        {
          title: 'الاستدامة',
          description: 'انضم إلى التوجه العالمي نحو مستقبل محايد كربونيًا.',
        },
        {
          title: 'الموثوقية',
          description: 'مكونات عالية الأداء وتركيب احترافي لراحة طويلة المدى.',
        },
        {
          title: 'الابتكار',
          description: 'تقنيات شمسية متطورة مصممة حسب احتياجاتك.',
        },
      ],
    },
    estimation: {
      titleLine1: 'احسب',
      titleLine2: 'توفير الطاقة',
      description:
        'أداة التقدير الخاصة بنا تقدم تحليلاً مفصلاً لإمكانات الطاقة الشمسية بناءً على فواتيرك الحالية والإشعاع الشمسي المحلي.',
      bullet1: 'تحليل عائد استثمار مخصص',
      bullet2: 'دمج الحوافز المحلية',
      chatbotHint: 'تحتاج معلومات أكثر؟ استخدم شات بوت RPS للحصول على الإرشاد أو حساب التدفق الفني لمشروعك.',
      monthlyBill: 'متوسط الفاتورة الشهرية',
      generateEstimate: 'إنشاء تقدير',
      monthlySavings: 'التوفير الشهري',
      projectedSavings: 'التوفير المتوقع خلال 25 سنة',
      recalculate: 'إعادة الحساب',
      requestAudit: 'طلب تدقيق كامل',
    },
    testimonials: {
      sectionTag: 'آراء العملاء',
      sectionTitle: 'ماذا يقول عملاؤنا',
      items: [
        {
          name: 'Jean Dupont',
          role: 'مدير صناعي',
          content:
            'قدمت RPS Solar حلاً متكاملاً فاق توقعاتنا. كانت خبرتهم التقنية وإدارة المشروع ممتازة.',
        },
        {
          name: 'Ahmed Mansour',
          role: 'مدير تجاري',
          content:
            'العائد على الاستثمار كان أفضل من المتوقع. فريق محترف يفي بوعوده.',
        },
      ],
    },
    news: {
      backToHome: 'العودة إلى الرئيسية',
      pageTitle: 'أخبار RPS',
      pageDescription: 'آخر تحديثات الشركة والمنتجات المضافة حديثًا من RPS Razgallah.',
      items: [
        {
          title: 'Panneaux Canadian Solar 450W N-Type TOPCon – Double Verre',
          date: 'تحديث منتج',
          summary: 'تمت إضافة المنتج.',
        },
      ],
    },
    chatbot: {
      title: 'مساعد RPS للطاقة الشمسية',
      subtitle: 'دعم مخصص لعملاء RPS',
      welcome:
        'مرحبًا بك في RPS Solar Energy. سأرشدك عبر تدفق تقني سريع لمشروعك الشمسي في تونس.',
      starterTitle: 'أسئلة للبدء',
      starterQuestions: ['كيف أبدأ مشروع الطاقة الشمسية؟', 'ما حجم النظام المناسب لي؟', 'هل يمكنني الاستفادة من تمويل ANME؟'],
      quickAnswersTitle: 'إجابات سريعة',
      flowQuestions: [
        'ما هو متوسط فاتورة STEG لديك؟',
        'أين موقعك في تونس؟',
        'هل مساحة السطح متاحة وخالية من التظليل الكبير؟',
        'هل ترغب في خيار قرض عبر ANME؟',
      ],
      flowAnswerSuggestions: [
        ['أقل من 150 د.ت', '150–300 د.ت', '300–600 د.ت', 'أكثر من 600 د.ت'],
        ['صفاقس / الجنوب', 'الساحل / الوسط', 'تونس الكبرى', 'الشمال (بنزرت)'],
        ['نعم، السطح متاح', 'متاح جزئيًا', 'المساحة محدودة', 'لست متأكدًا بعد'],
        ['نعم، مهتم', 'لا، تمويل ذاتي', 'أحتاج شرحًا أولاً'],
      ],
      answerRecorded: 'ممتاز، تم تسجيل ذلك.',
      inputPlaceholder: 'اكتب إجابتك أو سؤالك...',
      disclaimer: 'مساعد RPS — الإجابات إرشادية ويمكن تأكيدها مع فريقنا.',
      recommendationLead: 'بناءً على إجاباتك، هذه توصية أولية:',
      contactPrompt:
        'للحصول على التفاصيل الكاملة وبدء تنفيذ المشروع، يرجى التواصل مع RPS Solar Energy على +216 27 139 263 أو عبر قسم التواصل.',
    },
    contact: {
      sectionTitle: 'اتصل بنا',
      heading: 'زر مكتبنا في مساكن، تونس',
      description:
        'تفضل بزيارتنا في Rue 20 Mars en face kiosque Agil وتحدث مع فريقنا للحصول على تقدير شمسي مجاني.',
      addressLabel: 'العنوان',
      address: 'Rue 20 Mars en face kiosque Agil، مساكن، تونس، 4070',
      phoneLabel: 'الهاتف',
      phone: '+216 27 139 263',
      mapButton: 'فتح في خرائط Google',
      cta: 'عرض سعر مجاني',
      iframeTitle: 'خريطة RPS Solar Energy',
    },
    footer: {
      aboutText:
        'RPS Razgallah متخصصة في الحلول الكهروضوئية المخصّصة وتدعم الأفراد والشركات بأنظمة موثوقة وعالية الأداء ومستدامة. معتمدة من ANME.',
      quickLinks: 'روابط سريعة',
      solutions: 'الحلول',
      contact: 'اتصل بنا',
      rights: '© 2026 RPS Solar Energy، تونس. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      viewMap: 'عرض على خرائط Google',
      home: 'الرئيسية',
      news: 'الأخبار',
      about: 'من نحن',
      projects: 'المشاريع',
      contactLink: 'اتصل بنا',
      industrial: 'الطاقة الشمسية الصناعية',
      commercial: 'المشاريع التجارية',
      residential: 'الأنظمة السكنية',
      storage: 'تخزين الطاقة',
      maintenance: 'الصيانة',
    },
  },
} as const;

export type TranslationSet = (typeof translations)[Locale];
