(() => {
  const root = document.querySelector("#guide-page");
  if (!root || !Array.isArray(window.GUIDES)) return;

  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");

  const slug = document.body.dataset.guideSlug;
  const g = window.GUIDES.find((guide) => guide.slug === slug);

  if (!g) {
    root.innerHTML = '<section class="section"><div class="container narrow center"><h1>Gids niet gevonden</h1><p>Deze gids bestaat niet of is niet meer actief.</p><a class="btn btn-primary" href="/gidsen">Alle gidsen</a></div></section>';
    return;
  }

  if (g.seo) {
    document.title = g.seo.title || `${g.name} | Gidsen | Dagje in de Frituur`;
    const set = (selector, attribute, value) => {
      const el = document.querySelector(selector);
      if (el && value) el.setAttribute(attribute, value);
    };
    set('meta[name="description"]', "content", g.seo.description);
    set('link[rel="canonical"]', "href", g.seo.canonical);
    set('meta[property="og:title"]', "content", g.seo.title || g.name);
    set('meta[property="og:description"]', "content", g.seo.description);
    set('meta[property="og:url"]', "content", g.seo.canonical);

    const ensureMeta = (selector, attrs) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    };
    ensureMeta('meta[property="og:image"]', { property: "og:image", content: new URL(g.image, location.origin).href });
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: g.seo.title || g.name });
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: g.seo.description || "" });
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: new URL(g.image, location.origin).href });
  }

  const structuredData = document.createElement("script");
  structuredData.type = "application/ld+json";
  structuredData.id = "guide-structured-data";
  structuredData.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: g.name,
      description: g.seo?.description || g.specialty || "",
      image: new URL(g.image, location.origin).href,
      url: g.seo?.canonical || location.href
    }
  });
  document.head.appendChild(structuredData);

  const trips = (Array.isArray(window.EXCURSIONS) ? window.EXCURSIONS : [])
    .filter((excursion) => excursion.guideId === g.id);

  const meta = Array.isArray(g.meta) ? g.meta : [];
  const paragraphs = Array.isArray(g.paragraphs) ? g.paragraphs : [];
  const facts = Array.isArray(g.facts) ? g.facts : [];

  root.innerHTML = `
    <section class="guide-hero">
      <div class="container guide-layout">
        <aside class="guide-photo">
          <img src="${esc(g.image)}" alt="${esc(g.name)} - gids bij Dagje in de Frituur" loading="eager" decoding="async">
        </aside>
        <article>
          <p class="eyebrow dark">Onze gidsen</p>
          <h1 class="guide-name">${esc(g.name)}</h1>
          <div class="guide-meta">${meta.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
          <p class="guide-intro">${g.intro || ""}</p>
          <div class="guide-text">${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>

          ${facts.length ? `
          <section class="guide-facts">
            <h2>Veldfiche</h2>
            <div class="guide-facts-grid">
              ${facts.map(([label, value]) => `<div class="guide-fact"><small>${esc(label)}</small><strong>${esc(value)}</strong></div>`).join("")}
            </div>
          </section>` : ""}

          ${trips.length ? `
          <section class="guide-facts">
            <h2>Excursies met ${esc(g.name)}</h2>
            <div class="guide-excursions">
              ${trips.map((excursion) => `<p><a href="${esc(excursion.href)}"><strong>${esc(excursion.title)}</strong></a><br><span>${esc(excursion.region)} · ${esc(excursion.duration)}</span></p>`).join("")}
            </div>
          </section>` : ""}

          <div class="guide-back"><a href="/gidsen" class="btn btn-secondary">← Terug naar alle gidsen</a></div>
        </article>
      </div>
    </section>`;
})();