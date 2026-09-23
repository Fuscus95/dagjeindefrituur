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
    const absurdVisuals = {
      "oostkust": ["🕶️", "🐦", "🍟"],
      "linkeroever": ["🔭", "🐄", "🍟"],
      "viroin": ["👑", "🐸", "🍟"],
      "antwerpse-rand": ["🦊", "🥤", "🍟"],
      "gaume": ["📷", "🐦", "🧀"],
      "hoge-venen": ["🌫️", "🦉", "🥙"],
      "nachtje-in-de-frituur": ["🔦", "🦉", "🍟"],
      "workshop-frituurfotografie-oostende": ["📸", "🐦", "🍟"]
    };
    const visual = absurdVisuals[excursion.slug] || ["🍟"];

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
        <div class="card-media${mediaClass} card-media--${escapeHtml(excursion.slug)}" aria-hidden="true">
          <div class="card-scene">
            ${visual.map((item, index) => `<span class="scene-object scene-object-${index + 1}">${item}</span>`).join("")}
          </div>
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
