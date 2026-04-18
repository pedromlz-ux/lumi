import { Link } from 'react-router';

export default function Footer() {
  const routes = {
    'Termos': '/terms',
    'Privacidade': '/privacy',
    'Contato': '/contact'
  };

  return (
    <footer className="relative w-full py-8 md:py-10 overflow-hidden" style={{ backgroundColor: '#611CFC' }}>
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0">
          
          {/* Left Side: Logo & Motto */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="group">
              <img
                src="/Logo-White.png"
                alt="LUMI"
                className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-[10px] md:text-xs font-medium tracking-wide opacity-50 text-white">
              Automação que tira o peso do seu negócio.
            </p>
          </div>

          {/* Right Side: Links & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6 md:gap-8">
              {Object.entries(routes).map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  className="text-[10px] md:text-xs font-bold transition-all duration-300 hover:text-white text-white/60 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <p className="text-[10px] md:text-xs opacity-30 text-white font-medium">
              &copy; {new Date().getFullYear()} LUMI. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
