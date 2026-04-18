import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import OrganicGraphics from '../components/OrganicGraphics';
import FloatingParticles from '../components/FloatingParticles';

const POSTS = [
  {
    id: 1,
    title: "Como a IA está transformando o cenário de vendas em 2024",
    excerpt: "Descubra como empresas líderes estão usando inteligência artificial para triplicar suas taxas de conversão.",
    category: "Vendas",
    date: "18 Abr, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "5 processos que você deve automatizar hoje para ganhar tempo",
    excerpt: "A automação não é mais um luxo. Conheça as tarefas que estão drenando a energia da sua equipe lucrativa.",
    category: "Automação",
    date: "15 Abr, 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "O futuro do suporte: Chatbots que realmente resolvem problemas",
    excerpt: "Chega de respostas automáticas genéricas. Veja como a nova geração de IAs entende o contexto do cliente.",
    category: "Inteligência Artificial",
    date: "12 Abr, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Blog() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <FloatingParticles count={20} colors={['#611CFC', '#4ECDC4', '#A78BFA']} className="opacity-30" />
      <OrganicGraphics className="opacity-15 fixed -top-20 -left-20 scale-150 -rotate-12" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2pt] mb-6 px-4 py-2 rounded-full text-[#611CFC] bg-[#611CFC]/5 border border-[#611CFC]/10"
          >
            <BookOpen size={14} />
            LUMI Insights
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-extrabold tracking-tight text-[#1A1A2E] mb-8 leading-[1.05]"
          >
            Conteúdo para quem busca <span className="text-gradient">escala</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#6B6B78] max-w-xl"
          >
            Exploramos as fronteiras da automação inteligente e estratégias avançadas para transformar sua operação em uma máquina de vendas.
          </motion.p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['Todos', 'Vendas', 'IA', 'Automação', 'Negócios'].map((cat, i) => (
            <button 
              key={cat} 
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${i === 0 ? 'bg-[#611CFC] text-white' : 'bg-white text-[#6B6B78] hover:bg-[#611CFC]/5 hover:text-[#611CFC] shadow-sm border border-transparent hover:border-[#611CFC]/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group bg-white/70 backdrop-blur-xl rounded-[32px] overflow-hidden border border-white shadow-[0_20px_50px_rgba(97,28,252,0.05)] hover:shadow-[0_40px_80px_rgba(97,28,252,0.12)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#1A1A2E] shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[10px] font-bold text-[#6B6B78] uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4 leading-tight group-hover:text-[#611CFC] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-[#6B6B78] mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Link 
                    to={`#`} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#611CFC] group/btn"
                  >
                    Ler artigo completo
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
