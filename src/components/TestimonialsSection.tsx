import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'United Kingdom',
    rating: 5,
    textEn: 'An absolutely incredible experience! Gokyle Tours made our African dream come true. The attention to detail and personalized service exceeded all expectations.',
    textDe: 'Ein absolut unglaubliches Erlebnis! Gokyle Tours hat unseren afrikanischen Traum wahr werden lassen. Die Liebe zum Detail und der persönliche Service haben alle Erwartungen übertroffen.',
    tripEn: 'Masai Mara Safari',
    tripDe: 'Masai Mara Safari',
  },
  {
    name: 'Michael Schmidt',
    location: 'Germany',
    rating: 5,
    textEn: 'The best safari experience of our lives! The team was professional and our accommodation was first class. We will definitely come back.',
    textDe: 'Die beste Safari-Erfahrung unseres Lebens! Das Team war professionell und unsere Unterkunft war erstklassig. Wir werden definitiv wiederkommen.',
    tripEn: 'Tanzania Explorer',
    tripDe: 'Tansania Entdecker',
  },
  {
    name: 'Emily Chen',
    location: 'Australia',
    rating: 5,
    textEn: 'From the moment we landed, everything was perfectly organized. Seeing the Big Five was a dream come true. Highly recommend Gokyle Tours!',
    textDe: 'Von dem Moment an, als wir gelandet sind, war alles perfekt organisiert. Die Big Five zu sehen war ein Traum, der wahr wurde. Sehr zu empfehlen!',
    tripEn: 'Kenya & Beach Holiday',
    tripDe: 'Kenia & Strandurlaub',
  },
];

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-safari font-medium mb-4 tracking-wide uppercase text-sm">
            {t('testimonials.tagline')}
          </p>
          <h2 className="section-title mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-safari text-safari" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-primary-foreground/80 mb-6 leading-relaxed italic">
                "{language === 'de' ? testimonial.textDe : testimonial.textEn}"
              </p>
              
              {/* Author */}
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-primary-foreground/60">{testimonial.location}</p>
                <p className="text-sm text-safari mt-1">
                  {language === 'de' ? testimonial.tripDe : testimonial.tripEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
