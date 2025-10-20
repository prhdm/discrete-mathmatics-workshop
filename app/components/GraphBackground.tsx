'use client';

import { useEffect, useRef, FC } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const getConfig = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return {
    nodeCount: isMobile ? 25 : 50,
    maxDistance: isMobile ? 120 : 150,
    nodeRadius: isMobile ? 2 : 3,
    nodeSpeed: 0.5,
    nodeColors: [
      'rgba(255, 182, 193, 0.6)',
      'rgba(173, 216, 230, 0.6)',
      'rgba(255, 255, 224, 0.6)',
      'rgba(144, 238, 144, 0.6)',
      'rgba(221, 160, 221, 0.6)',
      'rgba(255, 218, 185, 0.6)',
    ],
    edgeColor: isMobile ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.15)',
  };
};

export const GraphBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const config = getConfig();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes = initializeNodes(canvas, config);
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateNodes(nodes, canvas, config);
      drawEdges(ctx, nodes, config);
      drawNodes(ctx, nodes, config);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
      aria-hidden="true"
    />
  );
};

const initializeNodes = (canvas: HTMLCanvasElement, config: ReturnType<typeof getConfig>): Node[] => {
  const nodes: Node[] = [];
  for (let i = 0; i < config.nodeCount; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * config.nodeSpeed,
      vy: (Math.random() - 0.5) * config.nodeSpeed,
      radius: config.nodeRadius,
    });
  }
  return nodes;
};

const updateNodes = (nodes: Node[], canvas: HTMLCanvasElement, config: ReturnType<typeof getConfig>) => {
  nodes.forEach((node) => {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

    node.x = Math.max(0, Math.min(canvas.width, node.x));
    node.y = Math.max(0, Math.min(canvas.height, node.y));
  });
};

const drawEdges = (ctx: CanvasRenderingContext2D, nodes: Node[], config: ReturnType<typeof getConfig>) => {
  ctx.strokeStyle = config.edgeColor;
  ctx.lineWidth = 1;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.maxDistance) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }
};

const drawNodes = (ctx: CanvasRenderingContext2D, nodes: Node[], config: ReturnType<typeof getConfig>) => {
  nodes.forEach((node, index) => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fillStyle = config.nodeColors[index % config.nodeColors.length];
    ctx.fill();
  });
};
