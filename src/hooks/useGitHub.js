import { useEffect, useState } from 'react';
import { personal } from '@/data/personal';
import { projects } from '@/data/projects';

const GITHUB_USERNAME = 'DeekshithMRai';

function buildFallbackData() {
  const languageMap = {};

  projects.forEach((project) => {
    project.techStack.forEach((tech) => {
      languageMap[tech] = (languageMap[tech] || 0) + 1;
    });
  });

  const fallbackRepos = projects.slice(0, 6).map((project) => ({
    id: project.id,
    name: project.title,
    description: project.shortDescription,
    html_url: project.github,
    language: project.techStack[0] || 'Various',
    stargazers_count: 0,
    forks_count: 0,
  }));

  return {
    user: {
      login: GITHUB_USERNAME,
      followers: 0,
      public_repos: projects.length,
      following: 0,
      html_url: personal.social.github,
    },
    repos: fallbackRepos,
    languages: languageMap,
    error: 'GitHub API is temporarily unavailable. Showing portfolio fallback data.',
  };
}

export function useGitHub() {
  const [data, setData] = useState({
    user: null,
    repos: [],
    languages: {},
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchGitHub() {
      try {
        const headers = {
          'User-Agent': 'Mozilla/5.0',
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        };

        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, {
            headers,
          }),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API request failed');

        const user = await userRes.json();
        const repos = await reposRes.json();

        const langMap = {};
        await Promise.all(
          repos.slice(0, 6).map(async (repo) => {
            try {
              const langRes = await fetch(repo.languages_url, { headers });
              if (langRes.ok) {
                const langs = await langRes.json();
                Object.entries(langs).forEach(([lang, bytes]) => {
                  langMap[lang] = (langMap[lang] || 0) + bytes;
                });
              }
            } catch {
              /* skip individual repo language errors */
            }
          })
        );

        if (!cancelled) {
          setData({
            user,
            repos: repos.filter((r) => !r.fork).slice(0, 6),
            languages: langMap,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        if (!cancelled) {
          const fallback = buildFallbackData();
          setData({
            user: fallback.user,
            repos: fallback.repos,
            languages: fallback.languages,
            loading: false,
            error: fallback.error,
          });
        }
      }
    }

    fetchGitHub();
    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}
