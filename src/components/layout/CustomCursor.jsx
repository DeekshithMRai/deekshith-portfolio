import { useEffect, useState } from 'react';
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return undefined;

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="pointer"]')
      ) {
        setIsHovering(true);
      }
    };

    const handleOut = () => setIsHovering(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, [isMobile, prefersReducedMotion]);

  if (isMobile || prefersReducedMotion) return null;

  return (
    <>
      <div
        className="custom-cursor pointer-events-none fixed z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      >
        <div
          className="rounded-full border border-cyan-300/80 bg-cyan-300/20 shadow-[0_0_18px_rgba(34,211,238,0.35)] transition-all duration-200 ease-out"
          style={{
            width: isHovering ? 44 : 12,
            height: isHovering ? 44 : 12,
            opacity: isHovering ? 0.75 : 0.95,
            transform: isHovering ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 rounded-full bg-white transition-all duration-200 ease-out"
          style={{
            width: isHovering ? 6 : 3,
            height: isHovering ? 6 : 3,
            transform: isHovering ? 'translate(-50%, -50%) scale(1.15)' : 'translate(-50%, -50%)',
          }}
        />
      </div>
      <style>{`body { cursor: none; } a, button, [data-cursor="pointer"] { cursor: none; }`}</style>
    </>
  );
}
