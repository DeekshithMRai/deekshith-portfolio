import { motion } from 'framer-motion';
import { ExternalLink, GitFork, Star, Users } from 'lucide-react';
import { useGitHub } from '@/hooks/useGitHub';
import { personal } from '@/data/personal';
import { getLanguageColor } from '@/utils/helpers';
import { SectionHeading, GlassCard } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/layout/MagneticButton';

function LanguageBar({ languages }) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  if (total === 0) return null;

  const sorted = Object.entries(languages).sort(([, a], [, b]) => b - a);

  return (
    <div className="space-y-3">
      <div className="flex h-3 overflow-hidden rounded-full">
        {sorted.map(([lang, bytes]) => (
          <div
            key={lang}
            style={{
              width: `${(bytes / total) * 100}%`,
              backgroundColor: getLanguageColor(lang),
            }}
            title={`${lang}: ${Math.round((bytes / total) * 100)}%`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {sorted.slice(0, 6).map(([lang, bytes]) => (
          <div key={lang} className="flex items-center gap-2 text-sm">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: getLanguageColor(lang) }}
            />
            <span className="text-slate-400">{lang}</span>
            <span className="text-slate-600">{Math.round((bytes / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GitHubSection() {
  const { user, repos, languages, loading, error } = useGitHub();

  return (
    <section id="github" className="section-padding bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="GitHub"
          title="Open source activity"
          description={`Live stats from @${personal.githubUsername}`}
        />

        {loading && (
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 animate-pulse rounded-xl bg-white/5" />
            ))}
          </div>
        )}

        {error && (
          <GlassCard className="text-center">
            <p className="text-slate-400">Unable to load GitHub data. Please try again later.</p>
          </GlassCard>
        )}

        {user && !loading && (
          <>
            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Users, label: 'Followers', value: user.followers },
                { icon: Star, label: 'Public Repos', value: user.public_repos },
                { icon: GitFork, label: 'Following', value: user.following },
                {
                  icon: ExternalLink,
                  label: 'Profile',
                  value: `@${user.login}`,
                  link: user.html_url,
                },
              ].map(({ icon: Icon, label, value, link }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="text-center">
                    <Icon size={20} className="mx-auto text-accent" />
                    <p className="mt-2 text-2xl font-bold text-white">{value}</p>
                    <p className="text-sm text-slate-500">{label}</p>
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs text-primary hover:text-accent"
                      >
                        View profile →
                      </a>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="mb-10">
              <h3 className="mb-4 text-lg font-semibold text-white">Language Distribution</h3>
              <GlassCard>
                <LanguageBar languages={languages} />
              </GlassCard>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Recent Repositories</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="block"
                  >
                    <GlassCard className="h-full">
                      <h4 className="font-semibold text-white transition-colors hover:text-accent">
                        {repo.name}
                      </h4>
                      <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                        {repo.description || 'No description'}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                        {repo.language && (
                          <span className="flex items-center gap-1.5">
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                            />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star size={12} />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={12} />
                          {repo.forks_count}
                        </span>
                      </div>
                    </GlassCard>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <MagneticButton
                variant="secondary"
                onClick={() => window.open(personal.social.github, '_blank')}
              >
                <ExternalLink size={16} />
                View Full GitHub Profile
              </MagneticButton>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
