(() => {
  const root=document.querySelector("#guide-page");
  if(!root||!Array.isArray(window.GUIDES)) return;
  const slug=document.body.dataset.guideSlug;
  const g=window.GUIDES.find(x=>x.slug===slug);
  if(!g){root.innerHTML='<section class="section"><div class="container narrow center"><h1>Gids niet gevonden</h1></div></section>';return;}
  document.title=g.seo.title;
  const set=(sel,attr,val)=>{const el=document.querySelector(sel);if(el&&val)el.setAttribute(attr,val);};
  set('meta[name="description"]',"content",g.seo.description); set('link[rel="canonical"]',"href",g.seo.canonical);
  const trips=(Array.isArray(window.EXCURSIONS)?window.EXCURSIONS:[]).filter(e=>e.guideId===g.id);
  root.innerHTML=`
    <section class="guide-hero"><div class="container guide-layout">
      <aside class="guide-photo"><img src="${g.image}" alt="${g.name} - gids bij Dagje in de Frituur" loading="lazy"></aside>
      <article><p class="eyebrow dark">Onze gidsen</p><h1 class="guide-name">${g.name}</h1>
      <div class="guide-meta">${g.meta.map(x=>'<span>'+x+'</span>').join("")}</div>
      <p class="guide-intro">${g.intro}</p>
      <div class="guide-text">${g.paragraphs.map(x=>'<p>'+x+'</p>').join("")}</div>
      <section class="guide-facts"><h2>Veldfiche</h2><div class="guide-facts-grid">${g.facts.map(([a,b])=>'<div class="guide-fact"><small>'+a+'</small><strong>'+b+'</strong></div>').join("")}</div></section>
      ${trips.length?'<section class="guide-facts"><h2>Excursies met '+g.name+'</h2><div class="guide-excursions">'+trips.map(e=>'<p><a href="'+e.href+'"><strong>'+e.title+'</strong></a><br><span>'+e.region+' · '+e.duration+'</span></p>').join("")+'</div></section>':""}
      <div class="guide-back"><a href="/gidsen.html" class="btn btn-secondary">← Terug naar alle gidsen</a></div>
      </article></div></section>`;
})();