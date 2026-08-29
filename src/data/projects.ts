export type Project = {
  id: string
  number: string
  category: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  overview: string
  challenge: string
  solution: string
  technology: string
  result: string
}

export const projects: Project[] = [
  {
    id: 'dokanai',
    number: '01',
    category: 'E-commerce Systems',
    title: 'DokanAi',
    description: 'E-commerce order management system for faster operations and clearer workflows.',
    image: '',
    tags: ['Laravel', 'MySQL', 'Automation'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gaurabhalder',
    overview:
      'An order management platform designed to help online stores track, process, and fulfill orders efficiently.',
    challenge:
      'Stores struggled with fragmented order data, delayed updates, and manual status tracking across channels.',
    solution:
      'Built a centralized dashboard with status pipelines, role-based access, and automation-friendly workflows.',
    technology: 'Laravel, MySQL, REST APIs, responsive admin UI.',
    result: 'Faster order handling, fewer manual errors, and clearer operational visibility.',
  },
  {
    id: 'product-importer',
    number: '02',
    category: 'WordPress',
    title: 'Product Importer',
    description: 'WordPress product import solution for bulk catalog operations.',
    image: '',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gaurabhalder',
    overview:
      'A product import tool that helps merchants move large catalogs into WooCommerce with less friction.',
    challenge:
      'Manual product entry slowed launches and introduced inconsistent product data.',
    solution:
      'Created structured import flows with validation, mapping, and repeatable batch processing.',
    technology: 'WordPress, WooCommerce, PHP, CSV/XML processing.',
    result: 'Reduced catalog setup time and improved data consistency across product listings.',
  },
  {
    id: 'customer-quality',
    number: '03',
    category: 'Analytics',
    title: 'Customer Quality Checker',
    description: 'Customer purchase and cancellation analysis system for better decision-making.',
    image: '',
    tags: ['PHP', 'Analytics', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gaurabhalder',
    overview:
      'A system that analyzes purchase and cancellation patterns to identify customer quality signals.',
    challenge:
      'Teams lacked clear visibility into risky orders and repeat cancellation behavior.',
    solution:
      'Implemented scoring logic and reporting views to highlight quality trends and risk indicators.',
    technology: 'PHP, MySQL, custom reporting dashboards.',
    result: 'Better order screening and improved operational confidence before fulfillment.',
  },
  {
    id: 'techjodo',
    number: '04',
    category: 'Platform',
    title: 'TechJodo',
    description: 'Technology and training platform for learning and digital growth.',
    image: '',
    tags: ['WordPress', 'LMS', 'UI'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gaurabhalder',
    overview:
      'A digital platform focused on technology education, training content, and community growth.',
    challenge:
      'Needed a scalable presence that could present courses, services, and brand authority clearly.',
    solution:
      'Designed and developed a structured platform experience with content modules and conversion paths.',
    technology: 'WordPress, custom themes, performance optimization.',
    result: 'A clearer brand presence and stronger foundation for training and technology offerings.',
  },
  {
    id: 'fb-catalog-feed',
    number: '05',
    category: 'Marketing Tech',
    title: 'FB Catalog Feed',
    description: 'WooCommerce XML feed for Meta Ads product catalogs.',
    image: '',
    tags: ['WooCommerce', 'Meta Ads', 'XML'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gaurabhalder',
    overview:
      'A feed generator that syncs WooCommerce products into Meta-ready catalog formats.',
    challenge:
      'Product ads required clean, continuously updated catalog feeds with correct attributes.',
    solution:
      'Built XML feed generation with mapped product fields and store-friendly configuration.',
    technology: 'WooCommerce, PHP, Meta Catalog XML specs.',
    result: 'More reliable product ads syncing and fewer feed rejection issues.',
  },
  {
    id: 'custom-ecommerce',
    number: '06',
    category: 'Laravel',
    title: 'Custom E-commerce Platform',
    description: 'Laravel e-commerce solution built for scalable online selling.',
    image: '',
    tags: ['Laravel', 'E-commerce', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gaurabhalder',
    overview:
      'A custom Laravel commerce foundation for stores that need more control than off-the-shelf themes.',
    challenge:
      'Businesses needed flexible product, cart, and checkout logic beyond rigid templates.',
    solution:
      'Delivered a modular Laravel architecture with customizable catalog and checkout flows.',
    technology: 'Laravel, MySQL, Blade/API-ready structure.',
    result: 'A maintainable commerce base ready for growth and custom business rules.',
  },
]
