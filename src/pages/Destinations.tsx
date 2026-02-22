import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentMethods from '@/components/PaymentMethods';
import { useLanguage } from '@/contexts/LanguageContext';
import hero1 from '@/assets/elephant.jpeg';
import hero2 from '@/assets/zebra.jpeg';
import hero3 from '@/assets/antelope.jpeg';
import hero4 from '@/assets/beach.jpeg';
import strip1 from '@/assets/strip-1.jpeg';
import strip2 from '@/assets/strip-2.jpeg';
import strip3 from '@/assets/strip-3.jpeg';
import strip4 from '@/assets/strip-4.jpeg';
import strip5 from '@/assets/strip-5.jpeg';
import strip6 from '@/assets/strip-6.jpeg';
import strip7 from '@/assets/strip-7.jpeg';
import strip8 from '@/assets/strip-8.jpeg';
import strip9 from '@/assets/strip-9.jpeg';
import strip10 from '@/assets/strip-10.jpeg';
import strip11 from '@/assets/strip-11.jpeg';
import strip12 from '@/assets/strip-12.jpeg';

const kenyaDestinations = [
  { name: 'Masai Mara', image: hero2, descEn: 'Home to the Great Migration and abundant wildlife year-round.', descDe: 'Heimat der Großen Migration und ganzjährig reichhaltiger Tierwelt.' },
  { name: 'Amboseli', image: strip4, descEn: 'Iconic views of Mount Kilimanjaro with elephant herds.', descDe: 'Ikonische Aussicht auf den Kilimandscharo mit Elefantenherden.' },
  { name: 'Diani Beach', image: strip11, descEn: 'Pristine white sand beaches and crystal-clear waters.', descDe: 'Unberührte weiße Sandstrände und kristallklares Wasser.' },
  { name: 'Lake Nakuru', image: strip5, descEn: 'Famous for flamingos and rhino conservation.', descDe: 'Berühmt für Flamingos und Nashornschutz.' },
  { name: 'Tsavo National Park', image: strip1, descEn: 'One of the oldest and largest parks in Kenya.', descDe: 'Einer der ältesten und größten Parks in Kenia.' },
  { name: 'Samburu', image: strip7, descEn: 'Remote wilderness home to unique wildlife species.', descDe: 'Abgelegene Wildnis mit einzigartigen Tierarten.' },
  { name: 'Lake Naivasha', image: strip3, descEn: 'Freshwater lake with hippos and over 400 bird species.', descDe: 'Süßwassersee mit Flusspferden und über 400 Vogelarten.' },
  { name: 'Lamu Island', image: strip8, descEn: 'UNESCO World Heritage Site with rich Swahili culture.', descDe: 'UNESCO-Weltkulturerbe mit reicher Swahili-Kultur.' },
  { name: 'Mount Kenya', image: strip2, descEn: "Africa's second-highest peak for adventure seekers.", descDe: 'Afrikas zweithöchster Gipfel für Abenteuerlustige.' },
  { name: "Hell's Gate", image: strip6, descEn: 'Dramatic landscapes perfect for cycling and hiking.', descDe: 'Dramatische Landschaften ideal zum Radfahren und Wandern.' },
  { name: 'Watamu', image: strip10, descEn: 'Marine national park with pristine coral reefs.', descDe: 'Meeresnationalpark mit unberührten Korallenriffen.' },
  { name: 'Mombasa', image: hero3, descEn: 'Historic coastal city with rich cultural heritage.', descDe: 'Historische Küstenstadt mit reichem kulturellen Erbe.' },
];

