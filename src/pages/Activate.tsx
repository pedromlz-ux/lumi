import { ShieldCheck, Zap, Globe, Building2 } from 'lucide-react';
import { BrandLumi } from '@/components/BrandLumi';
import OrganicGraphics from '@/components/OrganicGraphics';
import SquishyPricing from '@/components/ui/squishy-pricing';

const TIERS = [
  {
    name: 'Individual',
    price: '147',
    description: 'Para quem quer começar com precisão cirúrgica.',
    features: [
      '1 Sistema <span className="font-lumi">lumi</span> a escolha',
      'Suporte via ticket',
      'Integrações via Webhook',
      'Até 5.000 ações/mês'
    ],
    cta: 'Assinar Plano',
    icon: <Zap className="w-5 h-5" />,
    popular: false
  },
  {
    name: 'Bundle Starter',
    price: '297',
    description: 'Até 3 sistemas integrados para escalar seu negócio.',
    features: [
      'Escolha 3 Sistemas <span className="font-lumi">lumi</span>',
      'Suporte prioritário',
      'Time de implementação',
      'Até 25.000 ações/mês',
      'Treinamento canônico'
    ],
    cta: 'Assinar Combo',
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    popular: true
  },
  {
    name: 'Bundle Pro',
    price: '497',
    description: 'A força total da <span className="font-lumi">lumi</span> em até 5 sistemas unificados.',
    features: [
      'Escolha 5 Sistemas <span className="font-lumi">lumi</span>',
      'Consultoria estratégica mensal',
      'API Access ilimitado',
      'Até 100.000 ações/mês',
      'White-label básico'
    ],
    cta: 'Assinar Pro',
    icon: <Globe className="w-5 h-5" />,
    popular: false
  },
  {
    name: 'Enterprise',
    price: 'Sob Consulta',
    description: 'Estratégia massiva para grandes operações.',
    features: [
      'Todos os Sistemas <span className="font-lumi">lumi</span>',
      'Dedicated Success Manager',
      'SLA de 99.9% em contrato',
      'Ações ilimitadas',
      'On-premise deployment opcional'
    ],
    cta: 'Falar com Especialista',
    icon: <Building2 className="w-5 h-5" />,
    popular: false
  }
];

export default function Activate() {
  return (
    <div className="min-h-screen pt-32 pb-24 tech-grid font-inter relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <OrganicGraphics className="opacity-20 fixed -top-40 -left-60 scale-150 -rotate-12 pointer-events-none" />
      <OrganicGraphics className="opacity-10 fixed top-1/2 -right-40 scale-125 rotate-45 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white underline-offset-4 mb-6 bg-[#611CFC] px-5 py-2.5 border border-[#611CFC] rounded-full shadow-lg shadow-[#611CFC]/20">
            Tabelas de Ativação
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1A1A2E] mb-8">
            PLANOS <span className="text-[#4ECDC4]">ESCALÁVEIS</span>
          </h1>
          <p className="text-[#1A1A2E]/70 max-w-2xl mx-auto font-bold leading-relaxed">
            Estrutura de preços unificada para impulsionar sua operação com a inteligência da <BrandLumi />. 
            Contrate por sistema ou aproveite os descontos progressivos dos nossos bundles.
          </p>
        </div>

        {/* Pricing Grid */}
        <SquishyPricing tiers={TIERS} />

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] opacity-60">
            Todos os preços em Reais (BRL). Cobrança mensal. Cancelamento a qualquer momento.
          </p>
        </div>
      </div>
    </div>
  );
}
