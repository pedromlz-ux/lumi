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
  Menu,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="flex items-center">
          {/* Mobile Menu Trigger */}
          <div className="md:hidden mr-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-[#1A1A2E] hover:bg-[#611CFC]/5 rounded-lg transition-colors">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 border-none bg-white/95 backdrop-blur-xl">
                <SheetHeader className="p-6 border-b border-[#611CFC]/5">
                  <SheetTitle className="flex justify-start">
                    <img src="/Logo.png" alt="LUMI" className="h-8 w-auto" />
                  </SheetTitle>
                </SheetHeader>
                <div className="p-4 overflow-y-auto max-h-[calc(100vh-80px)]">
                  <Accordion type="single" collapsible className="w-full">
                    {NAV_ITEMS.map((item) => (
                      <div key={item.id}>
                        {item.subMenus ? (
                          <AccordionItem value={`item-${item.id}`} className="border-none">
                            <AccordionTrigger className="text-lg font-bold text-[#1A1A2E] hover:no-underline py-4 px-2 hover:text-[#611CFC]">
                              {item.label}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-4 space-y-6 pt-2 pb-4">
                                {item.subMenus.map((sub) => (
                                  <div key={sub.title}>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#611CFC]/40 mb-3 pl-2">
                                      {sub.title}
                                    </p>
                                    <div className="space-y-4">
                                      {sub.items.map((subItem) => (
                                        <Link
                                          key={subItem.label}
                                          to={subItem.link}
                                          onClick={() => setIsOpen(false)}
                                          className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:border-[#611CFC]/10 hover:bg-[#611CFC]/5 transition-all group"
                                        >
                                          <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#611CFC] group-hover:bg-[#611CFC] group-hover:text-white transition-colors">
                                            <subItem.icon size={16} />
                                          </div>
                                          <span className="text-sm font-bold text-[#1A1A2E]">{subItem.label}</span>
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
                            to={item.link!}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center w-full py-4 px-2 text-lg font-bold text-[#1A1A2E] hover:text-[#611CFC] transition-colors"
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

          <Link to="/" className="flex items-center gap-2.5 shrink-0 group mr-6">
            <img src="/Logo.png" alt="LUMI" className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>
        </div>

        <div className="hidden md:block flex-1">
          <DropdownNavigation navItems={NAV_ITEMS} />
        </div>

        <Link
          to={isHome ? "#cta" : "/#cta"}
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