const tanzaniaDestinations = [
  { name: 'Serengeti', image: hero4, descEn: 'Endless plains hosting millions of wildebeest and zebras.', descDe: 'Endlose Ebenen mit Millionen von Gnus und Zebras.' },
  { name: 'Ngorongoro Crater', image: strip9, descEn: 'A UNESCO World Heritage Site with unique ecosystems.', descDe: 'UNESCO-Weltkulturerbe mit einzigartigen Ökosystemen.' },
  { name: 'Zanzibar', image: strip10, descEn: 'Spice island paradise with historic Stone Town.', descDe: 'Gewürzinsel-Paradies mit historischer Stone Town.' },
  { name: 'Mount Kilimanjaro', image: hero3, descEn: "Africa's highest peak and ultimate climbing challenge.", descDe: 'Afrikas höchster Gipfel und ultimative Kletterherausforderung.' },
  { name: 'Tarangire', image: strip12, descEn: 'Ancient baobabs and large elephant populations.', descDe: 'Uralte Baobabs und große Elefantenpopulationen.' },
  { name: 'Lake Manyara', image: hero1, descEn: 'Tree-climbing lions and stunning scenery.', descDe: 'Baumkletternde Löwen und atemberaubende Landschaft.' },
  { name: 'Selous Game Reserve', image: strip1, descEn: 'One of the largest protected areas in Africa.', descDe: 'Eines der größten Schutzgebiete Afrikas.' },
  { name: 'Ruaha National Park', image: strip7, descEn: 'Remote wilderness with excellent lion sightings.', descDe: 'Abgelegene Wildnis mit ausgezeichneten Löwensichtungen.' },
  { name: 'Arusha', image: strip2, descEn: 'Gateway city to northern Tanzania safari circuit.', descDe: 'Tor zu Nordtansanias Safari-Route.' },
  { name: 'Pemba Island', image: strip11, descEn: 'Pristine diving and authentic island culture.', descDe: 'Unberührtes Tauchen und authentische Inselkultur.' },
  { name: 'Mahale Mountains', image: strip8, descEn: 'Chimpanzee trekking on Lake Tanganyika shores.', descDe: 'Schimpansen-Trekking am Ufer des Tanganjikasees.' },
  { name: 'Mikumi National Park', image: strip4, descEn: 'Accessible park with diverse wildlife viewing.', descDe: 'Gut erreichbarer Park mit vielfältiger Tierbeobachtung.' },
];

