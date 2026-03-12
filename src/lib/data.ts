import type { Property, Service, BlogPost, Testimonial, NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    price: 1200000,
    location: '21 Gorham Road, East Legon, Accra',
    beds: 3,
    baths: 2,
    sqft: 2100,
    image: '/images/properties/property-1.jpg',
    type: 'sale',
    featured: true,
    description: 'Stunning modern villa with premium finishes, spacious living areas, and a beautiful garden. Located in the prestigious East Legon neighborhood.',
  },
  {
    id: '2',
    title: 'Contemporary Family Home',
    price: 850000,
    location: '15 Airport Residential, Accra',
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: '/images/properties/property-2.jpg',
    type: 'sale',
    featured: true,
    description: 'Beautiful contemporary home perfect for families. Features modern architecture, large windows, and premium amenities.',
  },
  {
    id: '3',
    title: 'Luxury Apartment',
    price: 3500,
    location: 'Cantonments, Accra',
    beds: 2,
    baths: 2,
    sqft: 1500,
    image: '/images/properties/property-3.jpg',
    type: 'rent',
    featured: true,
    description: 'Elegant apartment in the heart of Cantonments with modern finishes, 24/7 security, and premium facilities.',
  },
  {
    id: '4',
    title: 'Modern Townhouse',
    price: 650000,
    location: 'Adjiringanor, East Legon',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: '/images/properties/property-4.jpg',
    type: 'sale',
    description: 'Stylish townhouse in a gated community with excellent security and modern amenities.',
  },
  {
    id: '5',
    title: 'Premium Villa with Pool',
    price: 2500000,
    location: 'Trasaco Valley, East Legon',
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: '/images/properties/property-5.jpg',
    type: 'sale',
    featured: true,
    description: 'Luxurious villa with private pool, expansive gardens, and breathtaking architecture in the exclusive Trasaco Valley.',
  },
  {
    id: '6',
    title: 'Elegant Estate Home',
    price: 1800000,
    location: 'Spintex Road, Accra',
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: '/images/properties/property-6.jpg',
    type: 'sale',
    description: 'Magnificent estate home with classic architecture, spacious rooms, and beautiful landscaping.',
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Property Sales',
    description: 'Buy your dream property with our expert guidance',
    image: '/images/services/service-sales.jpg',
    href: '/services#sales',
  },
  {
    id: '2',
    title: 'Property Rentals',
    description: 'Find the perfect rental home or apartment',
    image: '/images/services/service-rentals.jpg',
    href: '/services#rentals',
  },
  {
    id: '3',
    title: 'Land Sales',
    description: 'Invest in prime land across Ghana',
    image: '/images/services/service-land.jpg',
    href: '/services#land',
  },
  {
    id: '4',
    title: 'Airbnb Management',
    description: 'Professional short-term rental management',
    image: '/images/services/service-airbnb.jpg',
    href: '/services#airbnb',
  },
  {
    id: '5',
    title: 'Car Rentals',
    description: 'Premium vehicles for your transportation needs',
    image: '/images/services/service-car.jpg',
    href: '/services#car',
  },
  {
    id: '6',
    title: 'Interior Decoration',
    description: 'Transform your space with expert design',
    image: '/images/services/service-interior.jpg',
    href: '/services#interior',
  },
  {
    id: '7',
    title: 'Painting & Tiling',
    description: 'Quality finishing for your property',
    image: '/images/services/service-painting.jpg',
    href: '/services#painting',
  },
  {
    id: '8',
    title: 'Full Property Management',
    description: 'Complete management solutions for property owners',
    image: '/images/services/service-management.jpg',
    href: '/services#management',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Modern Luxury Homes In Accra',
    excerpt: 'Discover the finest luxury properties in Ghana\'s capital, from contemporary villas to elegant townhouses in prime locations.',
    image: '/images/blog/blog-1.jpg',
    date: '2026-03-01',
    href: '/blog/modern-luxury-homes-accra',
  },
  {
    id: '2',
    title: 'Best Areas To Buy Property In Accra',
    excerpt: 'A comprehensive guide to the most desirable neighborhoods for real estate investment in Accra, including East Legon, Cantonments, and more.',
    image: '/images/blog/blog-2.jpg',
    date: '2026-02-15',
    href: '/blog/best-areas-buy-property-accra',
  },
  {
    id: '3',
    title: 'Investment Opportunities In Ghana Real Estate',
    excerpt: 'Explore profitable property investment opportunities in Ghana\'s growing real estate market and learn how to maximize your returns.',
    image: '/images/blog/blog-3.jpg',
    date: '2026-02-01',
    href: '/blog/investment-opportunities-ghana',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Choosing this real estate service was the best decision I ever made. Their team demonstrated exceptional professionalism and expertise. I highly recommend their services to anyone!',
    author: 'Rachel Hadid',
    role: 'Homeowner',
    rating: 5,
    avatar: '/images/testimonials/avatar-1.jpg',
  },
  {
    id: '2',
    quote: 'Their expert negotiation skills helped me sell my property at a great price in no time. I would definitely work with them again.',
    author: 'Louis Podridge',
    role: 'Property Investor',
    rating: 5,
    avatar: '/images/testimonials/avatar-2.jpg',
  },
  {
    id: '3',
    quote: 'They patiently answered all our questions, provided valuable insights, and helped us secure our dream home within our budget.',
    author: 'Anastasia Baldwin',
    role: 'First-time Buyer',
    rating: 5,
    avatar: '/images/testimonials/avatar-3.jpg',
  },
  {
    id: '4',
    quote: 'They presented us with a stunning selection of homes that perfectly matched our preferences. The team\'s attention to detail and in-depth knowledge of the local market truly impressed us!',
    author: 'Harry Janda',
    role: 'Business Executive',
    rating: 5,
    avatar: '/images/testimonials/avatar-4.jpg',
  },
];

