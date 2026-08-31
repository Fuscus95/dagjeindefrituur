(() => {
  const root = document.querySelector("#excursion-page");
  if (!root || !Array.isArray(window.EXCURSIONS)) return;

  const slug = document.body.dataset.excursionSlug || new URLSearchParams(location.search).get("slug");
  const excursion = window.EXCURSIONS.find((item) => item.slug === slug);

  if (!excursion || !excursion.detail) {
    root.innerHTML = `<section class="section"><div class="container narrow center"><h1>Excursie niet gevonden</h1><p>Voor deze excursie is nog geen modulaire detailinhoud toegevoegd.</p><a class="btn btn-primary" href="/#excursies">Alle excursies</a></div></section>`;
    return;
  }

  const setMeta = (selector, attribute, value) => {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute(attribute, value);
  };

  if (excursion.seo) {
    document.title = excursion.seo.title || excursion.title;
    setMeta('meta[name="description"]', "content", excursion.seo.description);
    setMeta('link[rel="canonical"]', "href", excursion.seo.canonical);
    setMeta('meta[property="og:title"]', "content", excursion.seo.ogTitle || excursion.seo.title || excursion.title);
    setMeta('meta[property="og:description"]', "content", excursion.seo.ogDescription || excursion.seo.description);
    setMeta('meta[property="og:url"]', "content", excursion.seo.canonical);
  }

  const renderBlocks = (blocks = []) => blocks.map((block) => {
    if (block.type === "heading") return `<h2${block.first ? "" : ' style="margin-top:46px;"'}>${block.text}</h2>`;
    if (block.type === "p") return `<p>${block.html}</p>`;
    if (block.type === "notice") return `<div class="notice">${block.html}</div>`;
    if (block.type === "checklist") return `<div class="checklist">${block.items.map((item) => `<div class="checkitem"><span>✓</span><div>${item}</div></div>`).join("")}</div>`;
    return "";
  }).join("");

  const practical = excursion.detail.practical.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  const route = excursion.detail.route.map((step, index) => `<div class="route-step"><div class="step-num">${index + 1}</div><div><strong>${step.title}</strong><p>${step.text}</p></div></div>`).join("");
  const closing = excursion.detail.closing || {
    eyebrow: "Terug naar het overzicht",
    title: "Nog niet genoeg veldwerk?",
    text: "Bekijk de andere frituurexcursies en vergelijk gidsen, provincies, vogelgebieden en snackhabitats door heel België."
  };

  root.innerHTML = `
    <section class="subhero">
      <div class="container subhero-content">
        <div class="breadcrumbs"><a href="/">Home</a> / <a href="/#excursies">Excursies</a> / <span>${excursion.title}</span></div>
        <p class="eyebrow">${excursion.hero.eyebrow}</p>
        <h1>${excursion.title}</h1>
        <p class="subhero-copy">${excursion.hero.intro}</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="content">
          <p class="eyebrow dark">Over deze excursie</p>
          ${renderBlocks(excursion.detail.contentBlocks)}
        </div>
        <aside class="info-box">
          <p class="eyebrow">Praktische gegevens</p>
          <dl>${practical}</dl>
        </aside>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        <p class="eyebrow dark">Indicatieve route</p>
        <h2>${excursion.detail.routeHeading}</h2>
        <div class="route-steps">${route}</div>
      </div>
    </section>

    <section class="section">
      <div class="container narrow center">
        <p class="eyebrow dark">${closing.eyebrow}</p>
        <h2>${closing.title}</h2>
        <p style="color:var(--muted);font-size:18px;">${closing.text}</p>
        <a class="btn btn-primary" href="/#excursies">Alle excursies</a>
      </div>
    </section>`;
})();
