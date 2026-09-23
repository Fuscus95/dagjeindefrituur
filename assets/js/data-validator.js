(() => {
  const excursions = Array.isArray(window.EXCURSIONS) ? window.EXCURSIONS : [];
  const guides = Array.isArray(window.GUIDES) ? window.GUIDES : [];
  const guideIds = new Set(guides.map((g) => g.id));
  const seenSlugs = new Set();

  excursions.forEach((e) => {
    if (!e.slug) console.warn("Excursion without slug", e);
    if (seenSlugs.has(e.slug)) console.warn("Duplicate excursion slug:", e.slug);
    seenSlugs.add(e.slug);

    if (!guideIds.has(e.guideId)) {
      console.warn(`Unknown guideId "${e.guideId}" for excursion "${e.slug}"`);
    }

    const expectedHref = `/excursies/${e.slug}`;
    if (e.href !== expectedHref) {
      console.warn(`Unexpected href for "${e.slug}": expected ${expectedHref}, got ${e.href}`);
    }
  });

  const seenGuideIds = new Set();
  guides.forEach((g) => {
    if (seenGuideIds.has(g.id)) console.warn("Duplicate guide id:", g.id);
    seenGuideIds.add(g.id);
    if (!g.slug || !g.href || !g.name) console.warn("Incomplete guide:", g);
  });
})();