export const stats = [
  { value: '17K+', label: 'Satisfied Customers' },
  { value: '25+', label: 'Years Of Experience', featured: true },
  { value: '150+', label: 'Award Winning' },
  { value: '25+', label: 'Property Collections' },
];

export const popularSearches = [
  'Residential House',
  'Studio Apartment',
  'Courtyard',
  'Farmland House',
];

export const locations = [
  'East Legon',
  'Adjiringanor',
  'Airport Residential',
  'Trasaco',
  'East Legon Hills',
  'Cantonments',
  'Tse Addo',
  'Dzowulu',
  'Adenta',
  'Oyarifa',
  'Spintex',
];

export const propertyTypes = [
  'House',
  'Apartment',
  'Villa',
  'Townhouse',
  'Land',
  'Commercial',
];

export const chatbotResponses: Record<string, string> = {
  'default': 'Hello! I\'m your DM Properties assistant. How can I help you today? I can answer questions about property rentals, sales, land purchase, Airbnb services, car rentals, interior decoration, painting and tiling, and property management in Accra.',
  'house east legon': 'Yes, DM Properties offers houses for rent and sale in East Legon and nearby areas. We have a variety of options from modern villas to family homes. Would you like to see available listings?',
  'location': 'Our office is located at MVVR+2W5, Adenta Municipality, Accra. You can also reach us on WhatsApp at +233 247596787 or call us at +233 055918608.',
  'contact': 'You can reach DM Properties and Agency at:\n📍 Location: MVVR+2W5, Adenta Municipality\n📞 Call/WhatsApp: +233 247596787\n📞 Secondary: +233 055918608\n📧 Email: dmpropertiesagency@gmail.com',
  'rent': 'We offer a wide range of rental properties including apartments, houses, and villas in prime locations across Accra. Our rental services cover East Legon, Cantonments, Airport Residential, and more. Would you like to browse our rental listings?',
  'sale': 'We have an extensive portfolio of properties for sale including luxury villas, family homes, townhouses, and apartments. Our properties are located in the most desirable areas of Accra. Would you like to see what\'s available?',
  'land': 'We offer prime land for sale in various locations across Ghana. Whether you\'re looking for residential, commercial, or investment land, we can help you find the perfect plot. Contact us for current land listings.',
  'airbnb': 'Our Airbnb management service handles everything from listing creation to guest communication and cleaning. We help property owners maximize their rental income through professional short-term rental management.',
  'car': 'We offer premium car rental services with a fleet of well-maintained vehicles. Whether you need a car for business or leisure, we have options to suit your needs. Contact us for availability and rates.',
  'interior': 'Our interior decoration service transforms spaces into beautiful, functional environments. From concept to completion, our designers work with you to create your dream space.',
  'painting': 'We provide professional painting and tiling services for residential and commercial properties. Our skilled craftsmen deliver quality finishes that enhance the beauty and value of your property.',
  'management': 'Our full property management service handles everything from tenant screening to maintenance and rent collection. We ensure your property investment is well-maintained and profitable.',
  'price': 'Property prices vary based on location, size, and features. We have options ranging from affordable rentals to luxury properties. Contact us with your specific requirements for accurate pricing.',
  'hello': 'Hello! Welcome to DM Properties and Agency. How can I assist you with your real estate needs today?',
  'hi': 'Hi there! I\'m here to help you with property rentals, sales, and all our services. What can I do for you?',
};

export const getChatbotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  for (const [key, response] of Object.entries(chatbotResponses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }
  
  return 'I\'m not sure I understand. I can help you with property rentals, sales, land purchase, Airbnb services, car rentals, interior decoration, painting and tiling, and property management in Accra. What would you like to know?';
};
