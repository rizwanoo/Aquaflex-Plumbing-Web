import realOwnerImage from '../assets/images/real_owner_aquaflex.png';
import heroImage from '../assets/images/hero_cinematic_tradesman_1794306942022.jpg';
import plumbingImage from '../assets/images/plumbing_craftsmanship_precision_1794306942723.jpg';
import actionImage from '../assets/images/tradesman_jobsite_action_1794306943699.jpg';
import resetImage from '../assets/images/reset_community_tradesmen_1794306944192.jpg';
import { ServiceItem, StoryMilestone, ResetPillar, VideoContent } from '../types';

export const BRAND_CONFIG = {
  name: 'Aquaflex Plumbing',
  ownerTitle: 'Licensed Plumber & Tradesmen Mentor',
  location: 'Dallas, Texas',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61577378651780',
  youtubeUrl: 'https://www.youtube.com/@homieplumbing',
  messengerUrl: 'https://m.me/61577378651780',
  communityFollowers: '20,000+',
  ctaTag: 'DM "RESET"',
  headline: 'BUILT IN THE TRADES. TRANSFORMED BY DISCIPLINE.',
  subheadline: 'From the plumbing trade to a stronger body, mindset, and lifestyle. Real trade experience. Real discipline. Helping fellow tradesmen level up.',
  ownerBio: 'Licensed plumber turned content creator. Came up in the trades, transformed my body and mindset, now I help other tradesmen do the same.',
  dallasCoverage: [
    'Dallas Metro',
    'Fort Worth',
    'Plano',
    'Frisco',
    'Arlington',
    'Irving',
    'Richardson',
    'Carrollton',
    'McKinney',
    'Garland'
  ]
};

export const BRAND_IMAGES = {
  hero: heroImage,
  owner: realOwnerImage, // Authentic owner photo with real Aqua Flex Plumbing metal sign
  craftsmanship: plumbingImage,
  jobsite: actionImage,
  community: resetImage
};

