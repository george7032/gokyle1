import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Compass, Users, Shield, Award, Heart, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PaymentMethods from '@/components/PaymentMethods';
import hero1 from '@/assets/strip-14.jpeg';
import strip3 from '@/assets/strip-14.jpeg';
import directorPhoto from '@/assets/strip-3.jpeg';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('about.value.passion'),
      description: t('about.value.passionDesc'),
    },
    {
      icon: Shield,
      title: t('about.value.safety'),
      description: t('about.value.safetyDesc'),
    },
    {
      icon: Users,
      title: t('about.value.personal'),
      description: t('about.value.personalDesc'),
    },
    {
      icon: Award,
      title: t('about.value.excellence'),
      description: t('about.value.excellenceDesc'),
    },
    {
      icon: Globe,
      title: t('about.value.sustainability'),
      description: t('about.value.sustainabilityDesc'),
    },
    {
      icon: Compass,
      title: t('about.value.adventure'),
      description: t('about.value.adventureDesc'),
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img src={hero1} alt="About Gokyle Tours" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
                {t('about.heroTagline')}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
                {t('about.heroTitle')}
              </h1>
              <p className="text-xl text-white/80">
                {t('about.heroSubtitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-foreground mb-6">
                {t('about.mainTitle')}
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">GoKYLE Tours and Safaris</strong> {t('about.mainP1').replace('GoKYLE Tours and Safaris is an adventurous Kenya-based tour company operating from the stunning coastal paradise of Diani Beach. We are more than just a travel company—we are your gateway to experiencing the raw beauty, rich culture, and incredible wildlife that make East Africa one of the world\'s most captivating destinations.', '').trim() || t('about.mainP1').substring(t('about.mainP1').indexOf('is an'))}
                </p>
                <p>
                  {t('about.mainP2')}
                </p>
                <p>
                  {t('about.mainP3')}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={strip3} 
                alt="Local culture"
                loading="lazy"
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-safari text-white p-8 rounded-xl shadow-xl">
                <p className="text-4xl font-serif mb-1">10+</p>
                <p className="text-sm opacity-80">{t('about.yearsExcellence')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
              {t('about.valuesTagline')}
            </p>
            <h2 className="section-title text-foreground mb-6">{t('about.valuesTitle')}</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card rounded-xl border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-safari/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-safari" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
                {t('about.directorTagline')}
              </p>
              <h2 className="section-title text-foreground mb-12">{t('about.directorTitle')}</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Director Photo */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={directorPhoto} 
                    alt="Lucky Katama Katoya - Director of Gokyle Tours & Safaris"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-safari text-white px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-medium">{t('about.founderDirector')}</p>
                </div>
              </div>
              
              {/* Director Info */}
              <div>
                <h3 className="font-serif text-3xl text-foreground mb-2">Lucky Katama Katoya</h3>
                <p className="text-safari font-medium mb-6">{t('about.founderDirector')}</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t('about.directorBio1')}</p>
                  <p>{t('about.directorBio2')}</p>
                  <p>{t('about.directorBio3')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default About;
