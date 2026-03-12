import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Bed, Bath, Maximize, Heart, Share2, ArrowLeft, 
  Phone, Mail, Calendar, Check
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Chatbot } from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { properties } from '@/lib/data';

export const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen bg-[#F5F5F5]">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist.</p>
          <Link to="/properties">
            <Button className="bg-gold hover:bg-gold-hover text-white">
              Browse Properties
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number, type: string) => {
    if (type === 'rent') {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  };

  const features = [
    'Air Conditioning',
    'Swimming Pool',
    'Garden',
    'Parking',
    'Security System',
    '24/7 Power',
    'Water Supply',
    'Internet Ready',
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* Back Button */}
      <div className="pt-24 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Properties
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className={`mb-4 ${property.type === 'sale' ? 'bg-gold' : 'bg-blue-500'}`}>
                For {property.type === 'sale' ? 'Sale' : 'Rent'}
              </Badge>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{property.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price and Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card"
            >
              <div className="text-4xl font-bold text-gold mb-6">
                {formatPrice(property.price, property.type)}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bed className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{property.beds}</p>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bath className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{property.baths}</p>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Maximize className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{property.sqft.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Sq.Ft</p>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-card"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description || `This stunning ${property.title.toLowerCase()} offers the perfect blend of luxury and comfort. 
                Located in the prestigious ${property.location.split(',')[1] || 'area'}, this property features 
                spacious living areas, modern finishes, and premium amenities. 
                
                With ${property.beds} bedrooms and ${property.baths} bathrooms spread across ${property.sqft.toLocaleString()} square feet, 
                this home provides ample space for families or professionals seeking an upscale lifestyle.
                
                The property is situated in a prime location with easy access to shopping centers, 
                restaurants, schools, and major transportation routes. Don't miss this opportunity 
                to own a piece of luxury in one of Ghana's most desirable neighborhoods.`}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-card"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-card"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.75125128555!2d-0.2871445!3d5.5912087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1709901234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Property Location"
                />
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-card sticky top-32"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Agent</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold text-gray-900">+233 247596787</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-gray-900 text-sm">dmpropertiesagency@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href="https://wa.me/233247596787"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Viewing
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Reference ID: <span className="font-mono">PROP-{property.id.padStart(4, '0')}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};
