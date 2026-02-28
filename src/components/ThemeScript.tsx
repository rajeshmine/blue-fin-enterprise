"use client";

/**
 * Inline script that runs before React hydrates to set the dark class on <html>.
 * Prevents flash of wrong theme. Respects system preference or localStorage override.
 */
const themeScript = `
(function() {
  const stored = localStorage.theme;
  const isDark = stored === 'dark' || (stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', isDark);
})();
`;

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}
