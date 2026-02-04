import { Service, Project, TeamMember, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web App Development',
    category: 'Development',
    description: 'Custom web apps tailored for scalability and user experience, like library management systems or enterprise portals.',
    icon: '💻',
    priceRange: { basic: '$5,000', pro: '$15,000', enterprise: '$30,000+' }
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    category: 'Development',
    description: 'Cross-platform iOS/Android apps focusing on high engagement, like fitness trackers or social platforms.',
    icon: '📱',
    priceRange: { basic: '$10,000', pro: '$25,000', enterprise: '$50,000+' }
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'Design',
    description: 'Visually stunning branding, logos, and UI/UX designs that boost identity and recognition.',
    icon: '🎨',
    priceRange: { basic: '$500', pro: '$2,500', enterprise: '$5,000+' }
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'SEO, PPC, and social strategies that drive traffic and measurable growth for your brand.',
    icon: '📈',
    priceRange: { basic: '$1,000/mo', pro: '$5,000/mo', enterprise: '$10,000/mo' }
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    category: 'Intelligence',
    description: 'Intelligent chatbots, predictive analytics, and automated systems using cutting-edge models.',
    icon: '🤖',
    priceRange: { basic: '$5,000', pro: '$20,000', enterprise: '$50,000+' }
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Forest',
    category: 'Web',
    description: 'A sustainable retail platform with nested inventory management for an international organic brand.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    results: '200% increase in sales within 3 months.'
  },
  {
    id: '2',
    title: 'FitnessPro Tracker',
    category: 'Mobile',
    description: 'A cross-platform app for workout logging and health insights integrated with wearable devices.',
    techStack: ['Flutter', 'Firebase', 'HealthKit'],
    results: 'Reached 50k active users in first quarter.'
  },
  {
    id: '3',
    title: 'BrandX Identity',
    category: 'Graphic',
    description: 'Complete rebranding for a tech startup including logo, typography, and visual assets.',
    techStack: ['Figma', 'Adobe Suite'],
    results: 'Brand recognition improved by 45%.'
  },
  {
    id: '4',
    title: 'SEO Surge',
    category: 'Marketing',
    description: 'Data-driven SEO campaign for a logistics firm operating in the GCC.',
    techStack: ['Semrush', 'Ahrefs', 'GA4'],
    results: 'Top 3 rankings for 15 high-volume keywords.'
  },
  {
    id: '5',
    title: 'SmartChat AI',
    category: 'AI',
    description: 'Custom NLP chatbot for customer support reducing overhead for a SaaS client.',
    techStack: ['Python', 'Gemini API', 'LangChain'],
    results: 'Reduced support tickets by 60%.'
  },
  {
    id: '6',
    title: 'Inventory Sync',
    category: 'Web',
    description: 'Web-based inventory system for a private library with barcode scanning.',
    techStack: ['Next.js', 'TypeScript', 'Supabase'],
    results: 'Eliminated manual tracking errors completely.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Iftikhar ul Sami',
    role: 'CEO',
    dob: 1973,
    gender: 'male',
    bio: 'Experienced leader guiding Vortek\'s vision with over 30 years of industry insight.',
    funFact: 'Mentor, enjoys hiking in the deep woods.'
  },
  {
    id: '2',
    name: 'Abdul Rehman',
    role: 'Owner & Cofounder',
    dob: 2003,
    gender: 'male',
    bio: 'Passionate innovator driving tech strategies and core operations.',
    funFact: 'Avid gamer, codes in his spare time.'
  },
  {
    id: '3',
    name: 'Syed Abbas',
    role: 'CMO & Cofounder',
    dob: 2001,
    gender: 'male',
    bio: 'Marketing expert with a flair for digital growth and international reach.',
    funFact: 'Coffee enthusiast, runs marathons.'
  },
  {
    id: '4',
    name: 'Hifsa Iftikhar',
    role: 'CFO',
    dob: 2000,
    gender: 'female',
    bio: 'Financial wizard ensuring sustainable operations and global compliance.',
    funFact: 'Book lover, yoga practitioner.'
  },
  {
    id: '5',
    name: 'Syeda Laiba',
    role: 'Team Leader',
    dob: 2002,
    gender: 'female',
    bio: 'Dynamic coordinator fostering team excellence and project delivery.',
    funFact: 'Art fan, travels often.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  { id: '1', title: 'AI Backbone for Business in 2026', category: 'Trends', summary: 'How AI integration is becoming the standard for operations.', author: 'Abdul Rehman', date: 'Oct 12, 2023' },
  { id: '2', title: 'Intelligent Apps Revolution', category: 'Tutorials', summary: 'Transforming static mobile apps into dynamic AI companions.', author: 'Syeda Laiba', date: 'Nov 05, 2023' },
  { id: '3', title: 'Cloud 3.0 Explained', category: 'Trends', summary: 'The shift from centralized to decentralized cloud networks.', author: 'Syed Abbas', date: 'Dec 01, 2023' },
  { id: '4', title: 'Sustainable Tech Solutions', category: 'Case Studies', summary: 'How Vortek blends nature and code for eco-friendly tech.', author: 'Iftikhar ul Sami', date: 'Jan 15, 2024' },
  { id: '5', title: 'Cybersecurity Preemptive Strategies', category: 'Tutorials', summary: 'Protecting your digital assets before the threat arises.', author: 'Hifsa Iftikhar', date: 'Feb 10, 2024' },
  { id: '6', title: 'Generative AI Trends', category: 'Trends', summary: 'Exploring the future of content generation and logic.', author: 'Abdul Rehman', date: 'Feb 20, 2024' },
  { id: '7', title: 'Edge Computing Rise', category: 'Trends', summary: 'Processing data closer to the source for ultimate speed.', author: 'Syed Abbas', date: 'Mar 02, 2024' },
  { id: '8', title: 'Multiagent Systems', category: 'Trends', summary: 'How swarms of AI agents solve complex business logic.', author: 'Syeda Laiba', date: 'Mar 15, 2024' },
  { id: '9', title: 'Domain-Specific AI Models', category: 'Tutorials', summary: 'Why general AI isn\'t enough for specialized industries.', author: 'Iftikhar ul Sami', date: 'Apr 01, 2024' },
  { id: '10', title: 'Physical AI Innovations', category: 'Trends', summary: 'The bridge between digital intelligence and robotics.', author: 'Abdul Rehman', date: 'Apr 18, 2024' },
  { id: '11', title: 'AI-Native Platforms', category: 'Trends', summary: 'Designing software that has intelligence at its core.', author: 'Syed Abbas', date: 'May 05, 2024' },
  { id: '12', title: 'Quantum-Assisted Optimizers', category: 'Trends', summary: 'The next frontier in computational efficiency.', author: 'Hifsa Iftikhar', date: 'May 22, 2024' },
  { id: '13', title: 'Synthetic Data for Innovation', category: 'Tutorials', summary: 'Training models when real-world data is scarce or sensitive.', author: 'Syeda Laiba', date: 'Jun 10, 2024' },
  { id: '14', title: 'Human-Computer Interaction', category: 'Case Studies', summary: 'How we redefined UI/UX for an AI-first generation.', author: 'Iftikhar ul Sami', date: 'Jun 28, 2024' },
  { id: '15', title: 'DevOps Evolutions', category: 'Tutorials', summary: 'From CI/CD to AI-driven deployment pipelines.', author: 'Abdul Rehman', date: 'Jul 12, 2024' },
  { id: '16', title: 'Data Analytics 2026', category: 'Trends', summary: 'Predictive insights that feel like magic.', author: 'Syed Abbas', date: 'Jul 30, 2024' },
  { id: '17', title: 'Tech Sovereignty Paradox', category: 'Trends', summary: 'Balancing global connectivity with local data control.', author: 'Hifsa Iftikhar', date: 'Aug 14, 2024' },
  { id: '18', title: 'AI Co-Workers', category: 'Trends', summary: 'The future of collaborative labor in the digital ecosystem.', author: 'Syeda Laiba', date: 'Sep 01, 2024' },
  { id: '19', title: 'Low-Code Development', category: 'Tutorials', summary: 'Empowering non-devs with powerful creation tools.', author: 'Abdul Rehman', date: 'Sep 18, 2024' },
  { id: '20', title: 'Multi-Cloud Intelligence', category: 'Case Studies', summary: 'Managing complex infra across multiple providers seamlessly.', author: 'Syed Abbas', date: 'Oct 05, 2024' },
];
