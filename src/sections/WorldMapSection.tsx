import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

// World map locations with coordinates (percentage based)
const locations = [
  { id: 1, name: 'New York', x: 25, y: 35, country: 'USA' },
  { id: 2, name: 'London', x: 47, y: 28, country: 'UK' },
  { id: 3, name: 'Dubai', x: 62, y: 42, country: 'UAE' },
  { id: 4, name: 'Accra', x: 49, y: 52, country: 'Ghana', highlighted: true },
  { id: 5, name: 'Lagos', x: 51, y: 50, country: 'Nigeria' },
  { id: 6, name: 'Cape Town', x: 53, y: 78, country: 'South Africa' },
  { id: 7, name: 'Nairobi', x: 58, y: 55, country: 'Kenya' },
  { id: 8, name: 'Singapore', x: 78, y: 55, country: 'Singapore' },
  { id: 9, name: 'Sydney', x: 88, y: 75, country: 'Australia' },
  { id: 10, name: 'Toronto', x: 23, y: 30, country: 'Canada' },
  { id: 11, name: 'Sao Paulo', x: 32, y: 68, country: 'Brazil' },
  { id: 12, name: 'Mumbai', x: 68, y: 48, country: 'India' },
];

const MapMarker = ({ location, index }: { location: typeof locations[0]; index: number }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="absolute group cursor-pointer"
      style={{ left: `${location.x}%`, top: `${location.y}%` }}
    >
      {/* Pulse Animation */}
      <div className={`absolute inset-0 rounded-full animate-pulse-slow ${
        location.highlighted ? 'bg-gold/30' : 'bg-white/20'
      }`} style={{ width: '40px', height: '40px', marginLeft: '-20px', marginTop: '-20px' }} />
      
      {/* Marker Dot */}
      <div className={`relative w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-150 ${
        location.highlighted 
          ? 'bg-gold shadow-lg shadow-gold/50' 
          : 'bg-white/70 hover:bg-white'
      }`} style={{ marginLeft: '-6px', marginTop: '-6px' }}>
        {location.highlighted && (
          <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-75" />
        )}
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
        <div className="bg-white rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
          <p className="font-semibold text-gray-900 text-sm">{location.name}</p>
          <p className="text-xs text-gray-500">{location.country}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
        </div>
      </div>
    </motion.div>
  );
};

export const WorldMapSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            International Property Network
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our global network connects buyers, investors and renters with premium real estate opportunities across the world.
          </p>
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[2/1] max-w-5xl mx-auto"
        >
          {/* SVG World Map */}
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 0 20px rgba(212, 168, 83, 0.1))' }}
          >
            {/* Simplified world map dots pattern */}
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.15)" />
              </pattern>
            </defs>
            
            {/* Continents represented as dotted shapes */}
            {/* North America */}
            <ellipse cx="220" cy="150" rx="120" ry="100" fill="url(#dots)" opacity="0.6" />
            {/* South America */}
            <ellipse cx="300" cy="350" rx="80" ry="120" fill="url(#dots)" opacity="0.6" />
            {/* Europe */}
            <ellipse cx="480" cy="130" rx="70" ry="50" fill="url(#dots)" opacity="0.6" />
            {/* Africa */}
            <ellipse cx="500" cy="280" rx="100" ry="130" fill="url(#dots)" opacity="0.6" />
            {/* Asia */}
            <ellipse cx="700" cy="180" rx="150" ry="100" fill="url(#dots)" opacity="0.6" />
            {/* Australia */}
            <ellipse cx="850" cy="380" rx="80" ry="60" fill="url(#dots)" opacity="0.6" />
            
            {/* Connection Lines */}
            <g stroke="rgba(212, 168, 83, 0.2)" strokeWidth="1" fill="none" strokeDasharray="4,4">
              <path d="M490,260 Q600,200 700,180" />
              <path d="M490,260 Q400,150 480,130" />
              <path d="M490,260 Q350,200 220,150" />
              <path d="M490,260 Q650,350 850,380" />
            </g>
          </svg>

          {/* Location Markers */}
          {locations.map((location, index) => (
            <MapMarker key={location.id} location={location} index={index} />
          ))}
        </motion.div>

        {/* Ghana Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="text-center">
            <p className="text-white font-semibold">Accra, Ghana</p>
            <p className="text-white/60 text-sm">Headquarters</p>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0848374497045!2d-0.01744962501378619!3d5.700882694280905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102081fc4de5a681%3A0xde4120303b06e113!2sWenamy%20Ghana%20Ltd.%20Brokerage!5e0!3m2!1sen!2sgh!4v1773428238509!5m2!1sen!2sgh"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wenamy Ghana Ltd Location"
              className="w-full"
            />
          </div>
          <p className="text-center text-white/50 text-sm mt-4">
            Visit us at Ashaiman Roundabout, close to Bank of Africa, Tema
          </p>
        </motion.div>
      </div>
    </section>
  );
};