const Destinations = () => {
  const { country } = useParams();
  const { t, language } = useLanguage();
  
  const showKenya = !country || country === 'kenya';
  const showTanzania = !country || country === 'tanzania';
  const isSingleCountry = country === 'kenya' || country === 'tanzania';

  const heroImage = country === 'tanzania' ? hero4 : hero2;
  const heroTitle = country === 'kenya' ? t('nav.kenya') : country === 'tanzania' ? t('nav.tanzania') : t('dest.heroTitleAll');
  const heroSubtitle = country === 'kenya' 
    ? t('dest.heroSubtitleKenya')
    : country === 'tanzania'
    ? t('dest.heroSubtitleTanzania')
    : t('dest.heroSubtitleAll');

  const getDescription = (dest: { descEn: string; descDe: string }) => {
    return language === 'de' ? dest.descDe : dest.descEn;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-safari-light font-medium mb-4 tracking-wide uppercase text-sm"
          >
            {t('dest.heroTagline')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            {heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Country Navigation (when viewing single country) */}
      {isSingleCountry && (
        <section className="py-6 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex justify-center gap-4">
              <Link 
                to="/destinations/kenya"
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  country === 'kenya' 
                    ? 'bg-safari text-white' 
                    : 'bg-card text-muted-foreground hover:bg-safari/10 hover:text-safari'
                }`}
              >
                {t('nav.kenya')}
              </Link>
              <Link 
                to="/destinations/tanzania"
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  country === 'tanzania' 
                    ? 'bg-safari text-white' 
                    : 'bg-card text-muted-foreground hover:bg-safari/10 hover:text-safari'
                }`}
              >
                {t('nav.tanzania')}
              </Link>
            </div>
          </div>
        </section>
      )}

      <main>
        {/* Kenya Section */}
        {showKenya && (
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between mb-12"
              >
                <div>
                  <p className="text-safari font-medium mb-2 tracking-wide uppercase text-sm">
                    {t('dest.destinations')}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl text-foreground">{t('nav.kenya')}</h2>
                  <p className="text-muted-foreground mt-2">{kenyaDestinations.length} {t('dest.incredibleDestinations')}</p>
                </div>
                {!isSingleCountry && (
                  <Link 
                    to="/destinations/kenya" 
                    className="hidden md:flex items-center gap-2 text-safari hover:text-safari-dark transition-colors font-medium"
                  >
                    {t('dest.viewAllKenya')}
                    <ArrowRight size={18} />
                  </Link>
                )}
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {kenyaDestinations.map((dest, index) => (
                  <motion.div
                    key={dest.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link 
                      to={`/destinations/kenya/${dest.name.toLowerCase().replace(/['\s]/g, '-')}`}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-3">
                        <img 
                          src={dest.image} 
                          alt={dest.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-1 text-safari-light text-xs mb-1">
                            <MapPin size={12} />
                            {t('nav.kenya')}
                          </div>
                          <h3 className="font-serif text-xl text-white">{dest.name}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors line-clamp-2">
                        {getDescription(dest)}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {!isSingleCountry && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8 text-center md:hidden"
                >
                  <Link to="/destinations/kenya" className="btn-safari inline-flex items-center gap-2">
                    {t('dest.viewAllKenya')}
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* Tanzania Section */}
        {showTanzania && (
          <section className={`py-24 ${showKenya ? 'bg-secondary/30' : 'bg-background'}`}>
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between mb-12"
              >
                <div>
                  <p className="text-safari font-medium mb-2 tracking-wide uppercase text-sm">
                    {t('dest.destinations')}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl text-foreground">{t('nav.tanzania')}</h2>
                  <p className="text-muted-foreground mt-2">{tanzaniaDestinations.length} {t('dest.incredibleDestinations')}</p>
                </div>
                {!isSingleCountry && (
                  <Link 
                    to="/destinations/tanzania" 
                    className="hidden md:flex items-center gap-2 text-safari hover:text-safari-dark transition-colors font-medium"
                  >
                    {t('dest.viewAllTanzania')}
                    <ArrowRight size={18} />
                  </Link>
                )}
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tanzaniaDestinations.map((dest, index) => (
                  <motion.div
                    key={dest.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link 
                      to={`/destinations/tanzania/${dest.name.toLowerCase().replace(/['\s]/g, '-')}`}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-3">
                        <img 
                          src={dest.image} 
                          alt={dest.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-1 text-safari-light text-xs mb-1">
                            <MapPin size={12} />
                            {t('nav.tanzania')}
                          </div>
                          <h3 className="font-serif text-xl text-white">{dest.name}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors line-clamp-2">
                        {getDescription(dest)}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {!isSingleCountry && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8 text-center md:hidden"
                >
                  <Link to="/destinations/tanzania" className="btn-safari inline-flex items-center gap-2">
                    {t('dest.viewAllTanzania')}
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* Stats Section */}
        <section className={`py-24 ${showTanzania && !showKenya ? 'bg-secondary/30' : 'bg-background'}`}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
                {t('dest.planJourney')}
              </p>
              <h2 className="section-title text-foreground mb-6">
                {t('dest.exploreRegion')}
              </h2>
              <p className="section-subtitle mx-auto">
                {t('dest.exploreRegionDesc')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="text-4xl font-serif text-safari mb-2">{kenyaDestinations.length + tanzaniaDestinations.length}+</div>
                <p className="text-muted-foreground">{t('dest.destinationsInKenya')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="text-4xl font-serif text-safari mb-2">50+</div>
                <p className="text-muted-foreground">{t('dest.nationalParks')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="text-4xl font-serif text-safari mb-2">100+</div>
                <p className="text-muted-foreground">{t('dest.curatedExperiences')}</p>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Destinations;
