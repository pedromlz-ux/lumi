import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { POSTS } from '@/data/posts';
import FloatingParticles from '@/components/FloatingParticles';
import { useEffect } from 'react';

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black text-[#1A1A2E] mb-4">Post não encontrado</h1>
        <p className="text-[#6B6B78] mb-8">O artigo que você está procurando não existe ou foi removido.</p>
        <Link to="/blog" className="text-[#611CFC] font-bold flex items-center gap-2">
          <ArrowLeft size={20} />
          Voltar para o Blog
        </Link>
      </div>
    );
  }

  const Icon = post.icon;

  return (
    <main className="relative min-h-screen bg-[#F9F9FB] pt-24 sm:pt-32 pb-24 overflow-hidden">
      <FloatingParticles count={15} colors={['#611CFC', '#4ECDC4']} className="opacity-20" />

      {/* Hero Header */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 mb-12 sm:mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-8"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#6B6B78] hover:text-[#611CFC] transition-colors group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Voltar ao Blog
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#611CFC]/5 flex items-center justify-center text-[#611CFC]">
              <Icon size={20} />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#611CFC]">
                {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1A2E] mb-8 leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-[#6B6B78]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#611CFC] to-[#A78BFA] flex items-center justify-center text-white text-xs">
                <User size={14} />
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Image */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mb-12 sm:mb-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#611CFC]/10"
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg lg:prose-xl prose-slate max-w-none 
            prose-headings:text-[#1A1A2E] prose-headings:font-black prose-headings:tracking-tight
            prose-p:text-[#6B6B78] prose-p:leading-relaxed prose-p:font-medium
            prose-strong:text-[#1A1A2E] prose-strong:font-bold
            prose-blockquote:border-[#611CFC] prose-blockquote:bg-[#611CFC]/5 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl
            prose-li:text-[#6B6B78] prose-li:font-medium
            font-inter"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer actions */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 pt-10 border-t border-slate-200 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
             <button
               onClick={() => navigate('/blog')}
               className="px-6 py-3 rounded-xl bg-white text-[#1A1A2E] font-bold text-sm shadow-sm hover:shadow-md transition-all border border-slate-100 flex items-center gap-2"
             >
               <ArrowLeft size={16} />
               Ver outros posts
             </button>
          </div>
          <button className="w-12 h-12 rounded-xl bg-[#611CFC] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-[#611CFC]/20">
            <Share2 size={20} />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
