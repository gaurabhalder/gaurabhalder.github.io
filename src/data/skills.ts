export type ExpertiseItem = {
  id: string
  number: string
  title: string
  description: string
  icon: 'code' | 'cart' | 'megaphone' | 'chart' | 'workflow' | 'spark'
}

export const expertise: ExpertiseItem[] = [
  {
    id: 'web',
    number: '01',
    title: 'WEB DEVELOPMENT',
    description:
      'Laravel, PHP, WordPress, and modern frontend development for high-performance digital products.',
    icon: 'code',
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'E-COMMERCE',
    description:
      'WooCommerce, custom online stores, product systems, and checkout optimization.',
    icon: 'cart',
  },
  {
    id: 'marketing',
    number: '03',
    title: 'DIGITAL MARKETING',
    description:
      'Facebook Ads, campaign strategy, and conversion optimization that drives measurable growth.',
    icon: 'megaphone',
  },
  {
    id: 'tracking',
    number: '04',
    title: 'TRACKING & ANALYTICS',
    description:
      'Meta Pixel, GTM, server-side tracking, and analytics for clearer decision-making.',
    icon: 'chart',
  },
  {
    id: 'automation',
    number: '05',
    title: 'AUTOMATION',
    description:
      'Business workflow automation and system integrations that remove manual friction.',
    icon: 'workflow',
  },
  {
    id: 'ai',
    number: '06',
    title: 'AI & TECHNOLOGY',
    description:
      'AI-powered tools and modern technology solutions for smarter digital operations.',
    icon: 'spark',
  },
]

export const techStack = [
  'Laravel',
  'PHP',
  'JavaScript',
  'React',
  'WordPress',
  'WooCommerce',
  'MySQL',
  'Tailwind CSS',
  'Meta Ads',
  'Google Ads',
  'GTM',
  'GitHub',
  'Docker',
  'AI Tools',
] as const
