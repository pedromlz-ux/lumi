import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Counter from '../components/Counter';
import TiltCard from '../components/TiltCard';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    value: '10x',
    label: 'mais rápido',
    desc: 'Respostas na hora, sempre.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 13L14 16L22 6" stroke="#611CFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 6H23V11" stroke="#611CFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: '#EDE6FE',
  },
  {
    value: '-80%',
    label: 'no operacional',
    desc: 'Menos tarefa manual, mais tempo livre.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 14L11.5 19.5L22 8" stroke="#4ECDC4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: '#D2F5F0',
  },
  {
    value: '24h',
    label: 'ativo',
    desc: 'Seu negócio rodando mesmo offline.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#611CFC" strokeWidth="2.5"/>
        <path d="M14 9V14L17.5 16.5" stroke="#611CFC" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    bg: '#EDE6FE',
  },
];

export default function Metrics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.metric-card');
    if (cards) {
      gsap.fromTo(cards, { opacity: 0, y: 50, rotateX: 10 }, {
        opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 lg:py-20" style={{ backgroundColor: '#F9F9FB' }}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {metrics.map((m) => (
            <TiltCard key={m.value} tiltAmount={8} glowColor="rgba(97, 28, 252, 0.12)">
              <div
                className="metric-card relative p-8 rounded-3xl h-full transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(97,28,252,0.1)]"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0px 8px 32px rgba(97,28,252,0.06)',
                  border: '1px solid #EBEBF0',
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110" style={{ backgroundColor: m.bg }}>
                  {m.icon}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <Counter
                    target={m.value}
                    className="text-5xl font-extrabold tracking-[-2px]"
                    style={{ color: '#1A1A2E' }}
                  />
                  <span className="text-xl font-bold" style={{ color: '#611CFC' }}>{m.label}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B78' }}>{m.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
