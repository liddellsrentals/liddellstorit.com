export const siteConfig = {
  name: 'Liddell Stor-It',
  parentName: 'Liddell Stor All',
  url: 'https://liddellstorit.com',
  reserveUrl: 'https://www.liddellstorall.com/pages/storit',
  aboutUrl: 'https://www.liddellstorall.com/pages/about-us',
  contactUrl: 'https://www.liddellstorall.com/pages/contact',
  phone: '8702369391',
  formattedPhone: '(870) 236-9391',
  email: 'storage@liddellstorall.com',
  address: {
    streetAddress: '1300 Country Club Rd',
    addressLocality: 'Paragould',
    addressRegion: 'AR',
    postalCode: '72450',
    addressCountry: 'US',
  },
  serviceArea: [
    'Northeast Arkansas',
    'Paragould, Arkansas (Greene County)',
    'Jonesboro, Arkansas (Craighead County)',
    'West Memphis, Arkansas (Crittenden County)',
    'Memphis, Tennessee (Shelby County)',
    'Bartlett, Tennessee (Shelby County)',
    'Southaven, Mississippi (DeSoto County)',
    'Collierville, Tennessee (Shelby County)',
    'Germantown, Tennessee (Shelby County)',
    'Olive Branch, Mississippi (DeSoto County)',
    'Horn Lake, Mississippi (DeSoto County)',
    'Poplar Bluff, Missouri (Butler County)',
  ],
  hours: [
    { day: 'Monday', opens: '09:00', closes: '17:00' },
    { day: 'Tuesday', opens: '09:00', closes: '17:00' },
    { day: 'Wednesday', opens: '09:00', closes: '17:00' },
    { day: 'Thursday', opens: '09:00', closes: '17:00' },
    { day: 'Friday', opens: '09:00', closes: '17:00' },
  ],
  containerOffers: [
    {
      name: 'Portable Container (8 x 16 x 8)',
      size: "8' x 16' x 8'",
      monthlyRent: 195,
      reservationDeposit: 50,
      deliveryFee: 90,
      pickupFee: 90,
      relocationFee: 90,
      availability: 'InStock',
      description: 'Compact portable storage container for smaller moves, apartment loads, seasonal items, and a few rooms of furniture.',
    },
    {
      name: 'Portable Container (8 x 20 x 8)',
      size: "8' x 20' x 8'",
      monthlyRent: 225,
      reservationDeposit: 75,
      deliveryFee: 90,
      pickupFee: 90,
      relocationFee: 90,
      availability: 'InStock',
      description: 'Larger portable storage container for whole-home moves, remodels, bulky furniture, and extra project room.',
    },
  ],
} as const

export const contentFreshnessDate = '2026-04-17'

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/guides', label: 'Guides' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/faq', label: 'FAQ' },
] as const

export const guides = [
  {
    slug: 'how-to-pack-a-storage-container',
    title: 'How to Pack a Storage Container',
    description: 'A practical packing order for keeping items safe, accessible, and organized during a move or renovation.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'choosing-the-right-container-size',
    title: 'Choosing the Right Container Size',
    description: 'A simple way to estimate how much space you need for a home, apartment, or business project.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'storage-container-pricing',
    title: 'Storage Container Pricing Explained',
    description: 'For up-to-date pricing, refer to our <a href="{{reserveUrl}}">Reservation Page</a>. This guide explains what affects portable storage pricing and how to compare quotes without surprises.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'moving-tips',
    title: 'Moving Tips',
    description: 'A practical moving pillar page with timeline advice, packing priorities, and ways to stay organized before moving day.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'home-organization',
    title: 'Home Organization',
    description: 'Ideas for decluttering, seasonal storage, and getting rooms back under control without feeling overwhelmed.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'renovation-planning',
    title: 'Renovation Planning',
    description: 'Advice for staging rooms, protecting furniture, and planning storage around remodel timelines.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'moving-tips/move-day-checklist',
    title: 'Move-Day Checklist',
    description: 'A simple checklist for the last 24 hours before moving day so nothing gets missed.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'moving-tips/how-to-pack-fragile-items',
    title: 'How to Pack Fragile Items',
    description: 'A practical guide to wrapping, labeling, and loading breakables so they stay protected.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'moving-tips/how-to-load-a-storage-container',
    title: 'How to Load a Storage Container',
    description: 'Tips for stacking heavier items first, keeping weight balanced, and leaving room where needed.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'home-organization/decluttering-by-room',
    title: 'Decluttering by Room',
    description: 'A room-by-room approach to clearing clutter without trying to organize the whole house at once.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'home-organization/garage-organization',
    title: 'Garage Organization',
    description: 'How to make garage space more usable with better sorting, storage, and seasonal rotation.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'home-organization/seasonal-storage',
    title: 'Seasonal Storage',
    description: 'A guide to storing holiday decor, patio gear, and off-season items without creating clutter.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'renovation-planning/pre-renovation-timeline',
    title: 'Pre-Renovation Timeline',
    description: 'A planning timeline that helps you clear rooms and reserve storage before remodeling starts.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'renovation-planning/how-to-protect-furniture-during-remodel',
    title: 'How to Protect Furniture During a Remodel',
    description: 'Steps for keeping furniture clean, safe, and out of the work zone during renovation projects.',
    updatedAt: '2026-04-17',
  },
  {
    slug: 'renovation-planning/contractor-staging-plan',
    title: 'Contractor Staging Plan',
    description: 'How to stage rooms so contractors can move efficiently and the project stays organized.',
    updatedAt: '2026-04-17',
  },
] as const

