import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  Menu,
  Home,
  Layout,
  BookOpen,
  Mail,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";

const NAV_ITEMS = [
  { id: 0, label: 'Home', link: '/' },
  { id: 1, label: 'Lumi Hub', link: '/hub' },
  { id: 2, label: 'Blog', link: '/blog' },
  { id: 4, label: 'Contato', link: '/contact' }
];

function Logo() {
  return (
    <Link to="/" className="group h-full flex items-center">
      <img
        src="/Logo-Navbar.svg"
        alt="LUMI"
        className="h-[30px] md:h-[42px] w-auto transition-transform duration-300 group-hover:scale-105"
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
      <div className="mx-auto px-6 flex items-center justify-between gap-4 w-full">
        <div className="flex items-center flex-1 justify-start">
          {/* Mobile Menu Trigger */}
          <div className="md:hidden mr-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-xl transition-all text-[#1A1A2E] bg-slate-100/50 hover:bg-[#611CFC]/5"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 bg-white border-r-slate-100 w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="p-8 border-b border-slate-50">
                    <Logo />
                    <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Navegação</p>
                  </div>

                  <div className="flex-1 px-4 py-8">
                    <div className="flex flex-col gap-2">
                       {NAV_ITEMS.map((item) => (
                        <Link
                          key={item.id}
                          to={item.link}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-slate-50 transition-all group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all text-slate-400 group-hover:text-[#611CFC]">
                             {item.label === 'Home' && <Home size={20} />}
                             {item.label === 'Lumi Hub' && <Layout size={20} />}
                             {item.label === 'Blog' && <BookOpen size={20} />}
                             {item.label === 'Contato' && <Mail size={20} />}
                          </div>
                          <span className="text-lg font-bold text-slate-700 group-hover:text-[#1A1A2E]">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 border-t border-slate-50">
                    <Link
                      to="/ativar"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center w-full py-4 rounded-2xl bg-[#611CFC] text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-[#611CFC]/20 mb-6"
                    >
                      ATIVAR AGORA
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex-shrink-0 flex items-center h-8">
            <Logo />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-12">
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
        <div className={`flex flex-1 justify-end items-center transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Link
            to="/ativar"
            className="relative text-[10px] md:text-xs font-black px-4 md:px-7 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110 shrink-0 ml-2 md:ml-6 shadow-[0_4px_14px_0_rgba(97,28,252,0.3)]"
            style={{
              backgroundColor: '#611CFC',
              color: '#FFFFFF',
            }}
          >
            <span className="relative z-10 uppercase tracking-widest">Ativar agora</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
