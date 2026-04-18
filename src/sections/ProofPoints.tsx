import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrandLumi } from '@/components/BrandLumi';

gsap.registerPlugin(ScrollTrigger);

// Simple SVG icons as components
function TrendUpIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#E0DCFF" />
      <path d="M14 30L22 22L26 26L34 16" stroke="#611CFC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 16H34V20" stroke="#611CFC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#D2F5F0" />
      <path d="M16 24L21.5 29.5L32 18" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#F0E8FF" />
      <path d="M26 14L18 26H24L22 34L30 22H24L26 14Z" stroke="#611CFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Isometric integration icons
function IntegrationIcon({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex items-center justify-center w-14 h-14 rounded-2xl transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: color }}
    >
      <span className="text-white text-lg font-bold">{name[0]}</span>
    </div>
  );
}

const integrations = [
  { name: 'Slack', color: '#4A154B' },
  { name: 'Notion', color: '#000000' },
  { name: 'GitHub', color: '#24292E' },
  { name: 'Linear', color: '#5E6AD2' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'Airtable', color: '#18BFFF' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'HubSpot', color: '#FF7A59' },
];

export default function ProofPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const integrationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.metric-card');
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }

    const integrationIcons = integrationsRef.current?.querySelectorAll('.integration-icon');
    if (integrationIcons) {
      gsap.fromTo(
        integrationIcons,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: integrationsRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative w-full py-16 lg:py-20"
      style={{ backgroundColor: '#F9F9FB' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-[0.5px]"
            style={{ color: '#4ECDC4' }}
          >
            Why Teams Choose <BrandLumi text="LUMI" className="text-inherit" />
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-[-1px]"
            style={{ color: '#1A1A2E' }}
          >
            Results that speak for themselves
          </h2>
        </div>

        {/* Metrics Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Card 1 */}
          <div
            className="metric-card group relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 8px 24px rgba(123, 109, 255, 0.08)',
              border: '1px solid #EBEBF0',
            }}
          >
            <TrendUpIcon />
            <h3
              className="mt-6 text-4xl font-bold tracking-[-1px]"
              style={{ color: '#1A1A2E' }}
            >
              10x
            </h3>
            <p className="mt-2 text-base" style={{ color: '#6B6B78' }}>
              Faster decisions with AI-powered insights
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="metric-card group relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 8px 24px rgba(123, 109, 255, 0.08)',
              border: '1px solid #EBEBF0',
            }}
          >
            <CheckIcon />
            <h3
              className="mt-6 text-4xl font-bold tracking-[-1px]"
              style={{ color: '#1A1A2E' }}
            >
              85%
            </h3>
            <p className="mt-2 text-base" style={{ color: '#6B6B78' }}>
              Reduction in manual, repetitive tasks
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="metric-card group relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 8px 24px rgba(123, 109, 255, 0.08)',
              border: '1px solid #EBEBF0',
            }}
          >
            <ZapIcon />
            <h3
              className="mt-6 text-4xl font-bold tracking-[-1px]"
              style={{ color: '#1A1A2E' }}
            >
              3hrs
            </h3>
            <p className="mt-2 text-base" style={{ color: '#6B6B78' }}>
              Saved per team member every day
            </p>
          </div>
        </div>

        {/* Integrations Card */}
        <div
          className="relative p-10 rounded-3xl overflow-hidden"
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 8px 24px rgba(123, 109, 255, 0.08)',
            border: '1px solid #EBEBF0',
          }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h3
                className="text-2xl font-bold tracking-[-0.5px]"
                style={{ color: '#1A1A2E' }}
              >
                Connects with everything you use
              </h3>
              <p className="mt-3 text-base" style={{ color: '#6B6B78' }}>
                <BrandLumi text="LUMI" className="text-inherit" /> integrates seamlessly with 200+ tools your team already
                loves. No migration headaches, no setup friction—just pure
                automation from day one.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#611CFC' }}
              >
                View all integrations
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div
              ref={integrationsRef}
              className="flex flex-wrap gap-4 justify-center lg:justify-end max-w-sm"
            >
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="integration-icon transition-transform duration-300 hover:scale-110"
                  title={integration.name}
                >
                  <IntegrationIcon
                    name={integration.name}
                    color={integration.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
