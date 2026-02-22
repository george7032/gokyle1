import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import strip4 from '@/assets/elephant.jpeg';
import strip5 from '@/assets/flamingo.jpeg';
import strip9 from '@/assets/zebra.jpeg';
import strip11 from '@/assets/beach.jpeg';
import hero2 from '@/assets/lion.jpeg';
import hero4 from '@/assets/wildbeast.jpeg';

const DestinationsSection = () => {
  const { t } = useLanguage();

  const destinations = [
    {
      name: t('destinations.masaiMara'),
      country: t('common.kenya'),
      image: hero2,
      description: t('destinations.masaiMaraDesc'),
    },
    {
      name: t('destinations.serengeti'),
      country: t('common.tanzania'),
      image: hero4,
      description: t('destinations.serengetiDesc'),
    },
    {
      name: t('destinations.amboseli'),
      country: t('common.kenya'),
      image: strip4,
      description: t('destinations.amboseliDesc'),
    },
    {
      name: t('destinations.dianiBeach'),
      country: t('common.kenya'),
      image: strip11,
      description: t('destinations.dianiBeachDesc'),
    },
    {
      name: t('destinations.ngorongoro'),
      country: t('common.tanzania'),
      image: strip9,
      description: t('destinations.ngorongoroDesc'),
    },
    {
      name: t('destinations.lakeNakuru'),
      country: t('common.kenya'),
      image: strip5,
      description: t('destinations.lakeNakuruDesc'),
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
            {t('destinations.tagline')}
          </p>
          <h2 className="section-title text-foreground mb-6">
            {t('destinations.title')}
          </h2>
          <p className="section-subtitle mx-auto">
            {t('destinations.subtitle')}
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/destinations/${dest.name.toLowerCase().replace(' ', '-')}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-safari text-white text-xs font-medium rounded-full mb-2">
                      {dest.country}
                    </span>
                    <h3 className="font-serif text-2xl text-white">{dest.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {dest.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/destinations" 
            className="inline-flex items-center gap-2 btn-safari"
          >
            {t('destinations.viewAll')}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
