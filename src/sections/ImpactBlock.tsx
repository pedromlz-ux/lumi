import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  { before: '\u201CEu passo o dia inteiro respondendo mensagem\u201D', after: '\u2192 n\u00e3o mais' },
  { before: '\u201CPerco venda porque demoro pra atender\u201D', after: '\u2192 n\u00e3o mais' },
  { before: '\u201CT\u00e1 tudo bagun\u00e7ado\u201D', after: '\u2192 n\u00e3o mais' },
];

export default function ImpactBlock() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Title animation
    gsap.fromTo(el.querySelectorAll('.impact-title'), { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 75%' },
    });

    // Cards slide in from left with stagger
    const cards = el.querySelectorAll('.impact-card');
    gsap.fromTo(cards, { opacity: 0, x: -60, scale: 0.95 }, {
      opacity: 1, x: 0, scale: 1, duration: 0.7, stagger: 0.2, ease: 'power3.out',
      scrollTrigger: { trigger: el.querySelector('.impact-cards'), start: 'top 80%' },
    });

    // "Agora flui." fade in
    gsap.fromTo(el.querySelector('.impact-final'), { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el.querySelector('.impact-final'), start: 'top 90%' },
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-12 lg:py-20 overflow-hidden bg-[#611CFC]"
      style={{
        backgroundImage: 'url("/magic-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle overlay to maintain text readability if needed */}
      <div className="absolute inset-0 bg-[#611CFC]/40" />

      {/* Floating gradient orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none animate-blob" style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full opacity-15 blur-3xl pointer-events-none animate-blob" style={{ background: 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)', animationDelay: '-5s' }} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="impact-title inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] mb-5 px-4 py-2 rounded-full" style={{ color: '#FFFFFF', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-scale-pulse" />
            O que muda
          </span>
          <h2 className="impact-title text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.12] tracking-[-1.5px]" style={{ color: '#FFFFFF' }}>
            &Eacute; a sensa&ccedil;&atilde;o de{' '}
            <span className="text-white">
              &ldquo;por que eu n&atilde;o fiz isso antes?&rdquo;
            </span>
          </h2>
        </div>

        <div className="impact-cards space-y-5">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="impact-card group relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 p-7 rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-default overflow-hidden"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 60%)' }}
              />

              <p className="relative text-base sm:text-lg font-medium flex-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {p.before}
              </p>

              <div className="relative hidden sm:flex items-center gap-4">
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2" style={{ color: 'rgba(255,255,255,0.3)' }}>&rarr;</span>
              </div>

              <p className="relative text-lg font-bold whitespace-nowrap transition-all duration-300 group-hover:scale-105" style={{ color: '#FFFFFF' }}>
                {p.after}
              </p>
            </div>
          ))}
        </div>

        <p className="impact-final text-center mt-14 text-2xl font-bold" style={{ color: '#FFFFFF' }}>
          Agora flui.
        </p>
      </div>
    </section>
  );
}
