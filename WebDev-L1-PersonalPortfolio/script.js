document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobilenav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active section highlighting (rail nav) ---------- */
  const sections = document.querySelectorAll('.sheet[id]');
  const railLinks = document.querySelectorAll('.railnav__link');

  if (sections.length && railLinks.length && 'IntersectionObserver' in window) {
    const linkById = new Map();
    railLinks.forEach((link) => {
      const id = link.getAttribute('href').replace('#', '');
      linkById.set(id, link);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkById.get(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            railLinks.forEach((l) => l.classList.remove('is-active'));
            link.classList.add('is-active');
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* ---------- Hero "boot log" signature moment ---------- */
  const bootEl = document.getElementById('heroBoot');
  if (bootEl) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lines = [
      { k: 'stack', v: 'react / node / express / mongo' },
      { k: 'status', v: 'ok', ok: true },
      { k: 'location', v: 'chennai, in' },
      { k: 'availability', v: 'open_to_work', ok: true },
    ];

    if (prefersReducedMotion) {
      bootEl.innerHTML = lines
        .map(
          (l) =>
            `<span class="bootline">&gt; ${l.k}: <span class="${l.ok ? 'ok' : 'k'}">${l.v}</span></span>`
        )
        .join('');
    } else {
      let lineIndex = 0;
      let charIndex = 0;
      let currentLineEl = null;

      const typeNext = () => {
        if (lineIndex >= lines.length) {
          const cursor = document.createElement('span');
          cursor.className = 'cursor';
          bootEl.appendChild(cursor);
          return;
        }

        const line = lines[lineIndex];
        const prefix = `> ${line.k}: `;

        if (charIndex === 0) {
          currentLineEl = document.createElement('span');
          currentLineEl.className = 'bootline';
          bootEl.appendChild(currentLineEl);
        }

        const fullText = prefix + line.v;

        if (charIndex < fullText.length) {
          currentLineEl.textContent = fullText.slice(0, charIndex + 1);
          charIndex++;
          setTimeout(typeNext, 14);
        } else {
          currentLineEl.innerHTML = `${prefix}<span class="${line.ok ? 'ok' : 'k'}">${line.v}</span>`;
          lineIndex++;
          charIndex = 0;
          setTimeout(typeNext, 220);
        }
      };

      setTimeout(typeNext, 500);
    }
  }
});
