'use client'
import { useEffect, useRef } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    import('../public/wasm').then(({ draw_circle }) => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
                    // Set the canvas background to red
                    ctx.fillStyle = 'red';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
          canvas.onclick = (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            draw_circle(ctx, x, y);
          };
        }
      }
    });
  }, []);

  return <canvas ref={canvasRef} width={500} height={500} />;
}
