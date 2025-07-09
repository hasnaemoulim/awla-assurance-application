import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import PartnersSection from '@/components/sections/PartnersSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function HomePage() {
  return (
    <>
      {/* Section principale */}
      <HeroSection />
      
      {/* Section fonctionnalités */}
      <FeaturesSection />
      
      {/* Section processus */}
      <ProcessSection />
      
      {/* Section statistiques */}
      <StatsSection />
      
      {/* Section témoignages */}
      <TestimonialsSection />
      
      {/* Section FAQ */}
      <FAQSection />
      
      {/* Section partenaires */}
      <PartnersSection />
      
      {/* Section call-to-action finale */}
      <CallToActionSection />
    </>
  );
}
