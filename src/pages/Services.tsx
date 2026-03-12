import { motion } from 'framer-motion';
import { ArrowRight, Home, Key, Map, Building, Car, Paintbrush, Wrench, Shield } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Chatbot } from '@/components/Chatbot';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  'Property Sales': <Home className="w-8 h-8" />,
  'Property Rentals': <Key className="w-8 h-8" />,
  'Land Sales': <Map className="w-8 h-8" />,
  'Airbnb Management': <Building className="w-8 h-8" />,
  'Car Rentals': <Car className="w-8 h-8" />,
  'Interior Decoration': <Paintbrush className="w-8 h-8" />,
  'Painting & Tiling': <Wrench className="w-8 h-8" />,
  'Full Property Management': <Shield className="w-8 h-8" />,
};

export const Services = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* Hero */}
      <div className="pt-32 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Discover Your Perfect Property Match
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From property sales to full management, we offer a complete range of real estate services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-gold rounded-xl flex items-center justify-center text-white">
                    {iconMap[service.title]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-gold font-semibold text-sm group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose DM Properties?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Guidance',
                    description: 'Our team of experienced professionals provides personalized guidance throughout your property journey.',
                  },
                  {
                    title: 'Extensive Portfolio',
                    description: 'Access to a wide range of properties across Ghana\'s most desirable locations.',
                  },
                  {
                    title: 'End-to-End Service',
                    description: 'From property search to closing, we handle every aspect of your real estate transaction.',
                  },
                  {
                    title: 'Trusted Reputation',
                    description: 'Over 25 years of experience and thousands of satisfied clients across Ghana.',
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="/images/services/service-sales.jpg"
                alt="Our Services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-white">25+</p>
                <p className="text-white/80">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gold rounded-3xl p-10 lg:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need Our Services?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today and let our team help you with all your real estate needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gold font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/233247596787"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold px-8 py-4 rounded-xl hover:bg-whatsapp/90 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};
