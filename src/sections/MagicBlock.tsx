import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingParticles from '../components/FloatingParticles';
import { BrandLumi } from '@/components/BrandLumi';

gsap.registerPlugin(ScrollTrigger);

export default function MagicBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Text items
    gsap.fromTo(el.querySelectorAll('.magic-item'), { opacity: 0, x: 40 }, {
      opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 70%' },
    });

    // Image with parallax
    const img = imgRef.current;
    if (img) {
      gsap.fromTo(img, { opacity: 0, scale: 0.9, y: 40 }, {
        opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      });

      // Subtle parallax on scroll
      gsap.to(img, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  const items = [
    { text: 'Ela responde.', sub: 'Toda mensagem, toda hora, sem demora.' },
    { text: 'Ela organiza.', sub: 'Seus processos, seus dados, seu tempo.' },
    { text: 'Ela vende.', sub: 'Do primeiro oi ao pagamento confirmado.' },
  ];

  return (
    <section ref={sectionRef} id="como-funciona" className="relative w-full py-16 lg:py-20 overflow-hidden" style={{ backgroundColor: '#F9F9FB' }}>
      <FloatingParticles count={15} colors={['#611CFC', '#A78BFA', '#4ECDC4']} className="opacity-25" />

      {/* Large decorative gradient */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-3xl pointer-events-none -translate-y-1/2" style={{ background: 'radial-gradient(circle, #611CFC 0%, transparent 60%)' }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left - Image with parallax */}
          <div ref={imgRef} className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src="/magic-visual.jpg"
                alt="Visualização mágica da LUMI trabalhando"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(97,28,252,0.1) 100%)' }} />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl animate-float opacity-60" style={{ background: 'linear-gradient(135deg, #611CFC20, #4ECDC420)', border: '1px solid rgba(97,28,252,0.1)' }} />
            <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl animate-float-reverse opacity-40" style={{ background: 'linear-gradient(135deg, #4ECDC420, #611CFC20)', border: '1px solid rgba(78,205,196,0.1)', animationDelay: '-2s' }} />
          </div>

          {/* Right - Copy */}
          <div className="order-1 lg:order-2">
            <span className="magic-item inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] mb-5 px-4 py-2 rounded-full border" style={{ color: '#4ECDC4', borderColor: 'rgba(78, 205, 196, 0.2)', backgroundColor: 'rgba(78, 205, 196, 0.06)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4]" />
              Diferencial
            </span>

            <h2 className="magic-item text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-[-2px] mb-8" style={{ color: '#1A1A2E' }}>
              PARECE MÁGICA. MAS É SÓ A{' '}
              <BrandLumi text="lumi" useHeroStyles />{' ' }
              FUNCIONANDO.
            </h2>

            <div className="space-y-5 mb-8">
              {items.map((item, i) => (
                <div key={i} className="magic-item flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#EDE6FE' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="#611CFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg transition-colors group-hover:text-[#611CFC]" style={{ color: '#1A1A2E' }}>{item.text}</p>
                    <p className="text-sm" style={{ color: '#6B6B78' }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="magic-item text-2xl font-bold animate-pulse" style={{ color: '#611CFC' }}>
              Você respira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
