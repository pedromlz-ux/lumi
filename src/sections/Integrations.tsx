import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { BrandLumi } from '@/components/BrandLumi';
import FloatingParticles from '../components/FloatingParticles';

gsap.registerPlugin(ScrollTrigger);

const integrations = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn
  "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", // Slack
  "https://cdn-icons-png.flaticon.com/512/174/174872.png", // Spotify
  "https://cdn-icons-png.flaticon.com/512/733/733547.png", // Facebook
  "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", // Stripe
  "https://cdn-icons-png.flaticon.com/512/174/174855.png", // Instagram
  "https://cdn-icons-png.flaticon.com/512/888/888853.png", // Dropbox
  "https://cdn-icons-png.flaticon.com/512/906/906324.png", // Jira
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // Square
  "https://cdn-icons-png.flaticon.com/512/732/732218.png", // Shopify
  "https://cdn-icons-png.flaticon.com/512/5968/5968755.png", // Zapier
  "https://cdn-icons-png.flaticon.com/512/5968/5968520.png", // Google Drive
  "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", // YouTube
  "https://cdn-icons-png.flaticon.com/512/5968/5968885.png", // Airtable
  "https://cdn-icons-png.flaticon.com/512/2111/2111370.png", // Discord
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
];

export default function Integrations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelector('.int-content'), { opacity: 0, x: -30 }, {
      opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 75%' },
    });

    const icons = el.querySelectorAll('.int-icon');
    gsap.fromTo(icons, { opacity: 0, scale: 0.5, rotate: -15 }, {
      opacity: 1, scale: 1, rotate: 0, duration: 0.6, stagger: 0.04, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: el.querySelector('.int-grid'), start: 'top 80%' },
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section ref={sectionRef} id="integrações" className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      <FloatingParticles count={10} colors={['#611CFC', '#4ECDC4']} className="opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Content */}
        <div className="int-content relative z-10 text-center md:text-left pt-12 md:pt-0">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#4ECDC4] mb-6 px-4 py-2 rounded-full bg-[#4ECDC4]/5 border border-[#4ECDC4]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-pulse" />
            Integração
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A2E] mb-6 leading-[1.1] font-inter">
            CONECTA COM TUDO.<br />
            <span className="text-[#611CFC]">FUNCIONA SEM COMPLICAR.</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-bold mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            WhatsApp, CRM, ferramentas, processos. A <BrandLumi /> entra, organiza e faz acontecer. Seu ecossistema orquestrado em um só lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 px-4 sm:px-0">
            <Button asChild className="bg-[#611CFC] hover:bg-[#5316db] text-white px-6 py-5 sm:px-8 sm:py-6 rounded-2xl font-black text-base sm:text-lg shadow-lg shadow-[#611CFC]/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
              <Link to="/hub">Ver integrações</Link>
            </Button>
            <Button variant="outline" asChild className="border-2 border-slate-200 px-6 py-5 sm:px-8 sm:py-6 rounded-2xl font-black text-base sm:text-lg hover:bg-slate-50 transition-all hover:border-[#611CFC]/30 w-full sm:w-auto">
              <Link to="/contato">Documentação →</Link>
            </Button>
          </div>
        </div>

        {/* Right Side: Hexagonal Grid */}
        <div className="int-grid grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 relative mt-16 md:mt-0 px-2 sm:px-0">
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-[#611CFC]/5 blur-[100px] rounded-full pointer-events-none" />
          
          {integrations.map((url, idx) => (
            <div
              key={idx}
              className="int-icon relative w-full aspect-square flex items-center justify-center p-2 sm:p-3 bg-white shadow-sm border border-slate-100 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-[#611CFC]/20 hover:z-20 cursor-pointer group overflow-hidden"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#611CFC]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={url}
                alt={`integration-${idx}`}
                className="w-full h-full object-contain p-1 opacity-90 sm:opacity-70 group-hover:opacity-100 grayscale-0 sm:grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
