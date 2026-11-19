(() => {
  const root = document.documentElement;
  root.classList.add('js');

  const header = document.getElementById('siteHeader');
  const hasHero = !!document.querySelector('.hero, .place-hero');

  // ---- header: transparent over the hero, solid once scrolled ----
  const syncHeader = () => {
    if (!header) return;
    const solid = !hasHero || window.scrollY > 60;
    header.classList.toggle('is-solid', solid);
    root.style.setProperty('--header-h', `${header.offsetHeight}px`);
  };
  document.addEventListener('scroll', syncHeader, { passive: true });
  window.addEventListener('resize', syncHeader, { passive: true });
  syncHeader();

  // ---- mobile menu ----
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('primaryNav');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    menuBtn?.setAttribute('aria-expanded', String(open));
    menuBtn?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  menuBtn?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); menuBtn?.focus(); }
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  // ---- scroll spy (home page: links whose href is a same-page #id) ----
  const links = [...document.querySelectorAll('.nav-link')].filter((l) => l.getAttribute('href')?.startsWith('#'));
  const sections = links.map((l) => document.getElementById(l.getAttribute('href').slice(1))).filter(Boolean);
  if (sections.length) {
    const spy = () => {
      const pos = window.scrollY + (header?.offsetHeight || 0) + window.innerHeight * 0.25;
      let current = sections[0].id;
      sections.forEach((sec) => { if (sec.offsetTop <= pos) current = sec.id; });
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
    };
    document.addEventListener('scroll', spy, { passive: true });
    spy();
  }

  // ---- reveal on scroll ----
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---- gallery lightbox (destination pages) ----
  const gallery = document.querySelector('[data-gallery]');
  const dialog = document.getElementById('lightbox');
  if (gallery && dialog && typeof dialog.showModal === 'function') {
    const items = [...gallery.querySelectorAll('button')];
    const img = dialog.querySelector('img');
    const cap = dialog.querySelector('figcaption');
    let index = 0;
    const show = (i) => {
      index = (i + items.length) % items.length;
      const src = items[index].querySelector('img');
      img.src = src.currentSrc || src.src;
      img.alt = src.alt;
      cap.textContent = `${src.alt} (${index + 1} of ${items.length})`;
    };
    items.forEach((btn, i) => btn.addEventListener('click', () => { show(i); dialog.showModal(); }));
    dialog.querySelector('.lb-close').addEventListener('click', () => dialog.close());
    dialog.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
    dialog.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
