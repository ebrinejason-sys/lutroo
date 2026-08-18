export const studio = {
  name: 'Lutroo Spaces',
  tagline: 'Design · Innovate · Elevate',
  discipline: 'Multidisciplinary Design Studio',
  summary:
    'Lutroo Spaces is a multidisciplinary design studio redefining how people experience space. We specialise in wellness-focused environments, blending functionality, aesthetics, and emotional balance to create interiors that inspire calm, creativity, and connection.',
  url: 'https://lutroospaces.com',
} as const;

export const contact = {
  /** Raw digits, used for tel: and wa.me links. */
  phone: '+25670745645',
  phoneDisplay: '+256 707 456 45',
  email: 'lutroospaces@gmail.com',
  hours: 'Monday – Saturday, 8:00 – 18:00',
  location: 'Kampala, Uganda',
} as const;

export const navigation = [
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#work' },
  { label: 'Planner', href: '#planner' },
  { label: 'Contact', href: '#contact' },
] as const;

export type Service = {
  id: string;
  index: string;
  title: string;
  /** Verbatim description used across the site and the services summary table. */
  description: string;
  detail: string;
  deliverables: readonly string[];
  image: string;
};

export const services: readonly Service[] = [
  {
    id: 'interior-design',
    index: '01',
    title: 'Interior Design',
    description:
      'Tailored concepts that harmonize color, light, and texture to enhance well-being.',
    detail:
      'We treat an interior as a mood before it is a material. Light temperature, acoustic softness, tactile surfaces and honest natural finishes are tuned together so a room settles the nervous system the moment you walk in.',
    deliverables: [
      'Concept direction and moodboards',
      'Material, colour and lighting schedules',
      'Photorealistic 3D visualisation',
      'Furniture, joinery and art sourcing',
    ],
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'landscape-planning',
    index: '02',
    title: 'Landscape Planning',
    description:
      'Sustainable outdoor designs integrating native plants and natural materials.',
    detail:
      'Shaping the outdoors into environments that heal, engage and endure. We plant indigenous, water-wise species and build with local stone and timber, so the landscape matures into its site rather than fighting it.',
    deliverables: [
      'Site and micro-climate reading',
      'Indigenous planting masterplan',
      'Hardscape, drainage and irrigation strategy',
      'Seasonal maintenance and stewardship plan',
    ],
    image:
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'spatial-optimization',
    index: '03',
    title: 'Spatial Optimization',
    description: 'Smart layouts that maximize comfort, flow, and usability.',
    detail:
      'Most spaces do not need more square metres, they need better ones. We re-plan circulation, daylight and storage so every zone earns its place and movement through the building feels effortless.',
    deliverables: [
      'Circulation and daylight audit',
      'Layout re-planning and zoning',
      'Built-in storage and joinery design',
      'Multi-use room strategies',
    ],
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'brand-space-design',
    index: '04',
    title: 'Brand Space Design',
    description:
      'Signature environments for restaurants, offices, and wellness brands.',
    detail:
      'A brand is felt in a room long before it is read on a wall. We translate positioning into atmosphere: arrival, pacing, sound, scent and light, so guests remember how the space made them feel.',
    deliverables: [
      'Spatial brand identity translation',
      'Guest journey and atmosphere design',
      'Lighting, acoustic and signage systems',
      'Fit-out documentation for contractors',
    ],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'site-visits',
    index: '05',
    title: 'Site Visits',
    description:
      'Professional on-site consultations, assessments, and actionable recommendations.',
    detail:
      'A focused visit from a senior designer. We read orientation, ventilation, structure, soil and topography on the ground, then leave you with a written assessment you can act on with or without us.',
    deliverables: [
      'On-site walkthrough and assessment',
      'Sunlight, airflow and structure notes',
      'Prioritised action plan with budget bands',
      'Written consultation summary',
    ],
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  },
] as const;

export const pillars = [
  {
    title: 'Research',
    body: 'We read the site before we draw. Orientation, light, acoustics, climate and material availability set the constraints every good design answers to.',
  },
  {
    title: 'Empathy',
    body: 'We design around how you actually live. Your routines, culture and aspirations shape the plan long before a single finish is selected.',
  },
  {
    title: 'Artistry',
    body: 'We compose with restraint. Natural materials, considered proportion and a disciplined palette do more than decoration ever could.',
  },
] as const;

export const phases = [
  {
    number: '01',
    title: 'Discovery',
    body: 'A site visit and a long conversation. We document the space as it is and the life you want it to hold.',
  },
  {
    number: '02',
    title: 'Concept',
    body: 'Sketches, moodboards and material samples. We agree on the feeling of the space before we resolve the detail.',
  },
  {
    number: '03',
    title: 'Design',
    body: 'Drawings, 3D visualisation and full schedules of finishes, lighting and furniture, costed and ready to build.',
  },
  {
    number: '04',
    title: 'Execution',
    body: 'On-site coordination through to final styling, so the space that gets built is the space that was promised.',
  },
] as const;

