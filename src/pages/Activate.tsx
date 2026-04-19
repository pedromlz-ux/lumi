import { Check, ArrowRight, ShieldCheck, Zap, Globe, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { BrandLumi } from '@/components/BrandLumi';
import OrganicGraphics from '@/components/OrganicGraphics';

const TIERS = [
  {
    name: 'Individual',
    price: '147',
    description: 'Para quem quer começar com precisão cirúrgica.',
    features: [
      '1 Sistema Lumi a escolha',
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
      'Escolha 3 Sistemas Lumi',
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
    description: 'A força total da Lumi em até 5 sistemas unificados.',
    features: [
      'Escolha 5 Sistemas Lumi',
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
      'Todos os Sistemas Lumi',
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
    <div className="min-h-screen pt-32 pb-24 tech-grid font-inter relative overflow-hidden" style={{ backgroundColor: '#4ECDC4' }}>
      <OrganicGraphics className="opacity-20 fixed -top-40 -left-60 scale-150 -rotate-12 pointer-events-none" />
      <OrganicGraphics className="opacity-10 fixed top-1/2 -right-40 scale-125 rotate-45 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white underline-offset-4 mb-6 bg-[#1A1A2E]/10 px-4 py-2 border border-[#1A1A2E]/20 rounded-sm">
            Tabelas de Ativação
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1A1A2E] mb-8">
            PLANOS <span className="opacity-20 text-stroke">ESCALÁVEIS</span>
          </h1>
          <p className="text-[#1A1A2E]/70 max-w-2xl mx-auto font-bold leading-relaxed">
            Estrutura de preços unificada para impulsionar sua operação com a inteligência da <BrandLumi />. 
            Contrate por sistema ou aproveite os descontos progressivos dos nossos bundles.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TIERS.map((tier) => (
            <div 
              key={tier.name}
              className={`flex flex-col p-8 border-2 transition-all duration-300 relative rounded-2xl ${
                tier.popular 
                  ? 'bg-[#1A1A2E] border-[#1A1A2E] text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white border-[#1A1A2E]/5 text-slate-800 hover:border-[#1A1A2E]/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#611CFC] text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-sm">
                  Mais Recomendado
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <div className={`w-10 h-10 flex items-center justify-center border-2 rounded-lg ${
                  tier.popular ? 'border-white/10 bg-white/5' : 'border-[#1A1A2E]/5 bg-slate-50'
                }`}>
                  {tier.icon}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${
                  tier.popular ? 'text-slate-400' : 'text-slate-300'
                }`}>
                  {tier.name}
                </span>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {tier.price !== 'Sob Consulta' && <span className="text-xl font-black opacity-30">R$</span>}
                  <span className="text-5xl font-black tracking-tighter">{tier.price}</span>
                  {tier.price !== 'Sob Consulta' && <span className="text-sm font-black opacity-30">/mês</span>}
                </div>
                <p className={`text-sm mt-4 leading-relaxed font-bold italic ${
                  tier.popular ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {tier.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                      tier.popular ? 'text-[#4ECDC4]' : 'text-[#611CFC]'
                    }`} strokeWidth={3} />
                    <span className="text-[11px] font-black leading-tight opacity-70 uppercase tracking-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild={tier.cta !== 'Falar com Especialista'}
                className={`w-full py-7 font-black uppercase tracking-widest rounded-xl transition-all duration-200 border-2 ${
                  tier.popular 
                    ? 'bg-[#611CFC] hover:bg-[#5316db] text-white border-[#611CFC]' 
                    : 'bg-[#1A1A2E] hover:bg-slate-800 text-white border-[#1A1A2E]'
                }`}
              >
                {tier.cta === 'Falar com Especialista' ? (
                  <a href="/contact" className="flex items-center justify-between w-full h-full px-5">
                    {tier.cta}
                    <ArrowRight size={18} />
                  </a>
                ) : (
                  <Link to="/contact" className="flex items-center justify-between w-full h-full px-5">
                    {tier.cta}
                    <ArrowRight size={18} />
                  </Link>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            Todos os preços em Reais (BRL). Cobrança mensal. Cancelamento a qualquer momento.
          </p>
        </div>
      </div>
    </div>
  );
}
