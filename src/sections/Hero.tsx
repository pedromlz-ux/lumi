import { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import FloatingParticles from '../components/FloatingParticles';
import ProductCarousel from '../components/ProductCarousel';

export default function Hero() {
  const tagRef = useRef<HTMLHeadingElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["vendas", "marketing", "automação", "tempo", "escala", "lucro"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
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
    <section ref={sectionRef} className="relative w-full overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24" style={{ backgroundColor: '#F9F9FB' }}>
      {/* Floating particles */}
      <FloatingParticles count={20} colors={['#611CFC', '#4ECDC4', '#A78BFA', '#C4B5FD']} className="opacity-60" />

      {/* Animated gradient blobs with mouse parallax */}
      <div className="hero-blob absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none transition-transform duration-300 ease-out animate-blob" style={{ background: 'radial-gradient(circle, #611CFC 0%, transparent 70%)' }} />
      <div className="hero-blob absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none transition-transform duration-300 ease-out animate-blob" style={{ background: 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)', animationDelay: '-5s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Mascot Column (Left on Desktop) */}
          <div ref={imgRef} className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative animate-float-slow max-w-[450px] lg:max-w-[550px]">
              <img
                src="/lumi-dando-oi.png"
                alt="Lumia dando oi"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(97,28,252,0.15)]"
              />
            </div>
          </div>

          {/* Content Column (Right on Desktop) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            {/* Headline */}
            <h1
              ref={h1Ref}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight sm:tracking-[-2px] mb-6 font-inter"
              style={{ color: '#1A1A2E' }}
            >
              Seu <span className="text-[#611CFC]">Hub</span> de Sistemas de IA
            </h1>

            {/* Introduction */}
            <h2
              ref={tagRef}
              className="text-lg sm:text-xl font-bold text-slate-800 leading-tight mb-8 font-inter opacity-90"
            >
              Oi, eu sou a Lúmia. <span className="font-medium">Como sua guia neste ecossistema, estou aqui para orquestrar a sua operação de forma fluida:</span>
            </h2>

            {/* Bullet Points */}
            <div ref={p1Ref} className="flex flex-col gap-6 mb-10">
              {[
                { title: 'Auxílio gratuito 24h.', desc: 'Estou disponível direto no site, a qualquer momento, para te guiar.' },
                { title: 'Dúvidas e consultas.', desc: 'Respondo perguntas e direciono os melhores sistemas para a sua necessidade.' },
                { title: 'Mapeamento de gargalos.', desc: 'Entendo o momento atual da sua empresa para encontrar onde você está perdendo tempo.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4ECDC4]/20 flex items-center justify-center mt-1">
                    <span className="text-[#4ECDC4] font-black text-sm">✓</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-[#1A1A2E] leading-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              ref={ctaRef}
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#611CFC] hover:bg-[#5316db] text-white rounded-full font-black text-lg tracking-tight transition-all duration-300 shadow-[0_20px_50px_-20px_rgba(97,28,252,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(97,28,252,0.6)] hover:-translate-y-1"
            >
              Mapear operação gratuitamente
            </a>
          </div>

        </div>
      </div>
      
      <div className="mt-20 sm:mt-24">
        <ProductCarousel />
      </div>
    </section>
  );
}
