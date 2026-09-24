(() => {
  const grid = document.querySelector("#excursion-grid");
  if (!grid || !Array.isArray(window.EXCURSIONS) || !Array.isArray(window.GUIDES)) return;

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  grid.innerHTML = window.EXCURSIONS.map((excursion) => {
    const guide = window.GUIDES.find((item) => item.id === excursion.guideId);
    if (!guide) {
      console.warn(`Unknown guide "${excursion.guideId}" for excursion "${excursion.slug}"`);
      return "";
    }
    const mediaClass = excursion.visualClass ? ` ${escapeHtml(excursion.visualClass)}` : "";
    const image = `/assets/images/excursions/${excursion.slug}.webp`;
    const imageAlt = {
      "oostkust": "Strand en haven van Zeebrugge",
      "linkeroever": "Prosperpolder bij Doel, met havenkranen en koeltorens op de achtergrond",
      "viroin": "Landschap van Viroinval bij Nismes",
      "antwerpse-rand": "Verkeer op de Antwerpse ring",
      "gaume": "Wijngaard in Torgny in de Gaume",
      "hoge-venen": "Satellietbeeld van de brand en het verbrande landschap in de Hoge Venen in augustus 2026",
      "nachtje-in-de-frituur": "De Keyserlei in Antwerpen bij nacht",
      "workshop-frituurfotografie-oostende": "Strand van Oostende"
    };

    return `
      <article
        class="card excursion-card"
        data-guide="${escapeHtml(guide.id)}"
        data-duration="${escapeHtml(excursion.durationFilter)}"
        data-province="${escapeHtml(excursion.province)}"
        data-category="${escapeHtml(excursion.category)}"
        data-search="${escapeHtml([
          excursion.title,
          excursion.region,
          excursion.tag,
          excursion.category,
          excursion.card?.description,
          guide.name,
          guide.specialty
        ].filter(Boolean).join(" ").toLocaleLowerCase("nl"))}"
      >
        <div class="card-media${mediaClass} card-media--${escapeHtml(excursion.slug)}"><img src="${escapeHtml(image)}" alt="${escapeHtml(imageAlt[excursion.slug] || excursion.title)}" loading="lazy" decoding="async" width="960" height="600">
          <span class="tag">${escapeHtml(excursion.tag)}</span>
        </div>

        <div class="card-body">
          <p class="meta">${escapeHtml(excursion.region)} · ${escapeHtml(excursion.duration)}</p>

          <h3>
            <a href="${escapeHtml(excursion.href)}">${escapeHtml(excursion.title)}</a>
          </h3>

          <p>${escapeHtml(excursion.card.description)}</p>

          <div class="excursion-guide">
            <img src="${escapeHtml(guide.image)}" alt="${escapeHtml(guide.name)}" loading="lazy" decoding="async">
            <div>
              <span>Begeleid door</span>
              <a href="${escapeHtml(guide.href)}">${escapeHtml(guide.name)}</a>
            </div>
          </div>

          <div class="card-footer">
            <strong>${escapeHtml(excursion.card.fries)}</strong>
            <a class="mini-link" href="${escapeHtml(excursion.href)}">Bekijk excursie →</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
})();
