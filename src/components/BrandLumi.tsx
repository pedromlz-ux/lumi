import { SparklesText } from './ui/sparkles-text';
import { cn } from '@/lib/utils';

interface BrandLumiProps {
  text?: string;
  sparkles?: boolean;
  className?: string;
  useHeroStyles?: boolean;
}

export function BrandLumi({ 
  text = "lumi", 
  sparkles = false, 
  className,
  useHeroStyles = false
}: BrandLumiProps) {
  
  const baseStyles = {
    color: '#611CFC',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '800',
    letterSpacing: '-0.02em',
  };

  const heroStyles = useHeroStyles ? {
    display: 'inline-block',
    transform: 'translateY(8px) rotate(-6deg) skewX(-12deg)',
    fontSize: '1.2em',
    filter: 'drop-shadow(0 0 20px rgba(97, 28, 252, 0.2))',
  } : {};

  const combinedStyles = { ...baseStyles, ...heroStyles };

  const displayText = text.toLowerCase() === 'lumi' ? 'Lumi' : text;

  if (sparkles) {
    return (
      <SparklesText 
        text={displayText} 
        sparklesCount={4}
        colors={{ first: "#611CFC", second: "#4ECDC4" }}
        className={cn("inline-block text-inherit", className)}
        style={combinedStyles}
      />
    );
  }

  return (
    <span 
      className={cn("inline-block", className)}
      style={combinedStyles}
    >
      {displayText}
    </span>
  );
}
