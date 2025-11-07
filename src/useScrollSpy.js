
import { useEffect } from 'react';

export default function useScrollSpy({ root = null, rootMargin = '0px', threshold = 0.6 } = {}) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (window.location.hash !== '#' + id) {
              history.replaceState(null, '', '#' + id);
            }
            // optional: nav active class toggling
            document.querySelectorAll('nav a').forEach((a) => {
              a.classList.toggle('active', a.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { root, rootMargin, threshold }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);
}
