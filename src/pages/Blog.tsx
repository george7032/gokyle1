import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import PaymentMethods from '@/components/PaymentMethods';
import Footer from '@/components/Footer';
import { blogPosts, categories } from '@/data/blogPosts';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { t, language } = useLanguage();
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryLabel = (category: string) => {
    if (category === 'All') return t('blog.allCategory');
    return category;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogPosts[0].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-safari-light font-medium mb-4 tracking-wide uppercase text-sm"
          >
            {t('blog.heroTagline')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            {t('blog.heroTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            {t('blog.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      <main>
        {/* Featured Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl text-foreground mb-8"
            >
              {t('blog.featuredArticles')}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-safari text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-safari-light transition-colors">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-secondary/30 sticky top-20 z-40">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-safari text-white'
                      : 'bg-card text-muted-foreground hover:bg-safari/10 hover:text-safari'
                  }`}
                >
                  {getCategoryLabel(category)}
                  {category !== 'All' && (
                    <span className="ml-1.5 text-xs opacity-70">
                      ({blogPosts.filter(p => p.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-safari/90 text-white text-xs font-medium rounded">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-safari transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-safari font-medium text-sm group-hover:gap-2 transition-all">
                      {t('blog.readMore')}
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl mb-4">{t('blog.stayUpdated')}</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                {t('blog.newsletterDesc')}
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('blog.enterEmail')}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-safari"
                />
                <button type="submit" className="btn-safari whitespace-nowrap">
                  {t('blog.subscribe')}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Blog;
