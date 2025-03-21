
import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;
    
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);
    
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    
    const matrix = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, w, h);
      
      // Green characters
      ctx.fillStyle = '#0fa';
      ctx.font = '15pt monospace';
      
      // For each column
      ypos.forEach((y, ind) => {
        // Generate a random character
        const text = String.fromCharCode(Math.random() * 128);
        
        // x coordinate of the column, y coordinate is the value of ypos at ind
        const x = ind * 20;
        ctx.fillText(text, x, y);
        
        // If the character has overflown or randomly based on a probability
        if (y > 100 + Math.random() * 10000) {
          ypos[ind] = 0;
        } else {
          ypos[ind] = y + 20;
        }
      });
    };
    
    const interval = setInterval(matrix, 50);
    
    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    window.addEventListener('resize', resizeHandler);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
    />
  );
};

export default MatrixBackground;
