import { Link } from 'react-router';
import ElasticWave from '../components/ElasticWave';

export default function Footer() {
  const routes = {
    'Termos': '/terms',
    'Privacidade': '/privacy',
    'Contato': '/contact'
  };

  return (
    <footer className="relative w-full py-12 overflow-hidden" style={{ backgroundColor: '#611CFC' }}>
      {/* Subtle top glow - reduced since bg is now purple */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 mb-4">
        <div className="flex flex-col items-center text-center gap-5">
          {/* Logo instead of text */}
          <Link to="/">
            <img
              src="/Logo-White.png"
              alt="LUMI"
              className="h-24 w-auto transition-all duration-300 hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))',
              }}
            />
          </Link>

          <p className="text-sm max-w-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Automação que tira o peso do seu negócio.
          </p>
        </div>
      </div>

      {/* Full-width ElasticWave */}
      <div className="w-full relative py-4">
        <ElasticWave />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 mt-4">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-8">
            {Object.entries(routes).map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className="text-xs transition-all duration-300 hover:text-white relative group text-white/60"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} LUMI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
