import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentMethods from '@/components/PaymentMethods';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-serif text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-safari hover:underline">← {t('blog.backToBlog')}</Link>
        </div>
        <PaymentMethods />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={18} />
                {t('blog.backToBlog')}
              </Link>
              <span className="inline-block px-3 py-1 bg-safari text-white text-xs font-medium rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg prose-stone dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share & Navigation */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 text-safari hover:text-safari-dark transition-colors font-medium"
                >
                  <ArrowLeft size={18} />
                  {t('blog.backToAllArticles')}
                </Link>
                <a 
                  href={`https://wa.me/254742196613?text=I'm interested in: ${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-safari"
                >
                  {t('blog.bookExperience')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default BlogPost;
