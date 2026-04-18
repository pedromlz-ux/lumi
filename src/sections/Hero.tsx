import { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingParticles from '../components/FloatingParticles';
import { BrandLumi } from '@/components/BrandLumi';

export default function Hero() {
  const tagRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["vendas", "marketing", "automação", "tempo", "sistema", "dinheiro"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3500); // Slower interval for better readability
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(tagRef.current, { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' })
      .fromTo(h1Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
      .fromTo(p1Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.5')
      .fromTo(p2Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .fromTo(ctaRef.current, { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3')
      .fromTo(imgRef.current, { opacity: 0, y: 60, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }, '-=0.4');
    return () => { tl.kill(); };
  }, []);

  // Mouse parallax for decorative blobs
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const blobs = section.querySelectorAll('.hero-blob');

    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 0.015;
        const x = (clientX - centerX) * factor;
        const y = (clientY - centerY) * factor;
        (blob as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden pt-28 pb-12 lg:pb-16" style={{ backgroundColor: '#F9F9FB' }}>
      {/* Floating particles */}
      <FloatingParticles count={30} colors={['#611CFC', '#4ECDC4', '#A78BFA', '#C4B5FD']} className="opacity-60" />

      {/* Animated gradient blobs with mouse parallax */}
      <div className="hero-blob absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none transition-transform duration-300 ease-out animate-blob" style={{ background: 'radial-gradient(circle, #611CFC 0%, transparent 70%)' }} />
      <div className="hero-blob absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none transition-transform duration-300 ease-out animate-blob" style={{ background: 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)', animationDelay: '-5s' }} />
      <div className="hero-blob absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none transition-transform duration-300 ease-out animate-blob" style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', animationDelay: '-3s' }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Tag */}
          <span
            ref={tagRef}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] px-5 py-2.5 rounded-full mb-7 border border-[#611CFC]/10"
            style={{ color: '#611CFC', backgroundColor: 'rgba(97, 28, 252, 0.06)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-scale-pulse" />
            IA que resolve
          </span>

          {/* Headline */}
          <h1
            ref={h1Ref}
            className="text-4xl sm:text-5xl lg:text-[76px] font-extrabold leading-[1.02] tracking-[-3px] max-w-5xl"
            style={{ color: '#1A1A2E' }}
          >
            A{' '}
            <BrandLumi sparkles useHeroStyles />{' '}
            te ajuda com
            <div className="relative h-[1.15em] overflow-hidden mt-3 mb-2 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleNumber}
                  className="absolute font-black italic"
                  style={{ color: '#611CFC' }}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -50, rotateX: 90 }}
                  transition={{ type: "spring", stiffness: 70, damping: 20 }}
                >
                  {titles[titleNumber]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          {/* Premium Pillar Badges */}
          <div
            ref={p1Ref}
            className="mt-14 flex flex-wrap justify-center gap-4"
          >
            {['Sem esforço.', 'Sem espera.', 'Sem bagunça.'].map((text, i) => (
              <span 
                key={i}
                className="px-6 py-2.5 rounded-2xl text-sm font-bold tracking-tight glass border border-[#611CFC]/10 shadow-sm"
                style={{ color: '#611CFC' }}
              >
                {text}
              </span>
            ))}
          </div>

          <p
            ref={p2Ref}
            className="mt-8 text-lg sm:text-xl max-w-2xl leading-relaxed font-medium"
            style={{ color: '#6B6B78' }}
          >
            Automa&ccedil;&atilde;o inteligente que <span className="text-[#1A1A2E] font-bold">atende seus clientes</span>, 
            organiza seus processos e <span className="text-[#1A1A2E] font-bold">vende</span> enquanto voc&ecirc; foca no que realmente importa.
          </p>

          {/* CTA with enhanced glow */}
          <a
            ref={ctaRef}
            href="#cta"
            className="mt-10 inline-flex items-center gap-3 text-lg font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(97,28,252,0.35)] group"
            style={{
              background: 'linear-gradient(135deg, #611CFC 0%, #7C3AED 50%, #611CFC 100%)',
              backgroundSize: '200% 200%',
              color: '#FFFFFF',
              boxShadow: '0 8px 32px rgba(97, 28, 252, 0.3), 0 0 0 1px rgba(255,255,255,0.1) inset',
              animation: 'gradient-shift 4s ease infinite',
            }}
          >
            Ativar minha automa&ccedil;&atilde;o
            <svg
              width="20" height="20" viewBox="0 0 20 20" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 10H15M15 10L11 6M15 10L11 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Hero Image with floating animation */}
          <div ref={imgRef} className="mt-16 w-full max-w-5xl">
            <div className="relative animate-float-slow">
              <div
                className="relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_32px_100px_rgba(97,28,252,0.18)] hover:scale-[1.01]"
                style={{ boxShadow: '0 24px 80px rgba(97, 28, 252, 0.1), 0 0 0 1px rgba(255,255,255,0.5) inset' }}
              >
                <img
                  src="/hero-interface.jpg"
                  alt="Interface da LUMI mostrando automa&ccedil;&atilde;o em a&ccedil;&atilde;o"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl text-xs font-bold text-white animate-float shadow-lg" style={{ background: 'linear-gradient(135deg, #611CFC, #7C3AED)', animationDelay: '-2s' }}>
                🤖 IA Ativa
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl text-xs font-bold animate-float-reverse shadow-lg glass border border-[#611CFC]/20" style={{ color: '#611CFC', animationDelay: '-1s' }}>
                ⚡ 10x mais r&aacute;pido
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
