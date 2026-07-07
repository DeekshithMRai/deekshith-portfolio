import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Loader } from '@/components/layout/Loader';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { HomePage } from '@/pages/HomePage';
import { useLenis } from '@/hooks/useLenis';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { initGSAP } from '@/animations/gsapSetup';

export default function App() {
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  useLenis(!prefersReducedMotion);

  useEffect(() => {
    initGSAP();
  }, []);

  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HomePage />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
