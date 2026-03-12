import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '@/lib/data';

interface BlogCardProps {
  post: typeof blogPosts[0];
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

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
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(post.date)}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gold transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <a 
          href={post.href}
          className="inline-flex items-center gap-2 text-gold font-semibold text-sm group/btn"
        >
          <span className="relative">
            Read More
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover/btn:w-full" />
          </span>
          <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover/btn:bg-gold group-hover/btn:translate-x-1">
            <ArrowRight className="w-4 h-4 text-gold group-hover/btn:text-white transition-colors" />
          </div>
        </a>
      </div>
    </motion.article>
  );
};

export const BlogSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Uncover The Latest<br />Trends And Stories
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-md lg:text-right"
          >
            Stay informed and updated with the latest trends, home improvement ideas, and our clients story who have achieved their real estate dreams
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
