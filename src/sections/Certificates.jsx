import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificates, hasCertificates } from '@/data/certificates';
import { SectionHeading, GlassCard } from '@/components/ui/SectionHeading';
import { initGSAP, gsap } from '@/animations/gsapSetup';

export function Certificates() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!hasCertificates || !scrollRef.current) return undefined;

    initGSAP();
    const ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        x: () => -(scrollRef.current.scrollWidth - window.innerWidth + 64),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollRef.current,
          start: 'top 80%',
          end: '+=2000',
          pin: true,
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="certificates" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Certificates"
          title="Credentials & achievements"
          description={
            hasCertificates
              ? 'Professional certifications and credentials.'
              : 'Certificate section ready — add your credentials to src/data/certificates.js'
          }
        />

        {hasCertificates ? (
          <div ref={scrollRef} className="flex gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-80 shrink-0"
              >
                <GlassCard className="h-full">
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="mb-4 aspect-video w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="flex items-start gap-3">
                    <Award size={20} className="shrink-0 text-accent" />
                    <div>
                      <h3 className="font-semibold text-white">{cert.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                      <p className="text-xs text-slate-500">{cert.date}</p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:text-accent"
                        >
                          View credential
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-lg text-center">
            <GlassCard className="border-dashed border-white/10">
              <Award size={40} className="mx-auto text-slate-600" />
              <p className="mt-4 text-slate-400">
                {/* TODO: Add your certificates to src/data/certificates.js */}
                No certificates added yet. Update{' '}
                <code className="text-accent">src/data/certificates.js</code> with your
                credentials.
              </p>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
