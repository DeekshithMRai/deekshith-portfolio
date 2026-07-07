import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

function FloatingCrystal({ mouse }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * 0.15 + mouse.current.y * 0.3;
    meshRef.current.rotation.y = t * 0.2 + mouse.current.x * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#4F46E5"
          emissive="#22D3EE"
          emissiveIntensity={0.15}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function Scene({ mouse }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4F46E5" />
      <pointLight position={[-10, -5, -5]} intensity={0.5} color="#22D3EE" />
      <FloatingCrystal mouse={mouse} />
      <Sparkles count={80} scale={12} size={2} speed={0.3} color="#22D3EE" />
      <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={0.5} />
    </>
  );
}

function FallbackBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
    </div>
  );
}

export function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (isMobile || prefersReducedMotion) {
    return <FallbackBackground />;
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  return (
    <div className="absolute inset-0" onMouseMove={handleMouseMove}>
      <Suspense fallback={<FallbackBackground />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Scene mouse={mouse} />
        </Canvas>
      </Suspense>
    </div>
  );
}
