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
  { id: 1, label: 'Lumi Hub', link: '/hub' },
  { id: 2, label: 'Blog', link: '/blog' },
  { id: 4, label: 'Contato', link: '/contact' }
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
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
      style={{ maxWidth: '100%' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          {/* Mobile Menu Trigger */}
          <div className="md:hidden mr-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-md transition-colors text-[#1A1A2E] hover:bg-[#611CFC]/5"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white border-slate-200">
                <SheetHeader className="mb-8 border-b pb-4">
                  <div className="h-8 flex items-center">
                    <Logo isDark={false} />
                  </div>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.id}
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center w-full py-4 px-4 text-base font-bold text-[#1A1A2E] hover:bg-slate-50 transition-colors uppercase tracking-widest border-l-2 border-transparent hover:border-[#611CFC]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex-shrink-0 flex items-center h-8">
            <Logo isDark={false} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-12">
          {NAV_ITEMS.map(item => (
            <Link 
              key={item.id} 
              to={item.link}
              className="text-xs font-black uppercase tracking-[0.2em] text-[#1A1A2E] hover:text-[#611CFC] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/ativar"
          className="relative text-[10px] md:text-xs font-black px-4 md:px-6 py-2 md:py-3 rounded-none transition-all duration-200 hover:brightness-110 shrink-0 ml-2 md:ml-6 border-b-2 border-r-2 border-[#1A1A2E]"
          style={{
            backgroundColor: '#611CFC',
            color: '#FFFFFF',
          }}
        >
          <span className="relative z-10 uppercase tracking-widest">Ativar agora</span>
        </Link>
      </div>
    </nav>
  );
}
