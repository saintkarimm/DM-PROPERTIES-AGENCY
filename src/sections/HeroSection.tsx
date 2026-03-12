import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Home, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { popularSearches, locations, propertyTypes } from '@/lib/data';

const tabs = ['Buy', 'Rent', 'Sell'];

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Journey To Your Perfect Home
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            Find rentals, land, homes and premium properties across Ghana with a trusted real estate broker.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 ${
                      activeTab === tab
                        ? 'text-gold border-b-2 border-gold bg-gold/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Filters */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  {/* Property Type */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Home className="w-5 h-5" />
                    </div>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold cursor-pointer"
                    >
                      <option value="">Property Type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold cursor-pointer"
                    >
                      <option value="">Location</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold cursor-pointer"
                    >
                      <option value="">Price Range</option>
                      <option value="0-100000">$0 - $100,000</option>
                      <option value="100000-500000">$100,000 - $500,000</option>
                      <option value="500000-1000000">$500,000 - $1,000,000</option>
                      <option value="1000000+">$1,000,000+</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <Button 
                  className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-3 h-auto rounded-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Search
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Popular Searches */}
          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-white/70 text-sm mr-2">Popular Search:</span>
              {popularSearches.map((search) => (
                <Badge
                  key={search}
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 cursor-pointer transition-colors border-0"
                >
                  {search}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
