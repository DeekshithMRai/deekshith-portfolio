export function formatNumber(num) {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
}

export function getLanguageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    PHP: '#4F5D95',
    HTML: '#e34c26',
    CSS: '#563d7c',
    React: '#61dafb',
    Vue: '#41b883',
    Go: '#00ADD8',
    Rust: '#dea584',
    Shell: '#89e051',
  };
  return colors[language] || '#4F46E5';
}
