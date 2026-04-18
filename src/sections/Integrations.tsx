import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingParticles from '../components/FloatingParticles';
import { BrandLumi } from '@/components/BrandLumi';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: 'WhatsApp', color: '#25D366', icon: 'W' },
  { name: 'CRM', color: '#611CFC', icon: 'C' },
  { name: 'Slack', color: '#4A154B', icon: 'S' },
  { name: 'Notion', color: '#000000', icon: 'N' },
  { name: 'HubSpot', color: '#FF7A59', icon: 'H' },
  { name: 'Stripe', color: '#635BFF', icon: 'S' },
  { name: 'Zapier', color: '#FF4A00', icon: 'Z' },
  { name: 'Gmail', color: '#EA4335', icon: 'G' },
];

export default function Integrations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelector('.int-title'), { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 75%' },
    });

    const items = el.querySelectorAll('.int-item');
    gsap.fromTo(items, { opacity: 0, scale: 0.8, y: 20 }, {
      opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: el.querySelector('.int-grid'), start: 'top 85%' },
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section ref={sectionRef} id="integrações" className="relative w-full py-10 lg:py-12 overflow-hidden" style={{ backgroundColor: '#F9F9FB' }}>
      <FloatingParticles count={15} colors={['#611CFC', '#4ECDC4']} className="opacity-40" />

      {/* Giant decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[200px] font-extrabold opacity-[0.02] whitespace-nowrap" style={{ color: '#611CFC' }}>CONECTA</span>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <div className="int-title">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] mb-5 px-4 py-2 rounded-full border" style={{ color: '#4ECDC4', borderColor: 'rgba(78, 205, 196, 0.2)', backgroundColor: 'rgba(78, 205, 196, 0.06)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4]" />
            Integração
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-[-2px] mb-5" style={{ color: '#1A1A2E' }}>
            CONECTA COM TUDO.<br className="hidden sm:block" /> FUNCIONA SEM COMPLICAR.
          </h2>

          <p className="text-base max-w-lg mx-auto mb-12" style={{ color: '#6B6B78' }}>
            WhatsApp, CRM, ferramentas, processos. A <BrandLumi text="LUMI" className="text-lg" /> entra, organiza e faz acontecer.
          </p>
        </div>

        {/* Tool grid with hover effects */}
        <div className="int-grid flex flex-wrap justify-center gap-4 mb-12">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="int-item group relative flex items-center gap-3 px-6 py-4 rounded-2xl cursor-default transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(97,28,252,0.15)]"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 4px 16px rgba(97,28,252,0.06)',
                border: '1px solid #EBEBF0',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `radial-gradient(circle at 50% 0%, ${tool.color}15, transparent 70%)` }}
              />
              <div
                className="relative w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: tool.color, boxShadow: `0 4px 12px ${tool.color}40` }}
              >
                {tool.icon}
              </div>
              <span className="relative text-sm font-bold transition-colors group-hover:text-[#611CFC]" style={{ color: '#1A1A2E' }}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="int-title inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-4 group"
          style={{ color: '#611CFC' }}
        >
          Ver integrações
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
