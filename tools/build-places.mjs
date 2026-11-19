// Generates the destination detail pages in /places from the data below.
// Usage:  node tools/build-places.mjs
// No dependencies. Edit the data, re-run, commit the generated HTML.
// IMPORTANT: only add facts that are confirmed — fees/schedules that are not
// known should say so and be flagged with `confirm: true`.

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'places');
mkdirSync(OUT, { recursive: true });

const img = (f) => '../Images/' + encodeURI(f);
const mapsSearch = (q) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
const mapsEmbed = (q) => 'https://www.google.com/maps?q=' + encodeURIComponent(q) + '&z=14&output=embed';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const places = [
  {
    slug: 'coca-beach',
    name: 'Coca Beach',
    category: 'Coastal Escape',
    hero: { src: 'coca2.jpg', alt: 'Nipa cottages beneath coconut palms on the sand at Coca Beach.' },
    tagline: 'Open-air cottages, calm water and an easy stretch of sand — Sapao’s quieter coastal treasure.',
    lead: 'One of Sapao’s quieter coastal treasures, known for its open-air cottages, calm atmosphere, and easy access from the barangay.',
    story: [
      'Coca Beach is an inviting choice for families or couples after a simple beach day away from the town center — a place to rest in the shade, swim in calm water, and stay until the light softens.',
      'According to local stories, the beach became a community destination after the Sison family opened the area for public use, turning a private family space into a welcoming spot for gatherings and rest.',
    ],
    info: [
      { k: 'Cottage rental', v: '₱500 – ₱1,000' },
      { k: 'Day-use access', v: '₱10 per visitor' },
      { k: 'Getting there', v: 'Tricycle from Guiuan, then a short trail' },
      { k: 'Best for', v: 'Families, couples, quiet beach days' },
    ],
    feesNote: 'Rates were shared by the community and may change — confirm on arrival.',
    directions: 'From Guiuan town proper, take a tricycle along the barangay road to Sapao. The beach is reached by a short trail from the road.',
    reminders: [
      'Bring small bills for the day-use fee and cottage rental.',
      'Cottage availability can change on weekends and holidays — ask locally before you go.',
      'Take your trash home with you; the beach is maintained by local families.',
    ],
    mapQuery: 'Coca Beach Sapao Guiuan Eastern Samar',
    gallery: [
      ['coca1.jpg', 'Coca Beach shoreline view.'],
      ['IMG_1123.jpg', 'A hand-painted welcome sign for Coca Beach nailed to a palm trunk.'],
      ['coca3.jpg', 'A wide beach view from the shore at Coca Beach.'],
      ['coca4.jpg', 'Coca Beach scenery with the ocean and open-air cottages.'],
      ['coca5.jpg', 'The shoreline at Coca Beach.'],
      ['coca6.jpg', 'Coca Beach surroundings.'],
      ['coca7.jpg', 'Coca Beach coastline.'],
      ['coca8.jpg', 'Coca Beach scenery.'],
      ['coca9.jpg', 'A view along Coca Beach.'],
    ],
  },
  {
    slug: 'dumpao-beach',
    name: 'Dumpao Beach',
    category: 'Coastal Escape',
    hero: { src: 'dumpao 2.jpg', alt: 'Wide view of Dumpao Beach with shoreline and local cottages.' },
    tagline: 'A calm, spacious shoreline shaped by typhoons, resilience and rebuilding.',
    lead: 'A calm and spacious shoreline that attracts visitors seeking a quiet day by the sea.',
    story: [
      'Its simple cottages, open-air setting, and peaceful atmosphere make Dumpao well suited to family trips, beach picnics, and community gatherings.',
      'Local stories remember the area as a place shaped by typhoons, resilience, and rebuilding — even after Typhoon Yolanda, Dumpao remained a meaningful place for residents and visitors alike.',
    ],
    info: [
      { k: 'Cottage rental', v: 'Rates vary — ask locally', confirm: true },
      { k: 'Best for', v: 'Family trips & picnics' },
      { k: 'Getting there', v: 'By road from Guiuan, with local guidance' },
    ],
    feesNote: 'Cottage rates are not published — confirm with residents on arrival.',
    directions: 'Dumpao is reached by road from Guiuan town proper. Ask residents in Sapao for directions to the beach entrance.',
    reminders: [
      'Coordinate with residents for cottage rates before settling in.',
      'Bring your own food and water for a picnic day.',
      'Respect the shoreline — it is still being cared for by the community after past typhoons.',
    ],
    mapQuery: 'Dumpao Beach Sapao Guiuan Eastern Samar',
    gallery: [
      ['dumpao2.jpg', 'A coastal view showing the natural setting of Dumpao Beach.'],
      ['dumpao1.jpg', 'A shoreline landscape highlighting the beach area at Dumpao.'],
      ['dumpao.jpg', 'A beach scene with huts and a broad shoreline at Dumpao.'],
      ['dumpao5.jpg', 'Dumpao Beach shoreline.'],
    ],
  },
  {
    slug: 'sitio-san-roque',
    name: 'Sitio San Roque',
    category: 'Craft & Heritage',
    hero: { src: 'sanroque.jpg', alt: 'A small chapel framed by coconut palms in Sitio San Roque.' },
    tagline: 'Blacksmiths, coconut farmers and shell artisans — traditions handed down through generations.',
    lead: 'Home to Sapao’s blacksmiths, coconut farmers, and shell and scabbard artisans.',
    story: [
      'Sitio San Roque keeps traditions that have been passed down through generations. Here you can meet the Panday (blacksmiths), the Paraglukad (coconut farmers), and the shell and scabbard crafters whose work carries the identity of the community.',
      'Every August 20th, the Sr. San Roque fiesta brings the whole sitio together in celebration.',
    ],
    info: [
      { k: 'Known for', v: 'Blacksmithing, coconut farming, shell & scabbard craft' },
      { k: 'Fiesta', v: 'Sr. San Roque — August 20' },
      { k: 'Visiting artisans', v: 'Coordinate with residents', confirm: true },
    ],
    feesNote: 'No entrance fee information is available. Ask locally before visiting workshops.',
    directions: 'Sitio San Roque is part of Barangay Sapao. From Guiuan town proper, travel to Sapao by tricycle and ask residents for the way to the sitio.',
    reminders: [
      'Workshops are working homes — ask permission before taking photos.',
      'Buying crafts directly from artisans supports local livelihoods.',
      'Visiting around the August 20 fiesta? Expect the sitio to be busy and festive.',
    ],
    external: { href: 'https://sitio-san-roque.netlify.app', label: 'Visit the Sitio San Roque website' },
    mapQuery: 'Sapao Guiuan Eastern Samar',
    gallery: [],
  },
  {
    slug: 'pagasa-dost',
    name: 'PAGASA-DOST Weather Station',
    shortName: 'PAGASA-DOST',
    category: 'Science & Landmark',
    hero: { src: 'IMG_3344.jpg', alt: 'The PAGASA-DOST weather station building in Sapao set against a hillside view.' },
    tagline: 'An elevated weather station that helps the coast prepare for strong winds, typhoons and heavy rain.',
    lead: 'A practical and important facility for the barangay and nearby communities.',
    story: [
      'Its elevated location helps monitor changing weather conditions and supports disaster preparedness during strong winds, typhoons, and heavy rain.',
      'The station also educates residents about weather alerts, rainfall advisories, and climate updates that help fisherfolk, farmers, and families plan their days safely.',
    ],
    info: [
      { k: 'Entrance fee', v: 'None — guided visits only' },
      { k: 'Access', v: 'Official or coordinated visits', confirm: true },
      { k: 'Getting there', v: 'Best reached with a local guide' },
    ],
    feesNote: 'This is an active government facility. Visits must be coordinated in advance.',
    directions: 'The station sits on elevated ground above Sapao and is visible from the barangay. Go with a local guide and coordinate your visit beforehand.',
    reminders: [
      'Do not enter the facility without prior coordination.',
      'Follow staff instructions and respect restricted areas.',
      'The tower is a striking landmark to photograph from the barangay below.',
    ],
    mapQuery: 'PAGASA DOST Sapao Guiuan Eastern Samar',
    gallery: [
      ['IMG_4432.jpg', 'The PAGASA-DOST radar tower rising above the trees of Sapao.'],
      ['radar1.jpg', 'Weather monitoring equipment and facility structures at the station.'],
      ['radar3.jpg', 'A close view of radar-related equipment at the PAGASA-DOST station.'],
      ['radar2.jpg', 'The weather station in Sapao from a wider vantage point.'],
      ['radar4.jpg', 'PAGASA-DOST weather monitoring equipment.'],
    ],
  },
  {
    slug: 'sta-cruz-parish',
    name: 'Sta. Cruz Parish',
    category: 'Faith & Community',
    hero: { src: 'IMG_1128.jpg', alt: 'The facade of Sta. Cruz Parish in Sapao on a calm day.' },
    tagline: 'The spiritual heart of Barangay Sapao — worship, festivals, service and shared tradition.',
    lead: 'The spiritual heart of Barangay Sapao, bringing residents together through worship, festivals, service, and shared tradition.',
    story: [
      'Its annual fiesta is one of the most beloved community events, drawing families and visitors from near and far.',
      'Beyond worship, the parish is known for its youth ministry and service programs, keeping the community connected through faith, culture, and mutual care.',
    ],
    info: [
      { k: 'Entrance', v: 'Free — donations welcome' },
      { k: 'Masses', v: 'Held regularly, daytime hours', confirm: true },
      { k: 'Special events', v: 'Confirm schedule locally', confirm: true },
    ],
    feesNote: 'Mass times and fiesta dates are not published here — confirm with the parish or barangay office.',
    directions: 'The parish is in Barangay Sapao, reachable by tricycle from Guiuan town proper. Residents can point you to the church.',
    reminders: [
      'Dress modestly and keep noise low during services.',
      'Ask before photographing inside the church, especially during Mass.',
      'Confirm fiesta dates locally if you plan your visit around the celebration.',
    ],
    mapQuery: 'Sta. Cruz Parish Sapao Guiuan Eastern Samar',
    gallery: [
      ['sta.cruz parish.jpg', 'The church building at Sta. Cruz Parish in Sapao.'],
      ['IMG_1130.jpg', 'A scene inside Sta. Cruz Parish.'],
      ['sta1.jpg', 'Sta. Cruz Parish.'],
    ],
  },
];

