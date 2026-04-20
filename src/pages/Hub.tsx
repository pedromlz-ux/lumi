import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Workflow, 
  Headset, 
  Target, 
  Settings, 
  Activity, 
  Heart,
  ArrowRight,
  FlaskConical,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { BrandLumi } from '@/components/BrandLumi';
import { cn } from '@/lib/utils';
import TiltCard from '@/components/TiltCard';
import OrganicGraphics from '@/components/OrganicGraphics';

const CATEGORIES = ['Todos', 'Vendas', 'Atendimento', 'Backoffice', 'Analytics'];

const PRODUCTS = [
  {
    id: 'flow',
    name: 'Lumi Flow',
    category: 'Backoffice',
    description: 'Automação de workflows complexos e orquestração de processos internos.',
    icon: <Workflow className="w-6 h-6" />,
    color: '#611CFC'
  },
  {
    id: 'desk',
    name: 'Lumi Desk',
    category: 'Atendimento',
    description: 'Sistema de suporte inteligente com IA generativa disponível 24/7.',
    icon: <Headset className="w-6 h-6" />,
    color: '#4ECDC4'
  },
  {
    id: 'sales',
    name: 'Lumi Sales',
    category: 'Vendas',
    description: 'Captação, qualificação e conversão de leads em tempo real.',
    icon: <Target className="w-6 h-6" />,
    color: '#F24E1E'
  },
  {
    id: 'ops',
    name: 'Lumi Ops',
    category: 'Backoffice',
    description: 'Gestão Inteligente de Logística, Estoque e Operação de retaguarda.',
    icon: <Settings className="w-6 h-6" />,
    color: '#5E6AD2'
  },
  {
    id: 'pulse',
    name: 'Lumi Pulse',
    category: 'Analytics',
    description: 'Visualização de dados massivos e inteligência preditiva de negócios.',
    icon: <Activity className="w-6 h-6" />,
    color: '#FF7A59'
  },
  {
    id: 'care',
    name: 'Lumi Care',
    category: 'Atendimento',
    description: 'Gestão de relacionamento, NPS automatizado e sucesso do cliente.',
    icon: <Heart className="w-6 h-6" />,
    color: '#635BFF'
  }
];

