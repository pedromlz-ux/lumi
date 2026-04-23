import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "A Lumi orquestrou toda nossa jornada de vendas. Reduzimos o trabalho braçal e o ROI veio na primeira semana.",
    image: "/testimonials/1.jpg",
    name: "Ricardo Santos",
    role: "CEO de E-commerce",
  },
  {
    text: "A orquestração invisível é como ter um clone meu 24/7. Finalmente tenho controle total da minha operação.",
    image: "/testimonials/2.jpg",
    name: "Camila Lima",
    role: "COO @ TechFlow",
  },
  {
    text: "O suporte flui sem gargalos. Resolvo em minutos o que levava horas. Nossos clientes sentem a diferença.",
    image: "/testimonials/3.jpg",
    name: "Marcos Vinícius",
    role: "Head de CX",
  },
  {
    text: "A transição para a Lumi Flow salvou minha equipe do burnout. Automatizamos o ordinário para focar no lucro.",
    image: "/testimonials/4.jpg",
    name: "Helena Moreira",
    role: "Founder de Startup",
  },
  {
    text: "A inteligência preditiva do Lumi Pulse nos salvou de desperdícios massivos. Dados reais, pulso real de negócio.",
    image: "/testimonials/5.jpg",
    name: "Felipe Torres",
    role: "Diretor Logístico",
  },
  {
    text: "Leads qualificados em milissegundos. Meus vendedores agora focam apenas no fechamento, não na triagem.",
    image: "/testimonials/6.jpg",
    name: "Juliana Prado",
    role: "VP de Vendas",
  },
  {
    text: "A Lumi Desk entende nuances que nenhum outro sistema captou. Experiência de marca impecável.",
    image: "/testimonials/7.jpg",
    name: "André Gomes",
    role: "Gerente de Suporte",
  },
  {
    text: "Escalamos nossa operação internacional usando Lumi Scale. Uma orquestração verdadeiramente sem fronteiras.",
    image: "/testimonials/8.jpg",
    name: "Beatriz Duarte",
    role: "Regional COO",
  },
  {
    text: "É a paz de espírito que eu precisava. A Lumi cuida do backoffice enquanto eu cuido da visão da empresa.",
    image: "/testimonials/9.jpg",
    name: "Thiago Rocha",
    role: "Founder Serial",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function ImpactBlock() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll('.impact-title'), { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 75%' },
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#611CFC]"
      style={{
        backgroundImage: 'url("/magic-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-[#611CFC]/40 pointer-events-none" />

      {/* Floating gradient orbs */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full opacity-20 blur-3xl pointer-events-none animate-blob" style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-100px] left-[-60px] w-[250px] h-[250px] rounded-full opacity-15 blur-3xl pointer-events-none animate-blob" style={{ background: 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)', animationDelay: '-5s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="impact-title inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] mb-6 px-4 py-2 rounded-full" style={{ color: '#FFFFFF', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-scale-pulse" />
            O que dizem sobre nós
          </span>
          <h2 className="impact-title text-3xl sm:text-4xl lg:text-[54px] font-extrabold leading-[1.3] tracking-tight" style={{ color: '#FFFFFF' }}>
            A liberdade de ver seu neg&oacute;cio operando em <br className="hidden sm:block" />
            <span className="text-[#4ECDC4]">harmonia absoluta.</span>
          </h2>
        </div>

        {/* Testimonials Hub */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[400px] sm:h-[550px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
}