export const serviceAreas = [
  {
    slug: 'northeast-arkansas',
    title: 'Northeast Arkansas',
    description: 'Portable storage for moves, remodels, and cleanup projects across Northeast Arkansas communities.',
  },
  {
    slug: 'paragould-ar',
    title: 'Paragould, AR (Greene County)',
    description: 'Fast local delivery, flexible rental periods, and simple pickup for homes and businesses in Paragould.',
  },
  {
    slug: 'jonesboro-ar',
    title: 'Jonesboro, AR (Craighead County)',
    description: 'Portable storage for moves, cleanouts, and remodels in Jonesboro and Craighead County.',
  },
  {
    slug: 'west-memphis-ar',
    title: 'West Memphis, AR (Crittenden County)',
    description: 'Local delivery and pickup for portable storage projects in West Memphis and nearby Crittenden County communities.',
  },
  {
    slug: 'memphis-tn',
    title: 'Memphis, TN (Shelby County)',
    description: 'Portable storage delivery for homes, renovations, and business projects across Memphis and Shelby County.',
  },
  {
    slug: 'bartlett-tn',
    title: 'Bartlett, TN (Shelby County)',
    description: 'Flexible container delivery for household projects, business overflow, and renovations in Bartlett.',
  },
  {
    slug: 'southaven-ms',
    title: 'Southaven, MS (DeSoto County)',
    description: 'Portable storage for moves and remodels in Southaven and the surrounding DeSoto County area.',
  },
  {
    slug: 'collierville-tn',
    title: 'Collierville, TN (Shelby County)',
    description: 'Convenient storage container delivery for homes and businesses in Collierville.',
  },
  {
    slug: 'germantown-tn',
    title: 'Germantown, TN (Shelby County)',
    description: 'Portable storage for cleanouts, moves, and renovation projects in Germantown.',
  },
  {
    slug: 'olive-branch-ms',
    title: 'Olive Branch, MS (DeSoto County)',
    description: 'Reliable container delivery for homeowners, contractors, and businesses in Olive Branch.',
  },
  {
    slug: 'horn-lake-ms',
    title: 'Horn Lake, MS (DeSoto County)',
    description: 'Portable storage options for short-term moves, remodels, and extra space in Horn Lake.',
  },
  {
    slug: 'poplar-bluff-mo',
    title: 'Poplar Bluff, MO (Butler County)',
    description: 'Portable storage delivery for moves, renovations, and business storage projects in Poplar Bluff.',
  },
  {
    slug: 'bono-ar',
    title: 'Bono, AR (Craighead County)',
    description: 'Portable storage for moves, renovations, and cleanup projects in Bono and nearby Craighead County areas.',
  },
  {
    slug: 'brookland-ar',
    title: 'Brookland, AR (Craighead County)',
    description: 'Local portable storage delivery for homes and projects in Brookland.',
  },
  {
    slug: 'marmaduke-ar',
    title: 'Marmaduke, AR (Greene County)',
    description: 'Portable storage for moves and remodels in Marmaduke and surrounding Greene County communities.',
  },
  {
    slug: 'rector-ar',
    title: 'Rector, AR (Clay County)',
    description: 'Portable storage delivery for household and business projects in Rector.',
  },
  {
    slug: 'piggott-ar',
    title: 'Piggott, AR (Clay County)',
    description: 'Portable storage options for moves, storage overflow, and renovation projects in Piggott.',
  },
  {
    slug: 'delaplaine-ar',
    title: 'Delaplaine, AR (Greene County)',
    description: 'Convenient container delivery for homes and projects in Delaplaine.',
  },
  {
    slug: 'walnut-ridge-ar',
    title: 'Walnut Ridge, AR (Lawrence County)',
    description: 'Portable storage delivery for moves, cleanouts, and remodels in Walnut Ridge.',
  },
  {
    slug: 'pocahontas-ar',
    title: 'Pocahontas, AR (Randolph County)',
    description: 'Portable storage for homeowners, contractors, and businesses in Pocahontas.',
  },
  {
    slug: 'swifton-ar',
    title: 'Swifton, AR (Jackson County)',
    description: 'Container delivery for short-term moves, renovations, and extra storage in Swifton.',
  },
  {
    slug: 'cash-ar',
    title: 'Cash, AR (Craighead County)',
    description: 'Portable storage delivery for household projects and renovations in Cash.',
  },
  {
    slug: 'harrisburg-ar',
    title: 'Harrisburg, AR (Poinsett County)',
    description: 'Portable storage support for moves, storage overflow, and cleanup projects in Harrisburg.',
  },
  {
    slug: 'trumann-ar',
    title: 'Trumann, AR (Poinsett County)',
    description: 'Portable storage delivery for homes and businesses in Trumann.',
  },
  {
    slug: 'lake-city-ar',
    title: 'Lake City, AR (Craighead County)',
    description: 'Portable container delivery for projects in Lake City and nearby areas.',
  },
  {
    slug: 'monette-ar',
    title: 'Monette, AR (Craighead County)',
    description: 'Portable storage for moves, remodels, and extra space in Monette.',
  },
  {
    slug: 'leachville-ar',
    title: 'Leachville, AR (Mississippi County)',
    description: 'Portable storage options for Leachville homes, remodels, and business projects.',
  },
  {
    slug: 'cardwell-mo',
    title: 'Cardwell, MO (Dunklin County)',
    description: 'Convenient portable storage delivery for projects in Cardwell.',
  },
  {
    slug: 'lepanto-ar',
    title: 'Lepanto, AR (Poinsett County)',
    description: 'Portable storage for moves, renovations, and cleanup jobs in Lepanto.',
  },
  {
    slug: 'marked-tree-ar',
    title: 'Marked Tree, AR (Poinsett County)',
    description: 'Local container delivery for homes and businesses in Marked Tree.',
  },
  {
    slug: 'senath-mo',
    title: 'Senath, MO (Dunklin County)',
    description: 'Portable storage delivery for moving and remodeling projects in Senath.',
  },
  {
    slug: 'kennett-mo',
    title: 'Kennett, MO (Dunklin County)',
    description: 'Portable storage for residential and commercial projects in Kennett.',
  },
  {
    slug: 'holcomb-mo',
    title: 'Holcomb, MO (Dunklin County)',
    description: 'Portable storage delivery for moves, cleanouts, and renovation projects in Holcomb.',
  },
  {
    slug: 'dexter-mo',
    title: 'Dexter, MO (Stoddard County)',
    description: 'Portable storage options for homes and businesses in Dexter.',
  },
  {
    slug: 'highland-ar',
    title: 'Highland, AR (Sharp County)',
    description: 'Convenient portable storage for projects in Highland and nearby Sharp County areas.',
  },
  {
    slug: 'ash-flat-ar',
    title: 'Ash Flat, AR (Sharp County)',
    description: 'Portable storage delivery for moves and remodels in Ash Flat.',
  },
  {
    slug: 'maynard-ar',
    title: 'Maynard, AR (Randolph County)',
    description: 'Portable storage for residential and business projects in Maynard.',
  },
  {
    slug: 'corning-ar',
    title: 'Corning, AR (Clay County)',
    description: 'Portable storage delivery for moves, renovation jobs, and cleanup projects in Corning.',
  },
  {
    slug: 'imboden-ar',
    title: 'Imboden, AR (Lawrence County)',
    description: 'Portable storage options for homes and projects in Imboden.',
  },
  {
    slug: 'batesville-ar',
    title: 'Batesville, AR (Independence County)',
    description: 'Portable storage delivery for moves, remodels, and storage overflow in Batesville.',
  },
  {
    slug: 'bald-knob-ar',
    title: 'Bald Knob, AR (White County)',
    description: 'Portable storage for household and business projects in Bald Knob.',
  },
  {
    slug: 'searcy-ar',
    title: 'Searcy, AR (White County)',
    description: 'Portable storage delivery for homes and commercial projects in Searcy.',
  },
  {
    slug: 'newport-ar',
    title: 'Newport, AR (Jackson County)',
    description: 'Portable storage options for projects in Newport and the surrounding area.',
  },
] as const

