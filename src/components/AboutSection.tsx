import { motion } from 'framer-motion';
import { Compass, Users, Shield, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Compass,
      title: t('about.feature.guides'),
      description: t('about.feature.guidesDesc'),
    },
    {
      icon: Users,
      title: t('about.feature.personalized'),
      description: t('about.feature.personalizedDesc'),
    },
    {
      icon: Shield,
      title: t('about.feature.safety'),
      description: t('about.feature.safetyDesc'),
    },
    {
      icon: Clock,
      title: t('about.feature.support'),
      description: t('about.feature.supportDesc'),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
              {t('about.tagline')}
            </p>
            <h2 className="section-title text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.content1')}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('about.content2')}
            </p>
            <a 
              href="/about" 
              className="inline-flex items-center gap-2 text-safari font-medium hover:gap-3 transition-all"
            >
              {t('about.learnMore')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-safari/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-safari" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
