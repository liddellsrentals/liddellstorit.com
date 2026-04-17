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
  'A service of Liddell Stor All',
  'Owner has deep roots in the community and construction industry',
  'Serving North East Arkansas and surrounding communities since 2017',
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
