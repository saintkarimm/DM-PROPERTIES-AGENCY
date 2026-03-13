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
    title: 'High ROI Investment',
    description: 'Real estate investment portfolios including single homes, multi-family housing, commercial & industrial buildings',
    image: '/images/services/service-sales.jpg',
    href: '/services#investment',
  },
  {
    id: '2',
    title: 'Engineering & Construction',
    description: 'Building & construction, real estate development, road construction, civil works, architecture & quantity survey',
    image: '/images/services/service-management.jpg',
    href: '/services#engineering',
  },
  {
    id: '3',
    title: 'Brokerage & Agency',
    description: 'Rent, sale of properties, property management, mortgages & consultancy services',
    image: '/images/services/service-rentals.jpg',
    href: '/services#brokerage',
  },
  {
    id: '4',
    title: 'Lands & Land Investment',
    description: 'Buy & sale of lands, land registration at Lands Commission or TDC, land brokerage & landscaping',
    image: '/images/services/service-land.jpg',
    href: '/services#lands',
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
  'default': 'Hello! I\'m your Wenamy Ghana Ltd assistant. How can I help you today? I can answer questions about High ROI real estate investments, engineering & construction, brokerage & agency services, and land investment.',
  'house east legon': 'Yes, Wenamy Ghana Ltd offers houses for rent and sale in East Legon and nearby areas. We have a variety of options from modern villas to family homes. Would you like to see available listings?',
  'location': 'Our office is located at Ashaiman Roundabout, close to Bank of Africa, Tema. You can reach us on WhatsApp at 0243817969 or call us at 0506689602.',
  'contact': 'You can reach Wenamy Ghana Ltd at:\n📍 Location: Ashaiman Roundabout, Close to Bank of Africa, Tema\n📞 Call/WhatsApp: 0243817969\n📞 Secondary: 0506689602\n📧 Email: wenamyinfo@gmail.com',
  'investment': 'We offer High ROI Real Estate Investment Portfolios including single homes, multi-family housing, commercial buildings, industrial buildings, and play parks. Contact us to explore investment opportunities.',
  'engineering': 'Our Engineering & Construction services include building & construction, real estate development, minor road construction, civil works, architecture, and quantity surveying.',
  'brokerage': 'Our Brokerage & Agency services include rent and sale of real estate properties, property management, mortgages, and consultancy services.',
  'land': 'We specialize in Lands & Land Investment including buy and sale of lands, land registration at Lands Commission or TDC, land brokerage, and landscaping services.',
  'rent': 'We offer a wide range of rental properties including apartments, houses, and villas in prime locations. Our rental services cover various areas. Would you like to browse our rental listings?',
  'sale': 'We have an extensive portfolio of properties for sale including luxury villas, family homes, townhouses, and apartments. Would you like to see what\'s available?',
  'price': 'Property prices vary based on location, size, and features. We have options ranging from affordable rentals to luxury properties. Contact us with your specific requirements for accurate pricing.',
  'hello': 'Hello! Welcome to Wenamy Ghana Ltd. How can I assist you with your real estate needs today?',
  'hi': 'Hi there! I\'m here to help you with real estate investments, construction, brokerage, and land services. What can I do for you?',
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
