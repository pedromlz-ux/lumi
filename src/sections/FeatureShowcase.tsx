import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Orbital Typographic Ring Component
function OrbitalRing() {
  const text = 'PREDICT\u2022OPTIMIZE\u2022AUTOMATE\u2022';
  const chars = text.split('');
  const totalChars = chars.length;

  return (
    <div
      style={{
        perspective: '800px',
        width: '240px',
        height: '240px',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'spinOrbital 8s linear infinite',
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              width: '20px',
              height: '240px',
              marginLeft: '-10px',
              fontSize: '32px',
              fontWeight: 700,
              color: '#611CFC',
              textAlign: 'center',
              transform: `rotate(${(360 / totalChars) * i}deg)`,
              transformOrigin: 'center 120px',
              fontFamily: "'Inter', 'Manrope', sans-serif",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

// Dashed Helix Marquee Component
function HelixMarquee() {
  const logos = ['Slack', 'Notion', 'GitHub', 'Linear', 'Figma', 'Zapier', 'Airtable', 'Stripe'];

  return (
    <div
      style={{
        perspective: '900px',
        width: '300px',
        height: '200px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'spinHelix 6s linear infinite',
        }}
      >
        {/* Front spiral track */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px dashed rgba(123, 109, 255, 0.3)',
            animation: 'spinHelix 6s linear infinite reverse',
          }}
        />
        {/* Back spiral track */}
        <div
          style={{
            position: 'absolute',
            inset: '20px',
            borderRadius: '50%',
            border: '2px dashed rgba(78, 205, 196, 0.3)',
            animation: 'spinHelix 6s linear infinite',
          }}
        />

        {/* Front row logos */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            padding: '20px',
          }}
        >
          {logos.map((logo, i) => (
            <div
              key={`front-${i}`}
              className="flex items-center justify-center w-10 h-10 rounded-xl text-white text-xs font-bold"
              style={{
                backgroundColor: ['#611CFC', '#4ECDC4', '#1A1A2E', '#E0DCFF'][i % 4],
                color: i % 4 === 3 ? '#611CFC' : '#FFFFFF',
                animation: `travelPath 6s ${-i * 0.5}s linear infinite`,
              }}
            >
              {logo[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sentiment Ripple Card Component
function SentimentRippleCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    if (!card || !overlay) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    tl.to(overlay, {
      opacity: 0,
      scale: 1.1,
      ease: 'power2.out',
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full h-[280px] rounded-2xl overflow-hidden"
      style={{ backgroundColor: '#1A1A2E' }}
    >
      {/* UI Mockup Background */}
      <div className="absolute inset-0 p-6 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#611CFC]" />
          <div className="flex-1">
            <div className="h-3 w-32 rounded-full bg-[#611CFC]/30" />
            <div className="h-2 w-20 rounded-full bg-[#611CFC]/20 mt-2" />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="h-16 flex-1 rounded-xl bg-[#611CFC]/10" />
          <div className="h-16 flex-1 rounded-xl bg-[#4ECDC4]/10" />
          <div className="h-16 flex-1 rounded-xl bg-[#611CFC]/10" />
        </div>
        <div className="flex-1 rounded-xl bg-[#611CFC]/5 mt-2 flex items-center justify-center">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
            <path
              d="M5 45L25 30L45 35L65 15L85 25L105 10L115 5"
              stroke="#611CFC"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M5 45L25 30L45 35L65 15L85 25L105 10L115 5"
              stroke="#611CFC"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.3"
              transform="translate(0, 10)"
            />
          </svg>
        </div>
      </div>

      {/* Dark Overlay that cracks open on scroll */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          backgroundColor: '#0D0D1A',
          opacity: 0.9,
        }}
      >
        {/* Crack lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280">
          <path
            d="M50 0 L80 80 L60 140 L100 200 L70 280"
            stroke="rgba(123, 109, 255, 0.6)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M350 0 L320 60 L360 120 L300 180 L340 280"
            stroke="rgba(78, 205, 196, 0.6)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200 0 L180 50 L220 100 L170 150 L200 280"
            stroke="rgba(123, 109, 255, 0.4)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sticky left column parallax
    if (leftColRef.current) {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }

    // Cards stagger animation
    const cards = cardsRef.current?.querySelectorAll('.feature-card');
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
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
      id="como-funciona"
      className="relative w-full py-12 md:py-16 lg:py-14"
      style={{ backgroundColor: '#F9F9FB' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Left Column */}
          <div className="lg:col-span-4">
            <div
              ref={leftColRef}
              className="lg:sticky lg:top-32"
            >
              <span
                className="text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: '#4ECDC4' }}
              >
                Hub Ecosystem
              </span>
              <h2
                className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-black leading-[1.2] tracking-[-1.5px]"
                style={{ color: '#1A1A2E' }}
              >
                A camada inteligente da sua operacão
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#6B6B78' }}>
                Orquestramos sistemas de IA que <span className="text-[#1A1A2E] font-bold">eliminam a fricç&atilde;o</span> e organizam fluxos complexos em uma &uacute;nica experi&ecirc;ncia fluida e escal&aacute;vel.
              </p>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div ref={cardsRef} className="lg:col-span-8 flex flex-col gap-8">
            {/* Feature Card 1 - Predictive Analytics with Sentiment Ripple */}
            <div
              className="feature-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 8px 24px rgba(123, 109, 255, 0.08)',
                border: '1px solid #EBEBF0',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#E0DCFF' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M2 16L6 10L10 13L14 6L18 4"
                      stroke="#611CFC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: '#1A1A2E' }}
                >
                  Predictive Analytics
                </h3>
              </div>
              <p className="text-sm mb-6" style={{ color: '#6B6B78' }}>
                AI models that analyze patterns, predict outcomes, and surface
                insights before you even ask. Watch your data come alive as the
                veil lifts.
              </p>
              <SentimentRippleCard />
            </div>

            {/* Feature Card 2 - Smart Scheduling with Orbital Ring */}
            <div
              className="feature-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 8px 24px rgba(123, 109, 255, 0.08)',
                border: '1px solid #EBEBF0',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#D2F5F0' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle
                      cx="10"
                      cy="10"
                      r="7"
                      stroke="#4ECDC4"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 6V10L13 12"
                      stroke="#4ECDC4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: '#1A1A2E' }}
                >
                  Smart Scheduling
                </h3>
              </div>
              <p className="text-sm mb-6" style={{ color: '#6B6B78' }}>
                Intelligent calendar management that finds optimal meeting times,
                respects focus blocks, and never double-books. Your time,
                optimized.
              </p>
              <div className="flex justify-center py-4">
                <OrbitalRing />
              </div>
            </div>

            {/* Feature Card 3 - Global Sync with Helix Marquee */}
            <div
              className="feature-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 8px 24px rgba(123, 109, 255, 0.08)',
                border: '1px solid #EBEBF0',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#E0DCFF' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="#611CFC"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 10H18M10 2C7 5 6 8 6 10C6 12 7 15 10 18C13 15 14 12 14 10C14 8 13 5 10 2Z"
                      stroke="#611CFC"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: '#1A1A2E' }}
                >
                  Global Sync
                </h3>
              </div>
              <p className="text-sm mb-6" style={{ color: '#6B6B78' }}>
                Connect every tool across every timezone. Data flows seamlessly
                between platforms, keeping your entire organization in perfect
                harmony.
              </p>
              <div className="flex justify-center py-4">
                <HelixMarquee />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
