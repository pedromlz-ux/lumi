import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  Menu,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../components/ui/sheet";

const NAV_ITEMS = [
  { id: 1, label: 'Lumi Hub', link: '/hub' },
  { id: 2, label: 'Blog', link: '/blog' },
  { id: 4, label: 'Contato', link: '/contact' }
];

function Logo() {
  return (
    <Link to="/" className="group h-full flex items-center">
      <img
        src="/Logo-New.svg"
        alt="LUMI"
        className="h-10 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 border border-white/20 ${scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-3'
          : 'bg-white/10 backdrop-blur-md py-4'
        }`}
      style={{ borderRadius: '999px', width: '92%', maxWidth: '1100px' }}
    >
      <div className="mx-auto px-6 flex items-center justify-between gap-4">
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
                    <Logo />
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
            <Logo />
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
          className="relative text-[10px] md:text-xs font-black px-5 md:px-7 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110 shrink-0 ml-2 md:ml-6 shadow-[0_4px_14px_0_rgba(97,28,252,0.3)]"
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
