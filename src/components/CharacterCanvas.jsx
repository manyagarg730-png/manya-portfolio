import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 64;
const BG_COLOR = '#ca1318';

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

  // Dynamic face center and drawing dimensions
  const layoutRef = useRef({
    faceX: window.innerWidth * 0.5,
    faceY: window.innerHeight * 0.38,
    drawX: 0,
    drawY: 0,
    drawW: window.innerWidth,
    drawH: window.innerHeight,
  });

  // Motion state
  const mouseState = useRef({
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.38,
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

  // Responsive layout & canvas sizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.scale(dpr, dpr);

      // Calculate natural, un-zoomed proportions
      const imgAspect = 1280 / 720;
      let drawW, drawH, drawX, drawY;

      if (w >= 1024) {
        // Desktop / Laptop: scale naturally without zooming in excessively
        // Height between 78% and 86% of viewport height
        drawH = Math.min(h * 0.88, w / imgAspect);
        drawW = drawH * imgAspect;
        // Shift character slightly to the right of center to leave generous room for hero text
        drawX = (w - drawW) * 0.58;
        // Bottom-anchored so her shoulders rest naturally at the bottom of the hero section
        drawY = h - drawH;
      } else if (w >= 640) {
        // Tablet
        drawH = Math.min(h * 0.80, w / imgAspect);
        drawW = drawH * imgAspect;
        drawX = (w - drawW) * 0.52;
        drawY = h - drawH;
      } else {
        // Mobile (360px - 480px): Natural fit, centered and properly proportioned
        drawH = Math.min(h * 0.65, 520);
        drawW = drawH * imgAspect;
        drawX = (w - drawW) * 0.5;
        // Position in upper-mid area so bottom text does not collide
        drawY = h * 0.12;
      }

      layoutRef.current = {
        drawX,
        drawY,
        drawW,
        drawH,
        faceX: drawX + drawW * 0.5,
        faceY: drawY + drawH * 0.38,
      };
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track mouse/pointer coordinates
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
      const w = window.innerWidth;
      const h = window.innerHeight;
      const { drawX, drawY, drawW, drawH, faceX, faceY } = layoutRef.current;

      const dx = mouseState.current.x - faceX;
      const dy = mouseState.current.y - faceY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Deadzone threshold for direct eye contact (~12% of screen dimension)
      const deadzoneRadius = Math.min(w, h) * 0.12;
      const timeSinceMove = Date.now() - mouseState.current.lastMoveTime;

      // Check if within deadzone or idle for > 3.5s or mouse outside window
      const shouldEyeContact = !mouseState.current.isInside || dist < deadzoneRadius || timeSinceMove > 3500;

      let targetFrame = null;

      if (shouldEyeContact) {
        targetFrame = centerImageRef.current;
      } else {
        // Target angle from face center to cursor (in radians, [-PI, PI])
        const targetAngle = Math.atan2(dy, dx);

        // Circular lerp with fast response factor (~0.26) for zero lag
        currentAngle.current = lerpAngle(currentAngle.current, targetAngle, 0.26);

        // Normalize angle to [0, 2*PI)
        let normalizedAngle = currentAngle.current % (2 * Math.PI);
        if (normalizedAngle < 0) normalizedAngle += 2 * Math.PI;

        // Map angle to frame index 0..63
        const frameIndex = Math.round((normalizedAngle / (2 * Math.PI)) * TOTAL_FRAMES) % TOTAL_FRAMES;
        targetFrame = imagesRef.current[frameIndex];
      }

      // Draw solid background first for seamless color match
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, w, h);

      // Draw EXACTLY ONE frame at 100% opacity on canvas with zero ghosting
      if (targetFrame && targetFrame.complete && targetFrame.naturalWidth > 0) {
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
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden bg-[#ca1318]">
      {/* Loading placeholder */}
      {!isReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#ca1318] z-20 transition-opacity duration-500">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin mb-3"></div>
          <span className="text-white/90 text-xs tracking-widest uppercase font-medium">
            Loading Experience ({Math.round((loadedCount / (TOTAL_FRAMES + 1)) * 100)}%)
          </span>
        </div>
      )}

      {/* Rock-solid motionless canvas with NO 3D transform */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{
          backgroundColor: BG_COLOR,
          transform: 'none',
        }}
      />

      {/* Subtle bottom gradient overlay for maximum text contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(10,0,2,0.35)_100%)]" />
    </div>
  );
}
