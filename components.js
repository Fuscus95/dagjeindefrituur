const headerHTML = `
<header class="site-header">
  <div class="container nav-wrap">

    <a class="brand" href="/">
      <img class="brand-icon" src="/favicon.png" alt="Dagje in de Frituur">
      <span>
        <strong>Dagje in de Frituur</strong>
        <small>Belgische natuur- & frituurbeleving</small>
      </span>
    </a>

    <button
      class="nav-toggle"
      aria-expanded="false"
      aria-controls="main-nav"
      aria-label="Menu openen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav
      id="main-nav"
      class="main-nav"
      aria-label="Hoofdnavigatie"
    >
      <a href="/">Home</a>
      <a href="/#excursies">Excursies</a>
      <a href="/gidsen.html">Gidsen</a>
      <a href="/#werkwijze">Werkwijze</a>
      <a href="/#over">Over ons</a>
    </nav>

  </div>
</header>
`;


const footerHTML = `
<footer>

  <div class="container footer-grid">

    <div>

      <a class="brand" href="/">
        <img class="brand-icon" src="/favicon.png" alt="Dagje in de Frituur">

        <span>
          <strong>Dagje in de Frituur</strong>
          <small>Belgische natuur- & frituurbeleving</small>
        </span>
      </a>

      <p>
        Een onafhankelijke ode aan vogels, natuurgebieden, frieten,
        snackbars en veel te serieuze excursieteksten.
      </p>

    </div>


    <div>

      <strong>Excursies</strong>

      <a href="/excursies/oostkust.html">
        Oostkust
      </a>

      <a href="/excursies/linkeroever.html">
        Linkeroever
      </a>

      <a href="/excursies/viroin.html">
        Viroin
      </a>

      <a href="/excursies/antwerpse-rand.html">
        Antwerpse rand
      </a>

      <a href="/excursies/gaume.html">
        Gaume
      </a>

      <a href="/excursies/hoge-venen.html">
        Hoge Venen
      </a>

    </div>


    <div>

      <strong>Meer</strong>

      <a href="/gidsen.html">
        Gidsen
      </a>

      <a href="/#werkwijze">
        Werkwijze
      </a>

      <a href="/#over">
        Over ons
      </a>

    </div>

  </div>


  <div class="container footer-bottom">

    <span>
      © <span data-year></span> Dagje in de Frituur |
      Ontwikkeld door een dorstige AI met een bedenkelijke ecologische voetafdruk.
    </span>

    <span>
      Parodieproject
    </span>

  </div>

</footer>
`;


const headerTarget = document.getElementById("site-header");
const footerTarget = document.getElementById("site-footer");


if (headerTarget) {
  headerTarget.innerHTML = headerHTML;
}


if (footerTarget) {
  footerTarget.innerHTML = footerHTML;
}
