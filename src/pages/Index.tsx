import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ImageStrip from '@/components/ImageStrip';
import AboutSection from '@/components/AboutSection';
import DestinationsSection from '@/components/DestinationsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import PaymentMethods from '@/components/PaymentMethods';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <ImageStrip />
        <AboutSection />
        <DestinationsSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;
