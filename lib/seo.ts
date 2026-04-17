import { siteConfig } from '@/lib/site-content'

export type BreadcrumbItem = {
  name: string
  url: string
}

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildPortableStorageProductSchema(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${siteConfig.name} Portable Storage Containers`,
    description: `Portable storage containers delivered by ${siteConfig.name} across Northeast Arkansas and the Mid-South.`,
    brand: {
      '@type': 'Brand',
      name: siteConfig.parentName,
    },
    category: 'Portable storage container',
    url: pageUrl,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Available sizes',
        value: siteConfig.containerOffers.map((offer) => offer.size).join(', '),
      },
      {
        '@type': 'PropertyValue',
        name: 'Rental term',
        value: 'Monthly rental',
      },
      {
        '@type': 'PropertyValue',
        name: 'Delivery travel fee',
        value: '$90 within 20 miles of the office',
      },
      {
        '@type': 'PropertyValue',
        name: 'Pickup fee',
        value: '$90 within 20 miles of the office',
      },
      {
        '@type': 'PropertyValue',
        name: 'Relocation fee',
        value: '$90 within 20 miles of the office',
      },
    ],
    offers: siteConfig.containerOffers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      description: offer.description,
      url: siteConfig.reserveUrl,
      priceCurrency: 'USD',
      price: offer.monthlyRent,
      availability: `https://schema.org/${offer.availability}`,
      itemCondition: 'https://schema.org/NewCondition',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: offer.monthlyRent,
        unitText: 'month',
      },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Container size',
          value: offer.size,
        },
        {
          '@type': 'PropertyValue',
          name: 'Reservation deposit',
          value: `$${offer.reservationDeposit}`,
        },
        {
          '@type': 'PropertyValue',
          name: 'Delivery fee within 20 miles',
          value: `$${offer.deliveryFee}`,
        },
        {
          '@type': 'PropertyValue',
          name: 'Pickup fee within 20 miles',
          value: `$${offer.pickupFee}`,
        },
        {
          '@type': 'PropertyValue',
          name: 'Relocation fee within 20 miles',
          value: `$${offer.relocationFee}`,
        },
      ],
    })),
  }
}
