import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingParticles from '../components/FloatingParticles';

gsap.registerPlugin(ScrollTrigger);

export default function CTAFinal() {
  const sectionRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll('.cta-item'), { opacity: 0, y: 30, scale: 0.97 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 75%' },
    });

    // Button continuous subtle pulse
    const btn = btnRef.current;
    if (btn) {
      gsap.to(btn, {
        boxShadow: '0 0 60px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.1)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#F9F9FB]">
      <div 
        className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-28 overflow-hidden rounded-[40px] shadow-[0_32px_80px_rgba(78,205,196,0.2)]"
        style={{
          backgroundImage: 'url("/cta-floating-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <FloatingParticles count={20} colors={['#FFFFFF', '#611CFC', '#1A1A2E']} className="opacity-20" />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-[#4ECDC4]/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="cta-item text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-[1.08] tracking-[-2px] mb-7" style={{ color: '#1A1A2E' }}>
            SEU NEGÓCIO PODE FUNCIONAR SEM VOCÊ 100% DO TEMPO
          </h2>

          <p className="cta-item text-lg mb-12 max-w-xl mx-auto" style={{ color: 'rgba(26,26,46,0.7)' }}>
            E talvez isso seja exatamente o que está faltando.
          </p>

          <a
            ref={btnRef}
            href="#"
            className="cta-item inline-flex items-center gap-3 text-lg font-bold px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 group"
            style={{
              backgroundColor: '#1A1A2E',
              color: '#FFFFFF',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            Quero automatizar agora
            <svg
              width="22" height="22" viewBox="0 0 22 22" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M4 11H18M18 11L13 6M18 11L13 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
