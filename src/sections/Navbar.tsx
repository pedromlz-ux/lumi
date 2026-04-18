import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { DropdownNavigation } from '../components/ui/dropdown-navigation';
import { 
  Zap, 
  Puzzle, 
  Cpu, 
  MessageSquare, 
  BookOpen, 
  ShieldCheck,
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  const NAV_ITEMS = [
    {
      id: 1,
      label: 'Soluções',
      subMenus: [
        {
          title: 'Plataforma',
          items: [
            { 
              label: 'Como funciona', 
              description: 'Nossa metodologia de IA', 
              icon: Zap, 
              link: isHome ? '#como-funciona' : '/#como-funciona' 
            },
            { 
              label: 'Capacidades', 
              description: 'O que a LUMI pode fazer', 
              icon: Cpu, 
              link: isHome ? '#capacidades' : '/#capacidades' 
            },
          ],
        },
        {
          title: 'Integração',
          items: [
            { 
              label: 'Integrações', 
              description: 'Conecte suas ferramentas', 
              icon: Puzzle, 
              link: isHome ? '#integrações' : '/#integrações' 
            },
            { 
              label: 'Enterprise', 
              description: 'Escala e segurança', 
              icon: ShieldCheck, 
              link: '#cta' 
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: 'Recursos',
      subMenus: [
        {
          title: 'Aprenda',
          items: [
            { 
              label: 'Blog', 
              description: 'Novidades sobre IA', 
              icon: BookOpen, 
              link: '/blog' 
            },
            { 
              label: 'Suporte', 
              description: 'Fale com especialistas', 
              icon: MessageSquare, 
              link: '/contact' 
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: 'Contato',
      link: '/contact'
    }
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-2xl shadow-[0_8px_40px_rgba(97,28,252,0.12)] scale-[0.98]'
          : 'bg-white/40 backdrop-blur-md'
      }`}
      style={{ borderRadius: '24px', padding: '6px 20px', maxWidth: '1100px', width: '94%' }}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group mr-6">
          <img src="/Logo.png" alt="LUMI" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
        </Link>

        <div className="hidden md:block flex-1">
          <DropdownNavigation navItems={NAV_ITEMS} />
        </div>

        <Link
          to={isHome ? "#cta" : "/#cta"}
          className="relative text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 overflow-hidden group ml-6 shrink-0"
          style={{
            background: 'linear-gradient(135deg, #611CFC 0%, #7C3AED 100%)',
            color: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(97, 28, 252, 0.3)',
          }}
        >
          <span className="relative z-10">Ativar agora</span>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #611CFC 100%)' }}
          />
        </Link>
      </div>
    </nav>
  );
}
