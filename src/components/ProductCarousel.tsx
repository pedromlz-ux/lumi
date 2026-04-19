import { motion } from 'framer-motion';
import { 
  GitBranch, 
  MessageSquare, 
  TrendingUp, 
  Package, 
  BarChart3, 
  Heart
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    category: 'BACKOFFICE',
    name: 'Lumi Flow',
    description: 'Automação de workflows complexos e orquestração de processos ponta a ponta.',
    icon: GitBranch,
    iconColor: '#611CFC'
  },
  {
    id: 2,
    category: 'ATENDIMENTO',
    name: 'Lumi Desk',
    description: 'Sistema de suporte inteligente com triagem automática e resolução via IA.',
    icon: MessageSquare,
    iconColor: '#4ECDC4'
  },
  {
    id: 3,
    category: 'VENDAS',
    name: 'Lumi Sales',
    description: 'Captação, qualificação e conversão de leads em escala global.',
    icon: TrendingUp,
    iconColor: '#E91E63'
  },
  {
    id: 4,
    category: 'BACKOFFICE',
    name: 'Lumi Ops',
    description: 'Gestão Inteligente de Logística e operações críticas em tempo real.',
    icon: Package,
    iconColor: '#611CFC'
  },
  {
    id: 5,
    category: 'ANALYTICS',
    name: 'Lumi Pulse',
    description: 'Visualização de dados massivos e predição de tendências de mercado.',
    icon: BarChart3,
    iconColor: '#E91E63'
  },
  {
    id: 6,
    category: 'ATENDIMENTO',
    name: 'Lumi Care',
    description: 'Gestão de relacionamento profunda focada em retenção e satisfação.',
    icon: Heart,
    iconColor: '#611CFC'
  }
];

// Double the items for a seamless loop
const DUPLICATED_PRODUCTS = [...PRODUCTS, ...PRODUCTS];

export default function ProductCarousel() {
  return (
    <div className="w-full overflow-hidden py-16 sm:py-24" style={{ backgroundColor: '#4ECDC4' }}>
      <div className="relative flex whitespace-nowrap">
        <motion.div
          className="flex gap-6 px-3"
          animate={{
            x: [0, -100 * (PRODUCTS.length / DUPLICATED_PRODUCTS.length) + "%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
          whileHover={{ transition: { duration: 60, ease: "linear", repeat: Infinity } }}
        >
          {DUPLICATED_PRODUCTS.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={`${product.id}-${index}`}
                className="inline-block w-[300px] sm:w-[380px] h-[220px] sm:h-[260px] p-8 bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex-shrink-0"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                     <Icon size={32} color={product.iconColor} strokeWidth={2.5} />
                  </div>
                  
                  <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#611CFC] mb-2 uppercase">
                    {product.category}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-[#611CFC] mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-medium text-[#1A1A2E]/70 leading-relaxed text-wrap">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
