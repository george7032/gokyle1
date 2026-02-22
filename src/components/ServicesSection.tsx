import { motion } from 'framer-motion';
import { Plane, Car, Hotel, Map, Calendar, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Map,
      title: t('services.wildlife'),
      description: t('services.wildlifeDesc'),
    },
    {
      icon: Plane,
      title: t('services.flights'),
      description: t('services.flightsDesc'),
    },
    {
      icon: Car,
      title: t('services.transfers'),
      description: t('services.transfersDesc'),
    },
    {
      icon: Hotel,
      title: t('services.hotels'),
      description: t('services.hotelsDesc'),
    },
    {
      icon: Calendar,
      title: t('services.packages'),
      description: t('services.packagesDesc'),
    },
    {
      icon: Users,
      title: t('services.corporate'),
      description: t('services.corporateDesc'),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
            {t('services.tagline')}
          </p>
          <h2 className="section-title text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="section-subtitle mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-safari/30 card-hover cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-safari-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
