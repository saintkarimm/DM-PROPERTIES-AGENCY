import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Chatbot } from '@/components/Chatbot';
import { blogPosts } from '@/lib/data';

interface BlogCardProps {
  post: typeof blogPosts[0];
  index: number;
  featured?: boolean;
}

const BlogCard = ({ post, index, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-8 lg:py-12 lg:pr-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gold transition-colors">
            {post.title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <a 
            href={post.href}
            className="inline-flex items-center gap-2 text-gold font-semibold group/link"
          >
            <span>Read Full Article</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            5 min read
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gold transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        <a 
          href={post.href}
          className="inline-flex items-center gap-2 text-gold font-semibold text-sm group/link"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
};

export const Blog = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  // Additional blog posts for display
  const additionalPosts = [
    {
      id: '4',
      title: 'Guide to Renting Property in Accra',
      excerpt: 'Everything you need to know about renting property in Ghana\'s capital city, from lease agreements to tenant rights.',
      image: '/images/blog/blog-2.jpg',
      date: '2026-01-15',
      href: '/blog/guide-renting-accra',
    },
    {
      id: '5',
      title: 'Home Improvement Tips for New Owners',
      excerpt: 'Essential tips and tricks for new homeowners looking to improve and maintain their property investment.',
      image: '/images/blog/blog-3.jpg',
      date: '2026-01-01',
      href: '/blog/home-improvement-tips',
    },
    {
      id: '6',
      title: 'Understanding Property Taxes in Ghana',
      excerpt: 'A comprehensive guide to property taxes, rates, and obligations for property owners in Ghana.',
      image: '/images/properties/property-4.jpg',
      date: '2025-12-20',
      href: '/blog/property-taxes-ghana',
    },
  ];

  const allPosts = [...otherPosts, ...additionalPosts];

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
              Blog & Stories
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Stay informed with the latest trends, insights, and stories from the world of real estate
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogCard post={featuredPost} index={0} featured />
        </div>
      </div>

      {/* All Posts */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600">
              Explore our collection of articles covering everything real estate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
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
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Get the latest real estate news, tips, and exclusive property listings delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-gold font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};
