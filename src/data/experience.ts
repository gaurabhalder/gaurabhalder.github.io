export type ExperienceItem = {
  id: string
  period: string
  title: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    id: 'founder',
    period: '2026 — PRESENT',
    title: 'Founder / Technology Entrepreneur',
    description:
      'Building digital products, platforms, and business systems focused on web, commerce, and growth technology.',
  },
  {
    id: 'dev-marketer',
    period: '2023 — PRESENT',
    title: 'Web Developer & Digital Marketer',
    description:
      'Shipping websites, funnels, and performance campaigns with conversion tracking and measurable outcomes.',
  },
  {
    id: 'ecommerce',
    period: '2021 — PRESENT',
    title: 'E-commerce and Digital Solutions',
    description:
      'Delivering WooCommerce and custom commerce solutions, catalog systems, and operational tooling for online brands.',
  },
  {
    id: 'system-engineer',
    period: '2020 — PRESENT',
    title: 'Sr. Executive (System Engineer) — Sadia Enterprise',
    description:
      'Maintaining official websites, reporting systems, and optical networking infrastructure with customer support.',
  },
]

export const stats = [
  { id: 'projects', value: 50, suffix: '+', label: 'PROJECTS BUILT' },
  { id: 'campaigns', value: 100, suffix: '+', label: 'CAMPAIGNS MANAGED' },
  { id: 'years', value: 5, suffix: '+', label: 'YEARS EXPERIENCE' },
  { id: 'customers', value: 10, suffix: 'K+', label: 'CUSTOMERS REACHED' },
] as const

export type Testimonial = {
  id: string
  label: string
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    label: 'CLIENT_FEEDBACK_01',
    quote:
      'Gaurab built a clean, fast storefront and connected our ads tracking properly. We finally understood what was converting.',
    name: 'Amina Rahman',
    role: 'Founder, Retail Brand',
  },
  {
    id: 't2',
    label: 'CLIENT_FEEDBACK_02',
    quote:
      'The order workflow he designed removed daily chaos from our operations. Clear thinking, solid execution.',
    name: 'Rafiul Hasan',
    role: 'Operations Lead, E-commerce',
  },
  {
    id: 't3',
    label: 'CLIENT_FEEDBACK_03',
    quote:
      'From WordPress to Meta campaigns, he connects the full stack. Rare to find someone who understands both product and growth.',
    name: 'Nadia Chowdhury',
    role: 'Marketing Manager',
  },
]