const ICON_ARROW = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_EXT = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14 14 6m0 0H7.5M14 6v6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const header = () => `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" id="siteHeader">
  <div class="container">
    <a class="brand" href="../index.html">
      <img src="../Images/logo.jpg" alt="" width="40" height="40">
      <span class="brand-name">Sapao Coast<small>Guiuan · Eastern Samar</small></span>
    </a>
    <nav class="primary-nav" id="primaryNav" aria-label="Primary">
      <ul>
        <li><a href="../index.html" class="nav-link">Home</a></li>
        <li><a href="../index.html#explore" class="nav-link">Explore Sapao</a></li>
        <li><a href="../index.html#places" class="nav-link" aria-current="page">Places to Visit</a></li>
        <li><a href="../index.html#about" class="nav-link">About Sapao</a></li>
        <li class="nav-cta-item"><a href="../index.html#visit" class="btn btn-primary nav-cta">Plan a Visit</a></li>
      </ul>
    </nav>
    <button class="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primaryNav"><span></span></button>
  </div>
</header>`;

const footer = () => `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a class="brand" href="../index.html"><img src="../Images/logo.jpg" alt="" width="40" height="40" loading="lazy"><span class="brand-name">Sapao Coast</span></a>
        <p>A coastal barangay in Guiuan, Eastern Samar — sharing its beaches, landmarks and community traditions with travelers who want a slower kind of visit.</p>
      </div>
      <nav aria-label="Footer: site">
        <h2>Explore</h2>
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="../index.html#explore">Explore Sapao</a></li>
          <li><a href="../index.html#experiences">Experiences</a></li>
          <li><a href="../index.html#about">About Sapao</a></li>
          <li><a href="../index.html#visit">Plan a Visit</a></li>
        </ul>
      </nav>
      <nav aria-label="Footer: destinations">
        <h2>Places to visit</h2>
        <ul>
          ${places.map((p) => `<li><a href="${p.slug}.html">${esc(p.shortName || p.name)}</a></li>`).join('\n          ')}
        </ul>
      </nav>
      <div>
        <h2>Location</h2>
        <p>Barangay Sapao<br>Guiuan, Eastern Samar<br>Philippines</p>
        <p>For current access, cottage availability and fiesta dates, contact the Barangay Sapao office.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year">2026</span> Sapao Coast — Barangay Sapao, Guiuan, Eastern Samar</span>
      <span>Made for the community of Sapao</span>
    </div>
  </div>
</footer>`;

