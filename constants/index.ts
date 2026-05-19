export const SITE = {
  name: 'Arieshelby',
  tagline: 'Corporate technology studio',
  email: 'info@arieshelby.com',
  phone: '+254 722 599 431',
  phoneHref: 'tel:+254722599431',
}

export const NAV_LINKS = [
  { href: '/WebDevelopment', label: 'Systems' },
  { href: '/VisualMedia', label: 'Creative Media' },
  { href: '/OtherServices', label: 'Brand Design' },
  { href: '/#systems-done', label: 'Products' },
  { href: '/#contact', label: 'Contact' },
]

export const HERO_STATS = [
  { value: '3', label: 'Core practices' },
  { value: '24/7', label: 'Support available' },
]

export const FEATURES = [
  {
    title: 'Scalable & Secure Engineering',
    description:
      'We build reliable, scalable systems with secure APIs and infrastructure ready for modern cloud environments, tailored to real business demands.',
    icon: 'architecture',
  },
  {
    title: 'Structured & Agile Delivery Process',
    description:
      'Our workflow is efficient and well-organized, guided by agile practices, defined milestones, and steady communication throughout the entire project.',
    icon: 'delivery',
  },
  {
    title: 'Unified Brand Experience',
    description:
      'We ensure every digital product and creative output reflects your brand identity consistently across web, mobile, photography, videography, and design.',
    icon: 'brand',
  },
]

export const SOLUTION_PILLARS = [
  {
    id: 'systems',
    label: '01 — Digital Systems',
    title: 'Custom software for modern businesses',
    description:
      'We create and develop web platforms, internal business tools, HR systems, online stores, and learning management systems, all built to be secure, dependable, and ready to scale as your business grows.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    href: '/WebDevelopment',
    cta: 'Explore systems',
  },
  {
    id: 'media',
    label: '02 — Creative Media',
    title: 'Visual storytelling that converts',
    description:
      'We provide photography, cinematography, livestreaming, and content production for campaigns, products, and corporate communications, designed to strengthen and elevate your brand presence.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    href: '/VisualMedia',
    cta: 'View portfolio',
  },
  {
    id: 'brand',
    label: '03 — Brand Design',
    title: 'Identity systems with lasting impact',
    description:
      'We provide design services covering brand identity, UI/UX, and print materials, all crafted to be clean, impactful, and consistent across every touchpoint. We also design business premises and deliver custom creative solutions for anything you need designed, ensuring every detail reflects your brand and purpose.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    href: '/OtherServices',
    cta: 'See brand work',
  },
]

