(() => {
  const grid = document.querySelector("#guides-grid") || document.querySelector("#home-guides-grid");
  if (!grid || !Array.isArray(window.GUIDES)) return;
  const esc=(v="")=>String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  grid.innerHTML=window.GUIDES.map(g=>`
    <article class="guide-card">
      <img src="${esc(g.image)}" alt="${esc(g.name)}" loading="lazy" decoding="async">
      <div class="guide-content">
        <h2>${esc(g.name)}</h2>
        <div class="guide-specialty">${esc(g.specialty)}</div>
        <p>${esc(g.tagline)}</p>
        <a href="${esc(g.href)}" class="guide-button" aria-label="Bekijk meer over ${esc(g.name)}">Bekijk meer</a>
      </div>
    </article>`).join("");
})();