function page(p, i) {
  const prev = places[(i - 1 + places.length) % places.length];
  const next = places[(i + 1) % places.length];
  const hasConfirm = p.info.some((x) => x.confirm);
  const gallery = p.gallery.length
    ? `<section class="section bg-sand" aria-labelledby="gallery-title">
    <div class="container">
      <div class="section-head split">
        <div><p class="eyebrow">Gallery</p><h2 id="gallery-title">Scenes from ${esc(p.shortName || p.name)}</h2></div>
        <p class="lead">Photographs from the community of Sapao. Select any image to view it larger.</p>
      </div>
      <div class="gallery" data-gallery>
        ${p.gallery.map(([f, alt], n) => `<button type="button" aria-label="Open image ${n + 1}: ${esc(alt)}"><img src="${img(f)}" alt="${esc(alt)}" loading="lazy" decoding="async"></button>`).join('\n        ')}
      </div>
    </div>
  </section>
  <dialog class="lightbox" id="lightbox" aria-label="Image viewer">
    <figure style="margin:0"><img src="" alt=""><figcaption></figcaption></figure>
    <button class="lb-btn lb-close" type="button" aria-label="Close">✕</button>
    <button class="lb-btn lb-prev" type="button" aria-label="Previous image"><svg viewBox="0 0 20 20" fill="none"><path d="M12 15 7 10l5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <button class="lb-btn lb-next" type="button" aria-label="Next image"><svg viewBox="0 0 20 20" fill="none"><path d="m8 5 5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  </dialog>`
    : '';

  return `<!DOCTYPE html>
<!-- Generated by tools/build-places.mjs — edit the data there, not this file. -->
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(p.name)} — Sapao Coast</title>
<meta name="description" content="${esc(p.tagline)}">
<meta property="og:title" content="${esc(p.name)} — Sapao Coast">
<meta property="og:description" content="${esc(p.tagline)}">
<meta property="og:image" content="${img(p.hero.src)}">
<meta name="theme-color" content="#123b4f">
<link rel="icon" href="../Images/logo.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../style.css">
<link rel="preload" as="image" href="${img(p.hero.src)}">
</head>
<body>
${header()}

<main id="main">
  <section class="place-hero">
    <div class="hero-media"><img src="${img(p.hero.src)}" alt="${esc(p.hero.alt)}" fetchpriority="high"></div>
    <div class="container hero-content">
      <nav class="crumbs" aria-label="Breadcrumb">
        <a href="../index.html">Home</a><span aria-hidden="true">/</span>
        <a href="../index.html#places">Places to Visit</a><span aria-hidden="true">/</span>
        <span aria-current="page">${esc(p.shortName || p.name)}</span>
      </nav>
      <p class="eyebrow">${esc(p.category)}</p>
      <h1>${esc(p.name)}</h1>
      <p class="hero-text">${esc(p.tagline)}</p>
    </div>
  </section>

  <section class="section">
    <div class="container place-intro">
      <div class="story" data-reveal>
        <p class="eyebrow">About this place</p>
        <h2>${esc(p.lead)}</h2>
        ${p.story.map((s) => `<p>${esc(s)}</p>`).join('\n        ')}
        ${p.external ? `<p style="margin-top:2rem"><a class="btn btn-outline" href="${p.external.href}" target="_blank" rel="noopener">${esc(p.external.label)} ${ICON_EXT}</a></p>` : ''}
      </div>
      <aside class="keyinfo" aria-labelledby="keyinfo-title" data-reveal data-delay="1">
        <h2 id="keyinfo-title">Key information</h2>
        <dl>
          ${p.info.map((x) => `<div><dt>${esc(x.k)}</dt><dd>${esc(x.v)}</dd></div>`).join('\n          ')}
        </dl>
        ${hasConfirm ? '<span class="confirm">Confirm locally</span>' : ''}
        <p style="font-size:.85rem;color:var(--ink-soft);margin-top:1rem">${esc(p.feesNote)}</p>
        <a class="btn btn-primary" href="${mapsSearch(p.mapQuery)}" target="_blank" rel="noopener">Open in Google Maps ${ICON_EXT}</a>
      </aside>
    </div>
  </section>

  ${gallery}

  <section class="section" aria-labelledby="location-title">
    <div class="container location-grid">
      <div data-reveal>
        <p class="eyebrow">Location &amp; directions</p>
        <h2 id="location-title">Getting to ${esc(p.shortName || p.name)}</h2>
        <p>${esc(p.directions)}</p>
        <h3 style="font-size:1.3rem;margin-top:2.5rem">Before you go</h3>
        <ul class="reminders">
          ${p.reminders.map((r) => `<li>${esc(r)}</li>`).join('\n          ')}
        </ul>
      </div>
      <div class="map-card" data-reveal data-delay="1">
        <iframe src="${mapsEmbed(p.mapQuery)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map showing ${esc(p.name)}, Sapao, Guiuan"></iframe>
      </div>
    </div>
  </section>

  <section class="section bg-sand" aria-label="More destinations" style="padding-block:clamp(3rem,6vw,5rem)">
    <div class="container">
      <nav class="place-nav" aria-label="Other destinations">
        <a class="prev" href="${prev.slug}.html"><small>← Previous</small><span>${esc(prev.shortName || prev.name)}</span></a>
        <a class="next" href="${next.slug}.html"><small>Next →</small><span>${esc(next.shortName || next.name)}</span></a>
      </nav>
      <p class="back-all"><a class="link-arrow" href="../index.html#places">Back to all destinations ${ICON_ARROW}</a></p>
    </div>
  </section>
</main>

${footer()}
<script src="../script.js"></script>
</body>
</html>
`;
}

places.forEach((p, i) => {
  writeFileSync(join(OUT, `${p.slug}.html`), page(p, i));
  console.log('wrote places/' + p.slug + '.html');
});
