import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { properties } from '@/lib/data';

interface PropertyCardProps {
  property: typeof properties[0];
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const formatPrice = (price: number, type: string) => {
    if (type === 'rent') {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Favorite Button */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white hover:scale-110">
          <Heart className="w-5 h-5 text-gray-600 transition-colors hover:text-red-500" />
        </button>
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            property.type === 'sale' 
              ? 'bg-gold text-white' 
              : 'bg-blue-500 text-white'
          }`}>
            For {property.type === 'sale' ? 'Sale' : 'Rent'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="text-gold font-bold text-xl mb-2">
          {formatPrice(property.price, property.type)}
        </div>

        {/* Location */}
        <div className="flex items-start gap-2 mb-4">
          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <p className="text-gray-600 text-sm line-clamp-2">{property.location}</p>
        </div>

        {/* Details */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{property.sqft.toLocaleString()} Sq.Ft</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{property.baths} Baths</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const PropertiesSection = () => {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 max-w-lg">
              Explore our handpicked selection of premium properties across Ghana's most desirable locations
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 sm:mt-0"
          >
            <Link to="/properties">
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:border-gold hover:text-gold transition-all duration-200"
              >
                View All Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