export const faqItems = [
  {
    question: 'What size portable storage container do I need?',
    answer:
      'Our containers come in 2 sizes: 8\' x 16\' x 8\' and 8\' x 20\' x 8\'. The right size depends on whether you are storing a few rooms of furniture, an entire house, or just overflow items. Start with the volume of the largest rooms and leave room for walkways and stackable boxes.',
  },
  {
    question: 'How does delivery work?',
    answer:
      'We schedule a delivery date, bring the container to your driveway or preferred spot, and pick it up when you are finished.',
  },
  {
    question: 'Will you relocate a container after delivery?',
    answer:
      'Yes. We offer container relocation as a service. Contact our office for further details.',
  },
  {
    question: 'Do you serve areas outside Northeast Arkansas?',
    answer:
      'Yes. We serve Paragould, Northeast Arkansas, and surrounding communities. If you are interested in the services we offer, contact us and we can confirm availability.',
  },
  {
    question: 'How much does portable storage cost?',
    answer:
      'For up-to-date pricing, refer to our <a href="{{reserveUrl}}">Reservation Page</a>. Pricing usually depends on container size, rental length, and delivery distance. Ask for a quote that separates container rental from delivery and pickup so you can compare accurately.',
  },
  {
    question: 'Can I keep the container at my home?',
    answer:
      'Yes. On-site storage is a common use case because it keeps your belongings close and easy to access while you pack, move, or remodel.',
  },
  {
    question: 'How secure is a portable storage container?',
    answer:
      'Portable containers are built from heavy-duty steel and can be secured with your own padlock for added protection.',
  },
  {
    question: 'How long can I keep the container?',
    answer:
      'Rental periods are flexible, so you can keep the container for a short move or a longer renovation project.',
  },
  {
    question: 'What can I store in the container?',
    answer:
      'Most household goods, furniture, boxes, tools, and business supplies are suitable. If you are concerned about storing a potentially hazardous material, please contact our office.',
  },
  {
    question: 'Can I access my belongings while the container is on-site?',
    answer:
      'Yes. One of the main advantages of on-site portable storage is that you can get to your items whenever you need them.',
  },
  {
    question: 'How do I reserve a container?',
    answer:
      'Call our office or use the reserve link on the website. We will help you choose the right container and schedule delivery.',
  },
] as const

export const trustFacts = [
  'Local business located in Paragould, Arkansas',
  'Owner has deep roots in the community and construction industry',
  'Serving North East Arkansas and surrounding communities since 2017',
  'Inspecting and cleaning containers before delivery',
] as const

export const testimonials = [
  {
    quote: 'Great place and great people... very friendly and go above and beyond to help you.',
    name: 'Shawn S.',
    location: 'Jonesboro, AR',
    useCase: 'Personal Storage',
    image: '/images/customers/shawn-s.png',
  },
  {
    quote: 'They made my move easy, and they moved my stuff in a timely manner. Thanks Liddell StorAll!',
    name: 'James O.',
    location: 'Pocahontas, AR',
    useCase: 'Local Move',
    image: '/images/customers/john-o.jpg',
  },
  {
    quote: 'Liddell Stor All’s staff is personal and professional. I’ve had such a smooth experience with them and have known my things are safe and secure.',
    name: 'Hannah R.',
    location: 'Benton, AR',
    useCase: 'Personal Storage',
    image: '/images/customers/hannah-r.png',
  },
] as const
