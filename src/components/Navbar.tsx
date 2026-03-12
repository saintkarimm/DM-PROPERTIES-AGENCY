import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Home, Building2, Users, Briefcase, BookOpen, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { navLinks } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  'Home': <Home className="w-5 h-5" />,
  'Properties': <Building2 className="w-5 h-5" />,
  'About': <Users className="w-5 h-5" />,
  'Services': <Briefcase className="w-5 h-5" />,
  'Blog': <BookOpen className="w-5 h-5" />,
  'Contact Us': <Phone className="w-5 h-5" />,
};

export const Navbar = () => {
  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-nav'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                DM Properties
              </span>
              <span className={`text-xs transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
                & Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-gold bg-gold/10'
                    : isScrolled
                    ? 'text-gray-700 hover:text-gold hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button 
                className="bg-gold hover:bg-gold-hover text-white font-semibold px-6 transition-all duration-200 hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className={isScrolled ? 'text-gray-900' : 'text-white'}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">DM Properties</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-2 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive(link.href)
                          ? 'text-gold bg-gold/10'
                          : 'text-gray-700 hover:text-gold hover:bg-gray-100'
                      }`}
                    >
                      {iconMap[link.label]}
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pb-6">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gold hover:bg-gold-hover text-white font-semibold">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};
