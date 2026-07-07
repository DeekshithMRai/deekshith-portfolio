import { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'DeekshithMRai';

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
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('Failed to fetch GitHub data');

        const user = await userRes.json();
        const repos = await reposRes.json();

        const langMap = {};
        await Promise.all(
          repos.slice(0, 6).map(async (repo) => {
            try {
              const langRes = await fetch(repo.languages_url);
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
          setData((prev) => ({
            ...prev,
            loading: false,
            error: err.message,
          }));
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
