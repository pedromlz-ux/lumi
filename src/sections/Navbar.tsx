import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { DropdownNavigation } from '../components/ui/dropdown-navigation';
import { 
  Workflow, 
  Headset, 
  Target, 
  Settings, 
  Activity, 
  Heart,
  Menu,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const NAV_ITEMS = [
  {
    id: 1,
    label: 'Soluções',
    subMenus: [
      {
        title: 'Para Negócios',
        items: [
          { label: 'Lumi Flow', description: 'Automação de workflows complexos.', icon: Workflow, link: '/contact' },
          { label: 'Lumi Desk', description: 'Atendimento inteligente 24/7.', icon: Headset, link: '/contact' },
          { label: 'Lumi Sales', description: 'Captação e conversão de leads.', icon: Target, link: '/contact' },
        ]
      },
      {
        title: 'Operação',
        items: [
          { label: 'Lumi Ops', description: 'Backoffice e processos internos.', icon: Settings, link: '/contact' },
          { label: 'Lumi Pulse', description: 'Insights e BI em tempo real.', icon: Activity, link: '/contact' },
          { label: 'Lumi Care', description: 'Retenção e sucesso do cliente.', icon: Heart, link: '/contact' },
        ]
      }
    ]
  },
  { id: 2, label: 'Recursos', link: '#' },
  { id: 3, label: 'Contato', link: '/contact' }
];

function Logo({ isDark }: { isDark: boolean }) {
  return (
    <Link to="/" className="group h-full flex items-center">
      <img
        src={isDark ? "/Logo-White.png" : "/Logo.png"}
        alt="LUMI"
        className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isDarkPage = location.pathname === '/ativar';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? isDarkPage
            ? 'bg-white/10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] border border-white/10 scale-[0.98]'
            : 'bg-white/85 backdrop-blur-2xl shadow-[0_8px_40px_rgba(97,28,252,0.12)] scale-[0.98]'
          : isDarkPage
            ? 'bg-white/5 backdrop-blur-md border border-white/5'
            : 'bg-white/40 backdrop-blur-md border border-transparent'
      }`}
      style={{ borderRadius: '24px', padding: '6px 20px', maxWidth: '1100px', width: '94%' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Mobile Menu Trigger */}
          <div className="md:hidden mr-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button 
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkPage ? 'text-white hover:bg-white/5' : 'text-[#1A1A2E] hover:bg-[#611CFC]/5'
                  }`}
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className={isDarkPage ? 'bg-[#0A0A0B] border-white/10' : 'bg-white'}>
                <SheetHeader className="mb-8">
                  <div className="h-8 flex items-center">
                    <Logo isDark={isDarkPage} />
                  </div>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  <Accordion type="single" collapsible className="w-full">
                    {NAV_ITEMS.map((item) => (
                      <div key={item.id}>
                        {item.subMenus ? (
                          <AccordionItem value={`item-${item.id}`} className="border-none">
                            <AccordionTrigger 
                              className={`text-lg font-bold hover:no-underline py-4 px-2 tracking-tight ${
                                isDarkPage ? 'text-white hover:text-[#4ECDC4]' : 'text-[#1A1A2E] hover:text-[#611CFC]'
                              }`}
                            >
                              {item.label}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-4 space-y-6 pt-2 pb-4">
                                {item.subMenus.map((sub) => (
                                  <div key={sub.title}>
                                    <p className={`text-[10px] font-black uppercase tracking-widest mb-3 pl-2 ${
                                      isDarkPage ? 'text-white/30' : 'text-[#611CFC]/40'
                                    }`}>
                                      {sub.title}
                                    </p>
                                    <div className="space-y-4">
                                      {sub.items.map((subItem) => (
                                        <Link
                                          key={subItem.label}
                                          to={subItem.link || '#'}
                                          onClick={() => setIsOpen(false)}
                                          className={`flex items-center gap-3 p-2 rounded-xl border transition-all group ${
                                            isDarkPage 
                                              ? 'border-white/5 hover:border-white/10 hover:bg-white/5' 
                                              : 'border-transparent hover:border-[#611CFC]/10 hover:bg-[#611CFC]/5'
                                          }`}
                                        >
                                          <div 
                                            className={`w-8 h-8 rounded-lg shadow-sm flex items-center justify-center transition-colors ${
                                              isDarkPage 
                                                ? 'bg-white/5 text-[#4ECDC4] group-hover:bg-[#4ECDC4] group-hover:text-white'
                                                : 'bg-white text-[#611CFC] group-hover:bg-[#611CFC] group-hover:text-white'
                                            }`}
                                          >
                                            <subItem.icon size={16} />
                                          </div>
                                          <span className={`text-sm font-bold ${
                                            isDarkPage ? 'text-white/70' : 'text-[#1A1A2E]'
                                          }`}>{subItem.label}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <Link
                            to={item.link || '#'}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center w-full py-4 px-2 text-lg font-bold transition-colors tracking-tight ${
                              isDarkPage ? 'text-white hover:text-[#4ECDC4]' : 'text-[#1A1A2E] hover:text-[#611CFC]'
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="flex-shrink-0 flex items-center h-8">
            <Logo isDark={isDarkPage} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <DropdownNavigation navItems={NAV_ITEMS} isDark={isDarkPage} />
        </div>

        <Link
          to="/ativar"
          className="relative text-[10px] md:text-sm font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-300 hover:scale-105 overflow-hidden group ml-2 md:ml-6 shrink-0"
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