export type Project = {
  id: string;
  title: string;
  category: 'Residential' | 'Landscape' | 'Commercial';
  location: string;
  year: string;
  statement: string;
  description: string;
  highlights: readonly string[];
  image: string;
};

export const projects: readonly Project[] = [
  {
    id: 'nsimbi-house',
    title: 'Nsimbi House',
    category: 'Residential',
    location: 'Private residence, Kampala',
    year: '2024',
    statement: 'A home that exhales',
    description:
      'A family home reorganised around its courtyard. Deep eaves, lime-plastered walls and a restrained palette of timber and travertine keep the interior cool and quiet through the middle of the day.',
    highlights: [
      'Central planted courtyard',
      'Acoustic timber ceiling',
      'Cross-ventilated living wing',
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'stone-terraces',
    title: 'Stone Terraces',
    category: 'Landscape',
    location: 'Hillside estate, Entebbe',
    year: '2024',
    statement: 'Landscape as shelter',
    description:
      'A steep, eroding slope rebuilt as a sequence of habitable terraces. Local volcanic stone retains the ground while indigenous planting stabilises soil and draws pollinators back to the site.',
    highlights: [
      'Indigenous, water-wise planting',
      'Volcanic stone retaining walls',
      'Rainwater harvesting to irrigation',
    ],
    image:
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'the-quiet-floor',
    title: 'The Quiet Floor',
    category: 'Commercial',
    location: 'Creative studio, Kampala',
    year: '2023',
    statement: 'Focus, designed for',
    description:
      'An open-plan office rebuilt around concentration. Planted partitions absorb sound, circadian lighting tracks the day, and small enclosed rooms give the floor somewhere to be quiet.',
    highlights: [
      'Planted acoustic partitions',
      'Circadian lighting scheme',
      'Enclosed focus and rest rooms',
    ],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'terrace-pavilion',
    title: 'Terrace Pavilion',
    category: 'Residential',
    location: 'Penthouse, Kampala',
    year: '2023',
    statement: 'Inside, continued outside',
    description:
      'The boundary between living room and terrace removed entirely. Micro-cement floors run straight through frameless sliding glass, and low seating keeps the horizon in view from anywhere in the room.',
    highlights: [
      'Continuous micro-cement floor',
      'Frameless sliding glass wall',
      'Automated external shading',
    ],
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'garden-rooms',
    title: 'Garden Rooms',
    category: 'Landscape',
    location: 'Private estate, Jinja',
    year: '2022',
    statement: 'Rooms without walls',
    description:
      'A large open garden divided into a series of outdoor rooms, each with its own use and planting character, linked by permeable stone paths and a shallow reflecting basin.',
    highlights: [
      'Permeable stone circulation',
      'Reflecting water basin',
      'Aromatic native planting',
    ],
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'the-long-room',
    title: 'The Long Room',
    category: 'Commercial',
    location: 'Restaurant and lounge, Kampala',
    year: '2022',
    statement: 'Built for gathering',
    description:
      'A hospitality interior planned around how an evening actually moves. Acoustic zoning lets conversation survive a full room, and warm layered light carries the space from lunch through to late.',
    highlights: [
      'Acoustic zoning for a full room',
      'Bronze and timber bar counter',
      'Layered light from noon to late',
    ],
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
  },
] as const;

export const projectCategories = ['All', 'Residential', 'Landscape', 'Commercial'] as const;

export const spaceTypes = [
  {
    id: 'residence',
    title: 'Home or residence',
    detail: 'Apartment, house or villa',
  },
  {
    id: 'landscape',
    title: 'Garden or landscape',
    detail: 'Courtyard, garden or estate grounds',
  },
  {
    id: 'commercial',
    title: 'Commercial or brand space',
    detail: 'Restaurant, office, hotel or retail',
  },
  {
    id: 'advisory',
    title: 'Site visit only',
    detail: 'On-site assessment and written advice',
  },
] as const;

export const faqs = [
  {
    question: 'How do I book a site visit?',
    answer: `Call or WhatsApp ${contact.phoneDisplay}, email ${contact.email}, or send a brief through the planner on this page. We confirm most visits within a day.`,
  },
  {
    question: 'Do you take on projects outside Kampala?',
    answer:
      'Yes. We work across Uganda and the wider region. For projects further afield we front-load a longer site visit and run the rest of the design remotely, with site coordination at key build stages.',
  },
  {
    question: 'Can I hire you for advice only?',
    answer:
      'Absolutely. Site visits are a standalone service. You get an on-site assessment and a written action plan you are free to build from, with us or with your own team.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Concept to a fully documented design is typically six to twelve weeks depending on scale and scope. The planner on this page gives you an indicative range for your brief.',
  },
] as const;
