import { motion } from 'framer-motion';
import { Award, Users, Building2, MapPin, Check, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Chatbot } from '@/components/Chatbot';
import { useCountUp } from '@/hooks/useCountUp';
import { locations } from '@/lib/data';

const StatCard = ({ value, label, icon: Icon, delay = 0 }: { value: string; label: string; icon: any; delay?: number }) => {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp({ end: numericValue, duration: 2000 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 shadow-card text-center"
    >
      <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-gold" />
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-500">{label}</div>
    </motion.div>
  );
};

export const About = () => {
  const values = [
    {
      title: 'Trust & Integrity',
      description: 'We build lasting relationships through honest and transparent dealings.',
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide to our clients.',
    },
    {
      title: 'Customer First',
      description: 'Our clients\' needs and satisfaction are at the heart of everything we do.',
    },
    {
      title: 'Innovation',
      description: 'We embrace modern solutions to deliver the best real estate experience.',
    },
  ];

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
              About DM Properties
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Your trusted partner in finding the perfect property across Ghana
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/about-property.jpg"
                alt="DM Properties Office"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Real Estate Advisors
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Looking for a trustworthy and experienced real estate broker in Ghana who delivers more than just keys? 
                DM Properties and Agency has been serving clients for over 25 years, providing comprehensive real estate 
                solutions that go beyond expectations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer rentals, property sales, land acquisition, Airbnb services, car rentals, interior décor, 
                painting, tiling and complete property management. Our team of experienced professionals is dedicated 
                to helping you find your perfect property match.
              </p>
              <p className="text-gold font-semibold text-lg">
                From keys to comfort, we've got you covered.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="17K+" label="Satisfied Customers" icon={Users} delay={0} />
            <StatCard value="25+" label="Years Experience" icon={Award} delay={0.1} />
            <StatCard value="150+" label="Awards Won" icon={Building2} delay={0.2} />
            <StatCard value="25+" label="Property Collections" icon={MapPin} delay={0.3} />
          </div>
        </div>
      </div>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at DM Properties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve clients across prime locations in Accra and beyond
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location, index) => (
              <motion.div
                key={location}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-gray-700 font-medium">{location}</span>
              </motion.div>
            ))}
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
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let our experienced team guide you through the process of finding the perfect property
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-gold font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};