export default function Hub() {
  const [filter, setFilter] = useState('Todos');

  const filteredProducts = useMemo(() => {
    if (filter === 'Todos') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen font-inter relative">
      {/* Header & Filters Section (White) */}
      <section className="pt-12 pb-3 bg-white border-b border-slate-100 relative z-20 overflow-hidden">
        {/* Decorative background element for the "hole" */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-3">
            {/* Left side: Content */}
            <div className="flex-1 w-full lg:max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-1 bg-[#611CFC]" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#611CFC]">
                  Ecossistema Lumi
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1A1A2E] mb-3">
                LUMI <span className="text-[#4ECDC4]">HUB</span>
              </h1>
              <p className="text-lg text-slate-500 font-bold leading-relaxed">
                Selecione o módulo ideal para a sua operação. Todos os sistemas integrados nativamente 
                pela <BrandLumi /> para uma experiência de gestão científica e sem atritos.
              </p>
            </div>

            {/* Right side: Interactive Mascot CTA (The "Hole") - Larger and more Centralized */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0 w-full lg:w-auto lg:min-w-[400px]"
            >
              <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center text-center gap-6 shadow-[30px_30px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#611CFC]/5 blur-3xl rounded-full -mr-20 -mt-20 group-hover:bg-[#611CFC]/10 transition-colors" />
                
                <div className="flex flex-col items-center gap-5 relative z-10">
                  <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 relative">
                    <div className="absolute inset-0 bg-[#611CFC]/5 blur-2xl rounded-full animate-pulse" />
                    <img 
                      src="/lumia-sentada.png" 
                      alt="Lumia" 
                      className="w-full h-full object-contain relative z-10 drop-shadow-2xl animate-float"
                    />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-2xl md:text-3xl font-black text-[#1A1A2E] tracking-tight">Ficou na dúvida?</h2>
                  </div>
                </div>

                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('toggle-lumia-chat'))}
                  className="w-full bg-[#611CFC] hover:bg-[#5316db] text-white px-10 py-7 h-auto rounded-2xl font-black text-sm tracking-tight shadow-xl shadow-[#611CFC]/20 transition-all hover:scale-[1.03] active:scale-95 leading-none relative z-10"
                >
                  Converse com a Lúmia
                </Button>
              </div>
            </motion.div>
          </div>



        </div>
      </section>

      {/* Grid Section (Teal) */}
      <section className="py-20 tech-grid relative overflow-hidden" style={{ backgroundColor: '#4ECDC4' }}>
        <OrganicGraphics className="opacity-20 absolute -top-40 -left-60 scale-150 -rotate-12 pointer-events-none" />
        <OrganicGraphics className="opacity-10 absolute top-1/2 -right-40 scale-125 rotate-45 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters - Moved to Teal Section */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-200 shadow-lg ${
                  filter === cat 
                    ? 'bg-[#1A1A2E] text-white' 
                    : 'bg-white/90 backdrop-blur-sm text-[#1A1A2E] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid - No background for gap because we're using TiltCard and custom rotations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative group",
                  index % 3 === 0 && "rotate-[-1.5deg]",
                  index % 3 === 1 && "rotate-[1.5deg]",
                  index % 3 === 2 && "rotate-[-1deg]"
                )}
              >
                <TiltCard tiltAmount={10} glowColor={product.color + '20'}>
                  <div className="bg-white p-8 group flex flex-col min-h-[420px] rounded-2xl border border-slate-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.02)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.04)] transition-all duration-300">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border border-slate-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: product.color + '15', color: product.color }}
                    >
                      {product.icon}
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#611CFC]">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-black text-[#1A1A2E] mt-1 group-hover:text-[#611CFC] transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-slate-500 text-sm font-bold leading-[1.6] mb-12 flex-grow italic">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3">
                      <Button
                        variant="outline"
                        className="w-full justify-between font-black border border-slate-200 hover:bg-slate-50 rounded-lg h-12 uppercase tracking-tight"
                      >
                        TESTAR DEMO
                        <FlaskConical size={18} />
                      </Button>
                      <Button
                        asChild
                        className="w-full justify-between font-black bg-[#1A1A2E] hover:bg-[#611CFC] text-white rounded-lg h-12 uppercase tracking-tight transition-colors border border-transparent"
                      >
                        <Link to="/ativar">
                          ASSINAR AGORA
                          <CreditCard size={18} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bundle Banner - LUMIA PURPLE REBRAND */}
        <div className="mt-20 p-8 md:p-14 bg-gradient-to-br from-[#611CFC] to-[#5316db] rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-[30px_30px_70px_-15px_rgba(97,28,252,0.4)] group">
          {/* Brand Atmosphere Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 blur-[100px] pointer-events-none group-hover:bg-white/30 transition-colors duration-700" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4ECDC4]/20 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              Oferta Orquestrada
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter">
              CONTRATE O <span className="text-[#4ECDC4]">COMBO</span>
            </h2>
            <p className="text-white font-bold text-base md:text-lg max-w-md leading-relaxed">
              Economize até <span className="text-[#4ECDC4] font-black">40%</span> contratando os pacotes Starter ou Pro para toda sua empresa.
            </p>
          </div>

          <Link 
            to="/ativar" 
            className="relative z-10 px-12 py-6 bg-white text-[#1A1A2E] font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-[#F3F3F3] transition-all flex items-center gap-4 shadow-2xl hover:scale-[1.05] active:scale-95 shadow-[#000000]/10"
          >
            Ver Planos de Orquestração
            <ArrowRight size={20} className="text-[#611CFC]" />
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
}
