import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Users, MapPin, Star, Check, Plane, Car, Compass } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentMethods from '@/components/PaymentMethods';
import { useLanguage } from '@/contexts/LanguageContext';
import { safariPackages, safariTypes, SafariPackage } from '@/data/safariPackages';
import hero1 from '@/assets/strip-14.jpeg';

const Safaris = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useLanguage();
  const navigate = useNavigate();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'excursion':
        return <Compass size={14} />;
      case 'jeep-safari':
        return <Car size={14} />;
      case 'fly-in-safari':
        return <Plane size={14} />;
      default:
        return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'excursion':
        return t('category.excursion');
      case 'jeep-safari':
        return t('category.jeepSafari');
      case 'fly-in-safari':
        return t('category.flyInSafari');
      default:
        return '';
    }
  };

  const featuredSafaris = safariPackages.filter(s => s.featured);
  
  const filteredSafaris = activeCategory === 'all' 
    ? safariPackages 
    : safariPackages.filter(s => s.category === activeCategory);

  const handleBookNow = (safari: SafariPackage) => {
    navigate(`/booking?package=${encodeURIComponent(safari.title)}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-safari-light font-medium mb-4 tracking-wide uppercase text-sm"
          >
            {t('safaris.heroTagline')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            {t('safaris.heroTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            {t('safaris.heroSubtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact" className="btn-safari text-lg px-8 py-4">
              {t('safaris.planSafari')}
            </Link>
          </motion.div>
        </div>
      </section>

      <main>
        {/* Featured Safaris */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
                {t('safaris.featuredTagline')}
              </p>
              <h2 className="section-title text-foreground mb-6">
                {t('safaris.featuredTitle')}
              </h2>
              <p className="section-subtitle mx-auto">
                {t('safaris.featuredSubtitle')}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredSafaris.slice(0, 6).map((safari, index) => (
                <motion.div
                  key={safari.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-border card-hover">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={safari.image} 
                        alt={safari.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-safari text-white text-xs font-medium rounded-full">
                          {t('safaris.featured')}
                        </span>
                        <span className="px-3 py-1 bg-foreground/60 backdrop-blur-sm text-background text-xs font-medium rounded-full flex items-center gap-1">
                          {getCategoryIcon(safari.category)}
                          {getCategoryLabel(safari.category)}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{safari.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {safari.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {safari.groupSize}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-safari transition-colors">
                        {safari.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                        <MapPin size={14} />
                        {safari.location}
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{safari.description}</p>
                      <ul className="grid grid-cols-2 gap-2 mb-6">
                        {safari.highlights.slice(0, 4).map((highlight) => (
                          <li key={highlight} className="flex items-center gap-1 text-sm text-foreground">
                            <Check size={14} className="text-safari flex-shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <div className="text-2xl font-serif text-safari">{safari.price}</div>
                          {safari.priceNote && (
                            <div className="text-xs text-muted-foreground">{safari.priceNote}</div>
                          )}
                        </div>
                        <button 
                          onClick={() => handleBookNow(safari)}
                          className="btn-safari text-sm"
                        >
                          {t('safaris.bookNow')}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safari Types */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
                {t('safaris.styleTagline')}
              </p>
              <h2 className="section-title text-foreground mb-6">
                {t('safaris.styleTitle')}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safariTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4]"
                >
                  <img 
                    src={type.image} 
                    alt={type.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-white mb-2">{type.title}</h3>
                    <p className="text-white/80 text-sm">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Safaris with Filter */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
                {t('safaris.allTagline')}
              </p>
              <h2 className="section-title text-foreground mb-6">
                {t('safaris.allTitle')}
              </h2>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { key: 'all', label: t('safaris.allPackages') },
                { key: 'excursion', label: t('safaris.dayExcursions') },
                { key: 'jeep-safari', label: t('safaris.jeepSafaris') },
                { key: 'fly-in-safari', label: t('safaris.flyInSafaris') },
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === cat.key
                      ? 'bg-safari text-white'
                      : 'bg-secondary text-foreground hover:bg-safari/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSafaris.map((safari, index) => (
                <motion.div
                  key={safari.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-card rounded-xl overflow-hidden border border-border card-hover">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={safari.image} 
                        alt={safari.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-foreground/60 backdrop-blur-sm text-background text-xs font-medium rounded-full flex items-center gap-1">
                          {getCategoryIcon(safari.category)}
                          {getCategoryLabel(safari.category)}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-medium">{safari.rating}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {safari.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {safari.location}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-safari transition-colors">
                        {safari.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{safari.description}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div>
                          <div className="text-lg font-serif text-safari">{safari.price}</div>
                          {safari.priceNote && (
                            <div className="text-xs text-muted-foreground">{safari.priceNote}</div>
                          )}
                        </div>
                        <button 
                          onClick={() => handleBookNow(safari)}
                          className="btn-safari text-xs py-2 px-4"
                        >
                          {t('safaris.bookNow')}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-serif text-3xl text-foreground text-center mb-8">{t('safaris.importantInfo')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-3">{t('safaris.bookingPricing')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t('safaris.bookingInfo1')}</li>
                    <li>• {t('safaris.bookingInfo2')}</li>
                    <li>• {t('safaris.bookingInfo3')}</li>
                    <li>• {t('safaris.bookingInfo4')}</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-3">{t('safaris.paymentCancellation')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t('safaris.paymentInfo1')}</li>
                    <li>• {t('safaris.paymentInfo2')}</li>
                    <li>• {t('safaris.paymentInfo3')}</li>
                    <li>• {t('safaris.paymentInfo4')}</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Book With Us */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl mb-6">{t('safaris.whyBook')}</h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                {t('safaris.whyBookSubtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: '🦁', title: t('safaris.expertGuides'), desc: t('safaris.expertGuidesDesc') },
                { icon: '💰', title: t('safaris.bestPrices'), desc: t('safaris.bestPricesDesc') },
                { icon: '📅', title: t('safaris.flexibleBooking'), desc: t('safaris.flexibleBookingDesc') },
                { icon: '🛡️', title: t('safaris.support'), desc: t('safaris.supportDesc') },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Safari CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
                {t('safaris.customTagline')}
              </p>
              <h2 className="section-title text-foreground mb-6">
                {t('safaris.customTitle')}
              </h2>
              <p className="section-subtitle mx-auto mb-10">
                {t('safaris.customSubtitle')}
              </p>
              <Link to="/contact" className="btn-safari text-lg px-10 py-4">
                {t('safaris.requestCustom')}
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Safaris;
