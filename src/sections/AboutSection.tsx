import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { stats } from '@/lib/data';

interface StatCardProps {
  value: string;
  label: string;
  featured?: boolean;
  delay?: number;
}

const StatCard = ({ value, label, featured, delay = 0 }: StatCardProps) => {
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
      className={`relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'bg-dark text-white'
          : 'bg-white shadow-card hover:shadow-card-hover'
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      )}
      <div className={`text-4xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>
        {count}{suffix}
      </div>
      <div className={`text-sm ${featured ? 'text-white/70' : 'text-gray-500'}`}>
        {label}
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Real<br />Estate Advisors
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Looking for a trustworthy and experienced real estate broker in Ghana who delivers more than just keys?
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Wenamy Ghana Ltd specializes in High ROI Real Estate Investment Portfolios, Engineering & Building Construction, Brokerage & Agency Services, and Lands & Land Investment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              We proudly serve Spintex and prime locations including East Legon, Adjiringanor, Airport Residential, Trasaco, East Legon Hills, Cantonments, Tse Addo, Dzowulu, Adenta and Oyarifa.
            </p>
            <p className="text-gold font-semibold text-lg">
              From keys to comfort, we've got you covered.
            </p>
          </motion.div>

          {/* Right Column - Stats Grid + Image */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  featured={stat.featured}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/images/about-property.jpg"
                  alt="Modern property"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Featured Property</p>
                    <p className="font-semibold text-gray-900">Luxury Villa Collection</p>
                  </div>
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
