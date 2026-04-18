import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: string; // e.g. "10x", "-80%", "24h"
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Counter({ target, duration = 2000, className = '', style }: CounterProps) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // Extract number and suffix
            const numMatch = target.match(/-?\d+/);
            if (!numMatch) {
              setDisplay(target);
              return;
            }

            const num = parseInt(numMatch[0], 10);
            const suffix = target.replace(/-?\d+/, '');
            const prefix = num < 0 ? '' : '';

            const startTime = performance.now();
            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing: ease-out-cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * num);

              setDisplay(`${prefix}${current}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
