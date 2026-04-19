import { useRef, useEffect } from 'react';

class Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetY: number;
  k: number;
  damp: number;
  mouseRadius: number;
  mouseForce: number;
  lineColor: string;
  circleFill: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.targetY = y;
    this.k = 0.1;
    this.damp = 0.85;
    this.mouseRadius = 150;
    this.mouseForce = 0.98;
    this.lineColor = 'rgba(255, 255, 255, 0.4)';
    this.circleFill = '#ffffff';
  }

  update(
    scrollForce: number,
    mouseX: number | null,
    mouseY: number | null
  ) {
    const force = (this.targetY - this.y) * this.k;
    this.vy += force;
    this.vy += scrollForce * 0.3;

    if (mouseX !== null && mouseY !== null) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < this.mouseRadius) {
        const nx = dx / dist;
        const ny = dy / dist;
        const force = (this.mouseRadius - dist) / this.mouseRadius;
        this.vx -= nx * force * this.mouseForce;
        this.vy -= ny * force * this.mouseForce;
      }
    }

    this.vx *= this.damp;
    this.vy *= this.damp;
    this.x += this.vx;
    this.y += this.vy;
  }
}

interface Row {
  points: Point[];
  pointRadius: number;
}

function drawRow(
  ctx: CanvasRenderingContext2D,
  points: Point[],
  pointRadius: number,
  offsetX: number
) {
  ctx.save();
  ctx.translate(offsetX, 0);

  // Draw connecting curve
  if (points.length > 0) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length - 1; i++) {
      const x = (points[i].x + points[i + 1].x) * 0.5;
      const y = (points[i].y + points[i + 1].y) * 0.5;
      ctx.quadraticCurveTo(points[i].x, points[i].y, x, y);
    }
    if (points.length > 1) {
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
    }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Draw circles
  for (const point of points) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowBlur = 15;
    ctx.fill();
  }

  ctx.restore();
}

export default function ElasticWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const setSize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    setSize();

    // Create rows
    const numPoints = 20;
    const spacingX = width / (numPoints - 1);
    const rows: Row[] = [];
    const rowConfigs = [
      { y: height * 0.25, radius: 6 },
      { y: height * 0.5, radius: 8 },
      { y: height * 0.75, radius: 6 },
    ];

    for (const config of rowConfigs) {
      const points: Point[] = [];
      for (let i = 0; i < numPoints; i++) {
        points.push(new Point(i * spacingX, config.y));
      }
      rows.push({ points, pointRadius: config.radius });
    }

    let scrollEnergy = 0;
    let mouseX: number | null = null;
    let mouseY: number | null = null;

    const handleWheel = (e: WheelEvent) => {
      scrollEnergy += e.deltaY * 0.05;
      scrollEnergy = Math.max(-20, Math.min(20, scrollEnergy));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    canvas.addEventListener('wheel', handleWheel, { passive: true });
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const row of rows) {
        drawRow(ctx, row.points, row.pointRadius, 0);
        for (const pt of row.points) {
          pt.update(scrollEnergy, mouseX, mouseY);
        }
      }

      scrollEnergy *= 0.9;
      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    const handleResize = () => {
      setSize();
      // Reinitialize points for new width
      const newSpacingX = width / (numPoints - 1);
      for (const row of rows) {
        for (let i = 0; i < row.points.length; i++) {
          row.points[i].x = i * newSpacingX;
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      canvas.removeEventListener('wheel', handleWheel);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '200px',
        display: 'block',
      }}
    />
  );
}
