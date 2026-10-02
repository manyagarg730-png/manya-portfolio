import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 64;
const BG_COLOR = '#c91117';

// Shortest path circular angular interpolation
function lerpAngle(current, target, factor) {
  let diff = (target - current) % (2 * Math.PI);
  if (diff < -Math.PI) diff += 2 * Math.PI;
  if (diff > Math.PI) diff -= 2 * Math.PI;
  return current + diff * factor;
}

export default function CharacterCanvas() {
  const canvasRef = useRef(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const imagesRef = useRef([]);
  const centerImageRef = useRef(null);

  // Dynamic layout & tracking points
  const layoutRef = useRef({
    faceX: window.innerWidth * 0.5,
    faceY: window.innerHeight * 0.62,
    drawX: 0,
    drawY: 0,
    drawW: window.innerWidth,
    drawH: window.innerHeight,
  });

  // Motion state
  const mouseState = useRef({
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.62,
    isInside: false,
    lastMoveTime: Date.now(),
  });

  const currentAngle = useRef(0);

  // Preload all 64 WebP frames + center.webp
  useEffect(() => {
    let count = 0;
    const frameImages = [];

    const handleLoad = () => {
      count++;
      setLoadedCount(count);
      if (count === TOTAL_FRAMES + 1) {
        setIsReady(true);
      }
    };

    // Load 64 directional frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/${i}.webp`;
      img.onload = handleLoad;
      img.onerror = handleLoad;
      frameImages.push(img);
    }
    imagesRef.current = frameImages;

    // Load center neutral frame
    const centerImg = new Image();
    centerImg.src = '/frames/center.webp';
    centerImg.onload = handleLoad;
    centerImg.onerror = handleLoad;
    centerImageRef.current = centerImg;

    return () => {
      imagesRef.current = [];
      centerImageRef.current = null;
    };
  }, []);

  // Responsive full-bleed canvas setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.scale(dpr, dpr);

      // 16:9 1080p full frame
      const imgAspect = 1920 / 1080;
      const screenAspect = w / h;

      let drawW, drawH, drawX, drawY;

      if (screenAspect >= imgAspect) {
        drawW = w;
        drawH = w / imgAspect;
        drawX = 0;
        drawY = (h - drawH) * 0.5;
      } else {
        drawH = h;
        drawW = h * imgAspect;
        drawX = (w - drawW) * 0.5;
        drawY = 0;
      }

      layoutRef.current = {
        drawX,
        drawY,
        drawW,
        drawH,
        faceX: drawX + drawW * 0.5,
        faceY: drawY + drawH * 0.62,
      };
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track cursor coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseState.current.x = e.clientX;
      mouseState.current.y = e.clientY;
      mouseState.current.isInside = true;
      mouseState.current.lastMoveTime = Date.now();
    };

    const handleMouseLeave = () => {
      mouseState.current.isInside = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // 60 FPS Render Loop
  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    let animationFrameId;

    const render = () => {
      const { drawX, drawY, drawW, drawH, faceX, faceY } = layoutRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;

      const dx = mouseState.current.x - faceX;
      const dy = mouseState.current.y - faceY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Deadzone threshold for direct eye contact (~12% screen radius)
      const deadzoneRadius = Math.min(w, h) * 0.12;
      const timeSinceMove = Date.now() - mouseState.current.lastMoveTime;

      const shouldEyeContact = !mouseState.current.isInside || dist < deadzoneRadius || timeSinceMove > 3500;

      let targetFrame = null;

      if (shouldEyeContact) {
        targetFrame = centerImageRef.current;
      } else {
        const targetAngle = Math.atan2(dy, dx);
        currentAngle.current = lerpAngle(currentAngle.current, targetAngle, 0.26);

        let normalizedAngle = currentAngle.current % (2 * Math.PI);
        if (normalizedAngle < 0) normalizedAngle += 2 * Math.PI;

        const frameIndex = Math.round((normalizedAngle / (2 * Math.PI)) * TOTAL_FRAMES) % TOTAL_FRAMES;
        targetFrame = imagesRef.current[frameIndex];
      }

      // Draw EXACTLY ONE frame at 100% opacity covering edge-to-edge
      if (targetFrame && targetFrame.complete && targetFrame.naturalWidth > 0) {
        ctx.fillStyle = BG_COLOR;
        ctx.fillRect(0, 0, w, h);
        ctx.globalAlpha = 1.0;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(targetFrame, drawX, drawY, drawW, drawH);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isReady]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden bg-[#c91117]">
      {/* Loading placeholder */}
      {!isReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#c91117] z-20 transition-opacity duration-500">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin mb-3"></div>
          <span className="text-white/90 text-xs tracking-widest uppercase font-medium">
            Loading Experience ({Math.round((loadedCount / (TOTAL_FRAMES + 1)) * 100)}%)
          </span>
        </div>
      )}

      {/* Rock-solid motionless canvas */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{
          transform: 'none',
          backgroundColor: BG_COLOR,
        }}
      />
    </div>
  );
}
