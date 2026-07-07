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
        className="custom-cursor pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      >
        <div
          className="rounded-full border border-white transition-all duration-200 ease-out"
          style={{
            width: isHovering ? 48 : 12,
            height: isHovering ? 48 : 12,
            opacity: isHovering ? 0.5 : 1,
          }}
        />
      </div>
      <style>{`body { cursor: none; } a, button { cursor: none; }`}</style>
    </>
  );
}
