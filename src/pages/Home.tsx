import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { PropertiesSection } from '@/sections/PropertiesSection';
import { WorldMapSection } from '@/sections/WorldMapSection';
import { BlogSection } from '@/sections/BlogSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FooterCTA } from '@/sections/FooterCTA';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Chatbot } from '@/components/Chatbot';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PropertiesSection />
        <WorldMapSection />
        <BlogSection />
        <TestimonialsSection />
        <FooterCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};