export const SHOWCASE_FEATURES = [
  {
    title: 'Advanced planning',
    subtitle: 'Schedule your business workflows',
    description:
      'Map processes, automate reminders, and keep teams aligned with dashboards built around how you actually operate.',
    bullets: [
      'Role-based access control',
      'Automated notifications',
      'Audit-ready reporting',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    reverse: false,
  },
  {
    title: 'Never miss a beat',
    subtitle: 'Real-time insights at your fingertips',
    description:
      'Monitor KPIs, track projects, and respond faster with systems designed for clarity — not complexity.',
    bullets: [
      'Live analytics views',
      'Mobile-responsive admin',
      'Integrations with your systems',
    ],
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
    reverse: true,
  },
]

export const SYSTEMS_DONE = [
  {
    id: 'hr-system',
    featured: true,
    name: 'Arieshelby HR System',
    category: 'Human Resources',
    description:
      'A complete HR management platform for employee records, leave management, payroll workflows, and organizational reporting — built for SMEs and growing enterprises.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    href: 'https://hr.arieshelby.com',
    tags: ['HR', 'Dashboard', 'SaaS'],
    stats: ['Employee portal', 'Leave & attendance', 'Admin analytics'],
  },
  {
    id: 'masomo',
    featured: false,
    name: 'Masomo Portal',
    category: 'EdTech',
    description:
      'Online learning platform for skills and talent development — admin dashboard, accounts, invoicing, and notifications.',
    image: '/arieshelby_masomo_portal_001.png',
    href: 'https://masomoportal.com',
    tags: ['LMS', 'Django', 'Bootstrap'],
    stats: ['Student portal', 'Course management', 'Payments'],
  },
  {
    id: 'qsolution',
    featured: false,
    name: 'Q Solution LLC',
    category: 'Corporate',
    description:
      'Consultancy corporate website with multi-page structure, contact flows, and modern UI built on Next.js.',
    image: '/arieshelby-qsolution-website.png',
    href: 'https://qsolutionllc.com',
    tags: ['Next.js', 'Tailwind', 'Corporate'],
    stats: ['Multi-page', 'SEO-ready', 'Contact forms'],
  },
  {
    id: 'alexadashcams',
    featured: false,
    name: 'Alexa Dashcams',
    category: 'E-commerce',
    description:
      'Online store for automotive dashcams with product catalog, cart, and admin order management.',
    image: '/alexadashcams_01.png',
    href: 'https://alexadashcams.co.ke',
    tags: ['E-commerce', 'Django', 'Payments'],
    stats: ['Product catalog', 'Checkout', 'Admin panel'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Operations Director',
    company: 'Financial services client',
    quote:
      'Arieshelby delivered a system that transformed how we manage staff and reporting. Professional, responsive, and technically excellent.',
  },
  {
    name: 'Founder',
    company: 'E-commerce startup',
    quote:
      'From branding to the live store, the team understood our vision and shipped on time. Highly recommend for end-to-end digital work.',
  },
  {
    name: 'Program Lead',
    company: 'Education platform',
    quote:
      'The learning portal exceeded expectations — clean UX, stable backend, and ongoing support when we needed it most.',
  },
]

export const SERVICES = [
  {
    name: 'Digital Systems',
    description: 'Web apps, APIs, cloud infrastructure, and custom software built to scale.',
    imageSrc: '/as_web_development.png',
    imageAlt: 'Digital systems development',
    href: '/WebDevelopment',
    tags: ['Next.js', 'Django', 'Cloud'],
  },
  {
    name: 'Creative Media',
    description: 'Photography, cinematography, and visual storytelling for modern brands.',
    imageSrc: '/as_photogrphy.jpg',
    imageAlt: 'Creative media production',
    href: '/VisualMedia',
    tags: ['Photo', 'Video', 'Content'],
  },
  {
    name: 'Brand Design',
    description: 'Identity systems, UI/UX, and brand experiences that stand out.',
    imageSrc: '/arieshelby_branding_and_design.jpg',
    imageAlt: 'Brand design services',
    href: '/OtherServices',
    tags: ['Identity', 'UI/UX', 'Print'],
  },
]

export const CAPABILITIES = [
  {
    title: 'Full-Stack Development',
    description:
      'End-to-end web and mobile applications with modern frameworks and clean architecture.',
    icon: '01',
  },
  {
    title: 'System Integration',
    description:
      'APIs, databases, and third-party services wired together into reliable digital infrastructure.',
    icon: '02',
  },
  {
    title: 'Brand & Experience Design',
    description:
      'Visual identity and interface design that communicates your brand with clarity and impact.',
    icon: '03',
  },
  {
    title: 'IT Consultancy',
    description:
      'Infrastructure planning, security, and technology strategy tailored to your business goals.',
    icon: '04',
  },
]

export const TECH_STACK = [
  'Next.js',
  'React',
  'TypeScript',
  'Django',
  'Python',
  'PostgreSQL',
  'Tailwind CSS',
  'Three.js',
]

export const CLIENTS = [
  { name: 'Caritas MFB', href: '/OtherServices', logo: '/arieshelby-caritas-mfb-logo.png' },
  { name: 'Masomo Portal', href: 'https://masomoportal.com', logo: '/masomoportal_logo.png' },
  { name: 'Alexa Dashcams', href: 'https://alexadashcams.co.ke', logo: '/alexa-dashcam-logo.png' },
]

export const MEDIA_CATEGORIES = [
  'All',
  'Photography',
  'Commercial',
  'Video',
  'Brand',
  'Corporate',
] as const

export type MediaCategory = (typeof MEDIA_CATEGORIES)[number]

export const MEDIA_PORTFOLIO = [
  {
    title: 'Corporate headshots',
    category: 'Photography' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Product campaign',
    category: 'Commercial' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Brand film still',
    category: 'Video' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Office environment',
    category: 'Corporate' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Lifestyle shoot',
    category: 'Photography' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1be719e8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Event coverage',
    category: 'Commercial' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Social content pack',
    category: 'Brand' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7a132?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Documentary frame',
    category: 'Video' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1478737273437-9d0c2b2ffb98?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Architectural detail',
    category: 'Photography' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Team portrait series',
    category: 'Corporate' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Food & beverage',
    category: 'Commercial' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Campaign mood board',
    category: 'Brand' as MediaCategory,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
]

export const BRAND_PROJECTS = [
  {
    title: 'Caritas MFB',
    subtitle: 'Branch environmental branding',
    image: '/arieshelby-caritas-mfb-004.jpg',
    href: '/OtherServices',
  },
  {
    title: 'Corporate identity',
    subtitle: 'Logo & stationery system',
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80',
    href: '#',
  },
  {
    title: 'Retail packaging',
    subtitle: 'Product line refresh',
    image:
      'https://images.unsplash.com/photo-1607083206869-4caa2a7a0a12?auto=format&fit=crop&w=900&q=80',
    href: '#',
  },
  {
    title: 'Event collateral',
    subtitle: 'Signage & print suite',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    href: '#',
  },
  {
    title: 'UI design system',
    subtitle: 'Web & mobile components',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
    href: '#',
  },
  {
    title: 'Annual report',
    subtitle: 'Editorial layout design',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80',
    href: '#',
  },
]

export const TECH_SERVICES = [
  {
    name: 'Web & System Development',
    description:
      'Production-grade websites, web applications, and system integrations built with modern frameworks and scalable architecture.',
    imageSrc: '/as_web_development.png',
    imageAlt: 'Web and system development',
  },
  {
    name: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications designed for performance, usability, and long-term maintainability.',
    imageSrc: '/arieshelby_app_development.jpg',
    imageAlt: 'Mobile app development',
  },
  {
    name: 'IT Consultancy',
    description:
      'Infrastructure planning, network setup, CCTV systems, and technology strategy aligned with your business operations.',
    imageSrc: '/arieshelby_IT_Consultancy_services.jpg',
    imageAlt: 'IT consultancy services',
  },
]
