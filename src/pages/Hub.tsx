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
    <div className="min-h-screen pt-32 pb-20 tech-grid font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-[#611CFC]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#611CFC]">
              Ecossistema Lumi
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1A1A2E] mb-6">
            LUMI <span className="opacity-20 text-stroke">HUB</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl font-bold leading-relaxed">
            Selecione o módulo ideal para a sua operação. Todos os sistemas integrados nativamente 
            pela <BrandLumi /> para uma experiência de gestão científica e sem atritos.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-slate-200">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-md text-xs font-black uppercase tracking-widest transition-all duration-200 border ${
                filter === cat 
                  ? 'bg-[#1A1A2E] text-white border-[#1A1A2E]' 
                  : 'bg-white text-slate-400 border-slate-200 hover:border-slate-400 font-bold'
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
                  <div className="bg-white p-8 group flex flex-col min-h-[420px] rounded-2xl border-2 border-[#1A1A2E] shadow-[8px_8px_0px_0px_rgba(26,26,46,0.05)] hover:shadow-[12px_12px_0px_0px_rgba(26,26,46,0.1)] transition-all duration-300">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border-2 border-[#1A1A2E]/5 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
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
                        className="w-full justify-between font-black border-2 border-[#1A1A2E] hover:bg-slate-50 rounded-lg h-12 uppercase tracking-tight"
                      >
                        TESTAR DEMO
                        <FlaskConical size={18} />
                      </Button>
                      <Button
                        asChild
                        className="w-full justify-between font-black bg-[#1A1A2E] hover:bg-[#611CFC] text-white rounded-lg h-12 uppercase tracking-tight transition-colors border-2 border-[#1A1A2E]"
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

        {/* Bundle Banner */}
        <div className="mt-20 p-12 bg-[#1A1A2E] rounded-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#611CFC]/20 blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-3">CONTRATE O <span className="text-[#611CFC]">COMBO</span></h2>
            <p className="text-slate-400 font-medium max-w-md">
              Economize até 40% contratando o pacote Starter ou Pro para toda sua empresa.
            </p>
          </div>
          <Link 
            to="/ativar" 
            className="relative z-10 px-10 py-4 bg-white text-[#1A1A2E] font-black uppercase tracking-widest rounded-md hover:bg-slate-100 transition-colors flex items-center gap-3"
          >
            Ver Planos
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
