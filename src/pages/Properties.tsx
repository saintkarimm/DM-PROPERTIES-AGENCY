import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize, Heart, Filter, Search } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Chatbot } from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { properties, locations } from '@/lib/data';

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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <Link to={`/properties/${property.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Favorite Button */}
          <button 
            onClick={(e) => e.preventDefault()}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white hover:scale-110"
          >
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
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <Link to={`/properties/${property.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gold transition-colors">
            {property.title}
          </h3>
        </Link>

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

export const Properties = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Type filter
      if (selectedType !== 'all' && property.type !== selectedType) return false;

      // Location filter
      if (selectedLocation !== 'all' && !property.location.includes(selectedLocation)) return false;

      // Price filter
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
        if (max && property.price > parseInt(max)) return false;
        if (property.price < parseInt(min)) return false;
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedLocation, priceRange]);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Property Type */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Property Type</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="all"
              checked={selectedType === 'all'}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-4 h-4 text-gold focus:ring-gold"
            />
            <span className="text-gray-700">All Types</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="sale"
              checked={selectedType === 'sale'}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-4 h-4 text-gold focus:ring-gold"
            />
            <span className="text-gray-700">For Sale</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="rent"
              checked={selectedType === 'rent'}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-4 h-4 text-gold focus:ring-gold"
            />
            <span className="text-gray-700">For Rent</span>
          </label>
        </div>
      </div>

      {/* Location */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Location</h4>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
        >
          <option value="all">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
        >
          <option value="all">All Prices</option>
          <option value="0-500000">$0 - $500,000</option>
          <option value="500000-1000000">$500,000 - $1,000,000</option>
          <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
          <option value="2000000+">$2,000,000+</option>
        </select>
      </div>

      {/* Reset Button */}
      <Button
        onClick={() => {
          setSelectedType('all');
          setSelectedLocation('all');
          setPriceRange('all');
          setSearchQuery('');
        }}
        variant="outline"
        className="w-full"
      >
        Reset Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* Header */}
      <div className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Properties
            </h1>
            <p className="text-gray-600">
              Browse our extensive collection of premium properties across Ghana
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Mobile Filter Button */}
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="sm:hidden flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="py-4">
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-card sticky top-32">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              <FilterContent />
            </div>
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredProperties.length}</span> properties
              </p>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property, index) => (
                  <PropertyCard key={property.id} property={property} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};
