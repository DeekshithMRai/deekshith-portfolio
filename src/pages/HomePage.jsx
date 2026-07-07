import { lazy, Suspense } from 'react';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Certificates } from '@/sections/Certificates';
import { Contact } from '@/sections/Contact';

const GitHubSection = lazy(() =>
  import('@/sections/GitHubSection').then((m) => ({ default: m.GitHubSection }))
);

function SectionFallback() {
  return <div className="h-32" aria-hidden="true" />;
}

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Suspense fallback={<SectionFallback />}>
        <GitHubSection />
      </Suspense>
      <Contact />
    </>
  );
}
