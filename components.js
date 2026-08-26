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
<footer class="site-footer">

  <div class="container footer-grid">

    <div class="footer-contact">

      <h2>ADRES & CONTACT</h2>

      <p>
        <strong>Dagje in de Frituur</strong><br>
        België
      </p>

      <p>
        E-mail:
        <a href="mailto:info@dagjeindefrituur.be">
          info@dagjeindefrituur.be
        </a>
      </p>

      <p>
        <a href="/algemene-voorwaarden.html">
          Algemene voorwaarden
        </a>
      </p>

      <p class="footer-disclaimer">
        Dagje in de Frituur is een onafhankelijk parodieproject over
        vogels, natuurgebieden, frieten en de Belgische frituurcultuur.
      </p>

    </div>


    <div class="footer-online">

      <h2>VIND ONS ONLINE</h2>

      <div class="social-links">

        <a href="#" aria-label="Facebook" class="social-button">
          f
        </a>

        <a href="#" aria-label="Instagram" class="social-button">
          ◎
        </a>

      </div>

    </div>

  </div>


  <div class="container footer-bottom">

    <span>
      © <span data-year></span> Dagje in de Frituur
    </span>

    <span>
      Ontwikkeld door een dorstige AI met een bedenkelijke ecologische voetafdruk.
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
