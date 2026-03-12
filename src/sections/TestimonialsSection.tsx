import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
        <Quote className="w-5 h-5 text-gold" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-gold fill-gold'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12 border-2 border-gold/20">
          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
          <AvatarFallback className="bg-gold/10 text-gold font-semibold">
            {testimonial.author.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.author}</p>
          {testimonial.role && (
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Don't Trust Us, Trust Their Voice
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover heartfelt accounts of joy and fulfillment as our valued clients embark on the quest for their dream homes and prime investments
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