export const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: 'tankless-heaters',
    title: 'High-Efficiency Tankless & Water Systems',
    shortDesc: 'Precision sizing and installation of tankless gas and electric hot water solutions engineered for maximum efficiency and endless supply.',
    fullDesc: 'Commercial and residential grade tankless water heater retrofits, scale-prevention systems, and recirculating pumps configured with industrial copper manifolds.',
    category: 'Residential',
    specs: ['Endless on-demand supply', 'Gas & electric sizing', 'High-efficiency thermal ratings', 'Clean manifold tie-ins'],
    image: actionImage,
    badgeText: 'Thermal Efficiency'
  },
  {
    id: 'copper-repiping',
    title: 'Custom Copper & PEX Manifold Piping',
    shortDesc: 'Flawless pipe routing, solder-crimp joints, and balanced home distribution systems that eliminate pressure drops and silent leaks.',
    fullDesc: 'We treat pipework like functional art. High-spec copper solder joints, commercial-grade PEX manifolds with individual shut-offs, and noise-isolated distribution.',
    category: 'Specialty',
    specs: ['Precision solder craftsmanship', 'Zone isolation valves', 'Pressure balanced circuits', 'Zero-leak guarantee'],
    image: plumbingImage,
    badgeText: 'Master Craftsmanship'
  },
  {
    id: 'commercial-mechanical',
    title: 'Commercial & Multi-Unit Mechanical Plumbing',
    shortDesc: 'Heavy-duty industrial valving, backflow prevention, and commercial mechanical rooms built to strict Texas plumbing codes.',
    fullDesc: 'Built for longevity under high continuous load. Pressure regulator stations, backflow certification assemblies, and high-volume drainage manifolds.',
    category: 'Commercial',
    specs: ['Commercial code compliance', 'Heavy mechanical valving', 'Backflow prevention', 'Scheduled maintenance'],
    image: heroImage,
    badgeText: 'Heavy Mechanical'
  },
  {
    id: 'drain-diagnostics',
    title: 'High-Resolution Drain & Sewer Diagnostics',
    shortDesc: 'Deep optical camera inspections and non-invasive pipeline mapping to locate root intrusions, bellies, and structural breaks.',
    fullDesc: 'No guesswork. Optical sewer scopes with depth transmitters to locate the exact problem zone before any concrete or yard excavation is touched.',
    category: 'Residential',
    specs: ['Full-color fiberoptic video', 'Transmitter locators', 'Zero-guess excavation', 'Hydro-jet clearing readiness'],
    image: actionImage,
    badgeText: 'Optical Diagnostics'
  },
  {
    id: 'emergency-leak-isolation',
    title: 'Critical Emergency Leak Detection & Isolation',
    shortDesc: 'Rapid triage for slab leaks, pressurized water main breaks, and catastrophic supply failures across the Dallas-Fort Worth metroplex.',
    fullDesc: 'Immediate response protocols with ultrasonic leak pinpointing to minimize structural moisture damage and drywall destruction.',
    category: 'Specialty',
    specs: ['Rapid Dallas response', 'Acoustic leak pinpointing', 'Emergency mainline bypass', 'Insurance documentation'],
    image: plumbingImage,
    badgeText: 'Rapid Response'
  },
  {
    id: 'fixture-valves',
    title: 'Architectural Fixture & Valve Reconditioning',
    shortDesc: 'Premium bathroom rough-ins, thermostatic shower manifolds, luxury kitchen roughs, and heavy-duty shutoff installations.',
    fullDesc: 'High-end architectural plumbing installation ensuring balanced water pressure, exact cartridge seating, and clean silicone sealing.',
    category: 'Residential',
    specs: ['Thermostatic mixers', 'Quarter-turn ball valves', 'High-spec fixture trims', 'Clean site cleanup'],
    image: actionImage,
    badgeText: 'Architectural'
  }
];

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    year: 'Phase 1',
    phase: 'The Apprenticeship & Trenches',
    title: 'Grinding in the Dallas Dirt',
    description: 'Years spent digging trenches in 105°F Texas heat, crawling under Pier & Beam foundations, and hauling 80-pound cast iron lines. The trades demand everything from your hands and your back.',
    quote: 'The trade taught me respect for honest hard work, but it also showed me how fast the lifestyle breaks a man down if he is not deliberate.',
    focus: 'Trade Foundation & Craft'
  },
  {
    year: 'Phase 2',
    phase: 'The Physical Breakdown',
    title: 'The Wake-Up Call at 28',
    description: 'Chronic lower back pain, living on convenience store energy drinks, constant fatigue, and joints screaming before the work truck even started. Realized that working hard without taking care of the machine leads straight to early burnout.',
    quote: 'You cannot provide for your family or take pride in your craft if your body gives out on you at thirty-five.',
    focus: 'Physical Awakening'
  },
  {
    year: 'Phase 3',
    phase: 'The Discipline Protocol',
    title: 'Rebuilding the Mind & Body',
    description: 'No magic shortcuts. 4:30 AM garage sessions before loading the truck. Shifting to whole foods, joint mobility work, and strict mental discipline. Lost the fatigue, built athletic resilience, and cured chronic jobsite pains.',
    quote: 'Discipline is doing what needs to be done, even when you are exhausted from 10 hours on your knees running pipe.',
    focus: 'Transformation & Stamina'
  },
  {
    year: 'Phase 4',
    phase: 'Content & Mentorship',
    title: 'The Tradesmen Movement (@homieplumbing)',
    description: 'Started posting raw, authentic videos from the jobsite and the garage gym. Over 20,000 tradesmen connected with the message: plumbers, electricians, carpenters, and roofers demanding more from themselves.',
    quote: 'We built this country with our hands. It is time we start respecting ourselves enough to take care of our health, mindset, and brotherhood.',
    focus: 'Community & The RESET'
  }
];

