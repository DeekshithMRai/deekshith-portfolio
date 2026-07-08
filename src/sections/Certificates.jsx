import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Search, X } from 'lucide-react';
import { certificates, hasCertificates } from '@/data/certificates';
import { SectionHeading, GlassCard } from '@/components/ui/SectionHeading';
import { cn } from '@/utils/cn';

export function Certificates() {
  const [search, setSearch] = useState('');
  const [activeOrg, setActiveOrg] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const organizations = useMemo(() => {
    const orgs = Array.from(new Set(certificates.map((item) => item.issuer)));
    return ['All', ...orgs];
  }, []);

  const featuredTitles = useMemo(
    () => [
      'BE Degree Certificate',
      'Experience Letter',
      'Internship Experience',
      'Department Treasurer',
      'IT Specialist Python',
      'NPTEL Python for Data Science',
      'Programming in Java',
      'Intel Machine Learning',
    ],
    []
  );

  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesOrg = activeOrg === 'All' || cert.issuer === activeOrg;
      const matchesSearch =
        cert.title.toLowerCase().includes(search.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(search.toLowerCase());
      const matchesFeatured = featuredTitles.includes(cert.title);

      if (!search && activeOrg === 'All') {
        return matchesFeatured;
      }

      return matchesOrg && matchesSearch;
    });
  }, [activeOrg, featuredTitles, search]);

  return (
    <section id="certificates" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Certificates"
          title="Credentials & achievements"
          description="A polished certificate gallery with search, organization filters, and quick preview support."
        />

        {hasCertificates ? (
          <>
            <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-accent" />
                  <span>Showing {filteredCertificates.length} of {certificates.length} certificates</span>
                </div>
                {!search && activeOrg === 'All' && (
                  <p className="text-slate-500">Showing featured certificates only. Search to reveal the rest.</p>
                )}
              </div>
              <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-background/50 px-3 py-2 text-sm text-slate-300">
                <Search size={16} className="text-accent" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search certificates"
                  className="w-full bg-transparent outline-none placeholder:text-slate-500 sm:w-64"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                {organizations.map((org) => (
                  <button
                    key={org}
                    onClick={() => setActiveOrg(org)}
                    className={cn(
                      'rounded-full px-3 py-1.5 text-sm transition-colors',
                      activeOrg === org
                        ? 'bg-primary text-white'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    {org}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 pb-4 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCertificates.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full shrink-0 md:w-auto"
                >
                  <GlassCard className="group h-full border-white/10 bg-white/[0.05] p-0">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start gap-3">
                        <Award size={18} className="mt-0.5 shrink-0 text-accent" />
                        <div>
                          <h3 className="font-semibold text-white">{cert.title}</h3>
                          <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{cert.date}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:bg-primary/20 hover:text-white"
                        >
                          Preview
                        </button>
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm text-primary transition-colors hover:bg-primary/20"
                        >
                          View
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-lg text-center">
            <GlassCard className="border-dashed border-white/10">
              <Award size={40} className="mx-auto text-slate-600" />
              <p className="mt-4 text-slate-400">No certificates matched your current search.</p>
            </GlassCard>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 py-8 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-3 shadow-[0_20px_120px_rgba(0,0,0,0.45)]"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[75vh] w-full rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
