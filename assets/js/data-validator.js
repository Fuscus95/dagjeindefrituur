(() => {
  const excursions = Array.isArray(window.EXCURSIONS) ? window.EXCURSIONS : [];
  const guides = Array.isArray(window.GUIDES) ? window.GUIDES : [];
  const guideIds = new Set(guides.map((g) => g.id));
  const excursionSlugs = new Set();
  const guideSlugs = new Set();

  excursions.forEach((e) => {
    if (!e.slug) console.warn("Excursion without slug", e);
    if (excursionSlugs.has(e.slug)) console.warn("Duplicate excursion slug:", e.slug);
    excursionSlugs.add(e.slug);

    if (!guideIds.has(e.guideId)) console.warn(`Unknown guideId "${e.guideId}" for excursion "${e.slug}"`);

    const href = `/excursies/${e.slug}`;
    const canonical = `https://dagjeindefrituur.be${href}`;
    if (e.href !== href) console.warn(`Unexpected href for "${e.slug}": expected ${href}, got ${e.href}`);
    if (e.seo?.canonical !== canonical) console.warn(`Unexpected canonical for "${e.slug}": expected ${canonical}, got ${e.seo?.canonical}`);
    if (!e.title || !e.region || !e.duration || !e.detail) console.warn("Incomplete excursion:", e);
  });

  const guideIdsSeen = new Set();
  guides.forEach((g) => {
    if (guideIdsSeen.has(g.id)) console.warn("Duplicate guide id:", g.id);
    guideIdsSeen.add(g.id);
    if (guideSlugs.has(g.slug)) console.warn("Duplicate guide slug:", g.slug);
    guideSlugs.add(g.slug);

    const href = `/gidsen/${g.slug}`;
    const canonical = `https://dagjeindefrituur.be${href}`;
    if (g.href !== href) console.warn(`Unexpected guide href for "${g.id}": expected ${href}, got ${g.href}`);
    if (g.seo?.canonical !== canonical) console.warn(`Unexpected guide canonical for "${g.id}": expected ${canonical}, got ${g.seo?.canonical}`);
    if (!g.id || !g.slug || !g.href || !g.name || !g.image) console.warn("Incomplete guide:", g);
  });
})();