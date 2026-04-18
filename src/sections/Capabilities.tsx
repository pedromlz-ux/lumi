import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../components/TiltCard';
import FloatingParticles from '../components/FloatingParticles';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Resposta automática',
    desc: 'Cliente chamou? Já foi atendido.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87214 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#611CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: '#EDE6FE',
    glow: 'rgba(97, 28, 252, 0.1)',
  },
  {
    title: 'Vendas no piloto automático',
    desc: 'A conversa anda. O cliente decide.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="#4ECDC4" strokeWidth="2"/>
      </svg>
    ),
    accent: '#D2F5F0',
    glow: 'rgba(78, 205, 196, 0.1)',
  },
  {
    title: 'Processos organizados',
    desc: 'Tudo no lugar. Sem esforço.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#611CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: '#EDE6FE',
    glow: 'rgba(97, 28, 252, 0.1)',
  },
];

export default function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll('.cap-header'), { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 75%' },
    });

    const cards = el.querySelectorAll('.cap-card');
    gsap.fromTo(cards, { opacity: 0, y: 50, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'back.out(1.2)',
      scrollTrigger: { trigger: el.querySelector('.cap-grid'), start: 'top 80%' },
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section ref={sectionRef} id="capacidades" className="relative w-full py-16 lg:py-20 overflow-hidden" style={{ backgroundColor: '#F9F9FB' }}>
      <FloatingParticles count={12} colors={['#611CFC', '#4ECDC4']} className="opacity-30" />

      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #611CFC 0%, transparent 70%)' }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="cap-header inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] mb-5 px-4 py-2 rounded-full border" style={{ color: '#611CFC', borderColor: 'rgba(97, 28, 252, 0.15)', backgroundColor: 'rgba(97, 28, 252, 0.05)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#611CFC]" />
            Capacidades
          </span>
          <h2 className="cap-header text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-[-2px]" style={{ color: '#1A1A2E' }}>
            Onde seu tempo volta pra voc&ecirc;
          </h2>
        </div>

        <div className="cap-grid grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {capabilities.map((c) => (
            <TiltCard key={c.title} tiltAmount={8} glowColor={c.glow}>
              <div
                className="cap-card group relative p-8 rounded-3xl h-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(97,28,252,0.1)]"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0px 8px 32px rgba(97,28,252,0.06)',
                  border: '1px solid #EBEBF0',
                }}
              >
                {/* Subtle top gradient on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)` }}
                />

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: c.accent }}>
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A2E' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B78' }}>{c.desc}</p>

                {/* Bottom arrow that appears on hover */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ color: '#611CFC' }}>
                  <span>Saiba mais</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
