import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
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
    <section ref={sectionRef} id="cta" className="relative w-full py-12 lg:py-14 bg-[#F9F9FB] overflow-hidden">
        <div 
          className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-12 lg:py-16 overflow-hidden rounded-3xl sm:rounded-[40px] shadow-[0_32px_80px_rgba(78,205,196,0.2)]"
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
            <h2 className="cta-item text-2xl sm:text-4xl lg:text-[52px] font-extrabold leading-[1.08] tracking-[-2px] mb-7" style={{ color: '#1A1A2E' }}>
              SEU NEGÓCIO PODE<br />
              FUNCIONAR SEM VOCÊ<br />
              100% DO TEMPO
            </h2>
  
            <p className="cta-item text-base sm:text-lg mb-12 max-w-xl mx-auto" style={{ color: 'rgba(26,26,46,0.7)' }}>
              E talvez isso seja exatamente o que está faltando.
            </p>
  
            <div className="cta-item flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/hub"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 text-lg font-bold px-10 py-5 bg-[#1A1A2E] text-white rounded-2xl transition-all duration-300 hover:scale-105 shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              >
                Conhecer o Hub
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
  
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('toggle-lumia-chat'))}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 text-lg font-bold px-10 py-5 bg-white/10 backdrop-blur-md border border-[#1A1A2E]/20 text-[#1A1A2E] rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105 uppercase tracking-tighter"
              >
                MAPEAR OPERAÇÃO GRATUITAMENTE
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:rotate-45">
                  <path d="M10 4V16M16 10H4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0"/>
                  <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
    </section>
  );
}
