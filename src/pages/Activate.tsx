import { Workflow, Headset, Target, Settings, Activity, Heart } from 'lucide-react';
import { CreativePricing, type PricingTier } from '@/components/ui/creative-pricing';
import { BrandLumi } from '@/components/BrandLumi';

const journeys: PricingTier[] = [
  {
    name: 'Lumi Flow',
    description: 'Fluxos complexos automáticos.',
    useCase: 'automação de fluxos.',
    icon: <Workflow size={28} />,
    color: '#611CFC',
    features: ['Processos internos', 'Webhooks ilimitados', 'Lógica condicional'],
    link: '/contact'
  },
  {
    name: 'Lumi Desk',
    description: 'Suporte inteligente 24/7.',
    useCase: 'atendimento e suporte.',
    icon: <Headset size={28} />,
    color: '#4ECDC4',
    features: ['Atendimento multi-canal', 'IA de treinamento canônico', 'Hand-over humano'],
    popular: true,
    link: '/contact'
  },
  {
    name: 'Lumi Sales',
    description: 'Qualificação de leads em real-time.',
    useCase: 'qualificação e conversão.',
    icon: <Target size={28} />,
    color: '#F24E1E',
    features: ['Scoring de leads', 'Check-out automatizado', 'Upsell inteligente'],
    link: '/contact'
  },
  {
    name: 'Lumi Ops',
    description: 'Gestão Inteligente de Backoffice.',
    useCase: 'operação e backoffice.',
    icon: <Settings size={28} />,
    color: '#5E6AD2',
    features: ['Logística automatizada', 'Gestão de estoque', 'Alertas preditivos'],
    link: '/contact'
  },
  {
    name: 'Lumi Pulse',
    description: 'Dados para inteligência preditiva.',
    useCase: 'insights e inteligência.',
    icon: <Activity size={28} />,
    color: '#FF7A59',
    features: ['BI integrado', 'Deep analysis', 'Previsão de churn'],
    link: '/contact'
  },
  {
    name: 'Lumi Care',
    description: 'Relacionamento de longo prazo.',
    useCase: 'relacionamento e retenção.',
    icon: <Heart size={28} />,
    color: '#635BFF',
    features: ['NPS automatizado', 'Réguas de relacionamento', 'Reativação de base'],
    link: '/contact'
  }
];

export default function Activate() {
  return (
    <div className="relative min-h-screen bg-[#4ECDC4] overflow-hidden">
      <CreativePricing 
        tag={<div className="flex items-center gap-2">Jornadas <BrandLumi /></div>}
        tiers={journeys} 
      />
    </div>
  );
}
