(() => {
  const grid = document.querySelector("#excursion-grid");
  if (!grid || !Array.isArray(window.EXCURSIONS)) return;

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  grid.innerHTML = window.EXCURSIONS.map((excursion) => {
    const guide = excursion.guide;
    const mediaClass = excursion.visualClass ? ` ${escapeHtml(excursion.visualClass)}` : "";

    return `
      <article
        class="card excursion-card"
        data-guide="${escapeHtml(guide.id)}"
        data-duration="${escapeHtml(excursion.durationFilter)}"
        data-province="${escapeHtml(excursion.province)}"
        data-category="${escapeHtml(excursion.category)}"
      >
        <div class="card-media${mediaClass}">
          <span class="tag">${escapeHtml(excursion.tag)}</span>
        </div>

        <div class="card-body">
          <p class="meta">${escapeHtml(excursion.region)} · ${escapeHtml(excursion.duration)}</p>

          <h3>
            <a href="${escapeHtml(excursion.href)}">${escapeHtml(excursion.title)}</a>
          </h3>

          <p>${escapeHtml(excursion.card.description)}</p>

          <div class="excursion-guide">
            <img src="${escapeHtml(guide.image)}" alt="${escapeHtml(guide.name)}" loading="lazy">
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
