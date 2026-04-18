import { useRef, useCallback, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glowColor?: string;
  style?: React.CSSProperties;
}

export default function TiltCard({
  children,
  className = '',
  tiltAmount = 12,
  glowColor = 'rgba(97, 28, 252, 0.15)',
  style,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      const glow = glowRef.current;
      if (!card || !glow) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -tiltAmount;
      const rotateY = ((x - centerX) / centerX) * tiltAmount;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      // Move glow to follow cursor
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, transparent 60%)`;
      glow.style.opacity = '1';
    },
    [tiltAmount, glowColor]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    glow.style.opacity = '0';
  }, []);

  return (
    <div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transformStyle: 'preserve-3d' }}
    >
      <div
        ref={cardRef}
        className="relative transition-transform duration-200 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
      {/* Glow overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 opacity-0"
        style={{ zIndex: 1, mixBlendMode: 'overlay' }}
      />
    </div>
  );
}
