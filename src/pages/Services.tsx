import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Car, Hotel, Map, Calendar, Users, Camera, Compass, Shield, Clock, Award, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentMethods from '@/components/PaymentMethods';
import strip1 from '@/assets/strip-1.jpeg';
import strip2 from '@/assets/strip-2.jpeg';
import strip3 from '@/assets/strip-3.jpeg';
import strip4 from '@/assets/strip-4.jpeg';
import strip5 from '@/assets/strip-5.jpeg';
import strip6 from '@/assets/strip-6.jpeg';

const services = [
  {
    icon: Map,
    title: 'Wildlife Safaris',
    description: 'Experience thrilling game drives in world-renowned national parks and reserves. Our expert guides will take you on unforgettable journeys through the Masai Mara, Serengeti, Amboseli, and more.',
    features: ['Expert local guides', 'Luxury 4x4 vehicles', 'Custom itineraries', 'All-inclusive packages'],
    image: strip1,
  },
  {
    icon: Plane,
    title: 'Flight Bookings',
    description: 'Seamless domestic and international flight arrangements for your journey. We partner with leading airlines to ensure you get the best rates and convenient schedules.',
    features: ['Best rate guarantee', 'Flexible booking options', 'Charter flights available', '24/7 support'],
    image: strip2,
  },
  {
    icon: Car,
    title: 'Private Transfers',
    description: 'Comfortable airport pickups and transfers in modern vehicles. From luxury sedans to spacious safari vehicles, we ensure your ground transportation is stress-free.',
    features: ['Meet & greet service', 'Professional drivers', 'Air-conditioned vehicles', 'GPS tracking'],
    image: strip3,
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Hand-picked accommodations from luxury lodges to boutique hotels. We curate the finest stays that complement your safari experience.',
    features: ['Luxury lodges', 'Boutique hotels', 'Tented camps', 'Beach resorts'],
    image: strip4,
  },
  {
    icon: Calendar,
    title: 'Holiday Packages',
    description: 'All-inclusive vacation packages tailored to your preferences. Combine wildlife safaris, beach holidays, and cultural experiences for the ultimate African adventure.',
    features: ['Customizable itineraries', 'All-inclusive options', 'Honeymoon specials', 'Family packages'],
    image: strip5,
  },
  {
    icon: Users,
    title: 'Group & Corporate',
    description: 'Specialized travel solutions for groups and corporate clients. From team building retreats to incentive travel, we handle groups of all sizes.',
    features: ['Team building programs', 'Conference facilities', 'Incentive travel', 'Event management'],
    image: strip6,
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Trusted Experience',
    description: 'Years of expertise in crafting memorable African adventures.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance throughout your journey.',
  },
  {
    icon: Award,
    title: 'Best Value',
    description: 'Competitive pricing without compromising on quality.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every trip is tailored to your unique preferences.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${strip1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-safari-light font-medium mb-4 tracking-wide uppercase text-sm"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Complete travel solutions for your African adventure
          </motion.p>
        </div>
      </section>

      <main>
        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-16 h-16 rounded-2xl bg-safari-gradient flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-serif text-4xl text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground">
                          <svg className="w-5 h-5 text-safari flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-safari inline-flex items-center gap-2">
                      Inquire Now
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
                Why Gokyle
              </p>
              <h2 className="section-title text-foreground mb-6">
                Why Choose Us
              </h2>
              <p className="section-subtitle mx-auto">
                We're committed to making your African journey unforgettable
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="w-14 h-14 rounded-xl bg-safari-gradient flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Services;
