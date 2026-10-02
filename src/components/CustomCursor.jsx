import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const requestRef = useRef(null);

  useEffect(() => {
    // Check if touch device or coarse pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      if (!visible) setVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check hover targets
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, .hover-target, .glass-card');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing animation loop for ring
    const animate = () => {
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        const scale = isHovered ? 1.7 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [visible, isHovered]);

  if (isTouchDevice || !visible) return null;

  return (
    <>
      {/* Glowing center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-9999 shadow-[0_0_10px_2px_rgba(255,255,255,0.9)] transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />
      {/* Soft translucent trailing aura ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-9998 transition-[width,height,border-color,background-color] duration-200 ease-out ${
          isHovered
            ? 'w-12 h-12 border border-white/60 bg-white/20 backdrop-blur-[2px] shadow-[0_0_20px_rgba(255,255,255,0.3)]'
            : 'w-8 h-8 border border-white/40 bg-white/5 backdrop-blur-[0.5px]'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