export const RESET_PILLARS: ResetPillar[] = [
  {
    letter: 'R',
    title: 'Rebuild Joint & Physical Armor',
    subtitle: 'Functional mobility & foundational strength for the jobsite',
    description: 'Trades work creates severe imbalances: repetitive flexion, tight hip flexors, weak upper back, and battered rotator cuffs. We target functional posterior chain strength, spinal decompression, and bulletproof knees.',
    tactics: [
      'Daily 10-minute hip and thoracic spine openers before tool-up',
      'Posterior chain focus (deadlifts, kettlebell swings, pull-ups)',
      'Jobsite ergonomic lifting discipline'
    ]
  },
  {
    letter: 'E',
    title: 'Elevate Daily Nutrition & Fuel',
    subtitle: 'Ditching the gas station trap for sustained tradesman stamina',
    description: 'Replacing gas station energy drinks, processed pastries, and 2 PM crashes with disciplined hydration (electrolytes + water) and high-protein whole foods packed in the cooler.',
    tactics: [
      'Minimum 1 gallon of water daily with sodium/potassium mineral balance',
      'Meal prep Sunday: high-protein lunch boxes ready in the truck',
      'Zero sugar crashes: clean fuel that sustains energy until 6 PM'
    ]
  },
  {
    letter: 'S',
    title: 'Strengthen Mindset & Fortitude',
    subtitle: 'Discipline over fleeting motivation',
    description: 'A tradesman cannot wait until he "feels like it" to get under a slab in winter or work in a hot attic. Bring that same non-negotiable mental standard to your health, your temper, and your personal goals.',
    tactics: [
      'The 4:30 AM standard: win the first hour of your day',
      'Accountability tracking: never miss two days in a row',
      'Emotional composure under jobsite pressure'
    ]
  },
  {
    letter: 'E',
    title: 'Eliminate Burnout & Chronic Fatigue',
    subtitle: 'Restorative recovery protocols for heavy labor',
    description: 'Physical labor requires deliberate nervous system recovery. High-quality sleep hygiene, cold showers or ice exposure, and magnesium supplementation to restore tired muscles.',
    tactics: [
      '7+ hours of quality sleep in a cold, dark room',
      'Evening wind-down routine without endless screen scrolling',
      'Magnesium glycinate & joint recovery supplements'
    ]
  },
  {
    letter: 'T',
    title: 'Transform The Tradesman Standard',
    subtitle: 'Leading by example for your family and crew',
    description: 'When you level up your body and mind, your entire presence shifts. You become the leader your crew respects, the father who has energy to play with his kids after work, and a master of your craft.',
    tactics: [
      'Setting the standard on the jobsite for your apprentices',
      'Leaving energy in the tank for your family at home',
      'Spreading the RESET brotherhood across the trades'
    ]
  }
];

export const VERIFIED_MEDIA: VideoContent[] = [
  {
    id: 'vid-1',
    title: 'Why Most Tradesmen Break Down by 35 (And How to Fix It)',
    channel: '@homieplumbing',
    duration: '12:45',
    category: 'Mindset & Fitness',
    views: '48K views',
    thumbnail: resetImage,
    description: 'Breakdown of joint preservation, hip mobility, and hydration protocols specifically designed for guys carrying heavy tool bags every day.',
    externalUrl: 'https://www.youtube.com/@homieplumbing'
  },
  {
    id: 'vid-2',
    title: 'Clean Copper Manifold Rough-In: The Aquaflex Standard',
    channel: '@homieplumbing',
    duration: '09:20',
    category: 'Trade Skill',
    views: '32K views',
    thumbnail: plumbingImage,
    description: 'Step-by-step masterclass on soldering, clean pipe routing, pressure balance testing, and why craft matters in modern plumbing.',
    externalUrl: 'https://www.youtube.com/@homieplumbing'
  },
  {
    id: 'vid-3',
    title: 'The 4:30 AM Rule: Discipline Before The Work Truck Starts',
    channel: '@homieplumbing',
    duration: '07:15',
    category: 'Mindset & Fitness',
    views: '65K views',
    thumbnail: realOwnerImage,
    description: 'How to build the morning routine that transforms your physique and mental clarity without sacrificing job performance.',
    externalUrl: 'https://www.youtube.com/@homieplumbing'
  },
  {
    id: 'vid-4',
    title: 'Tankless Water Heater Installation & Common Failures',
    channel: '@homieplumbing',
    duration: '14:30',
    category: 'Plumbing Tips',
    views: '29K views',
    thumbnail: actionImage,
    description: 'Gas line sizing, venting requirements, and scale filtration essentials for residential Dallas homeowners.',
    externalUrl: 'https://www.youtube.com/@homieplumbing'
  }
];
