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
        Pieter Vanderdoncktdoorgang 69<br>
        9000 Gent<br>
        België
      </p>

      <p>
        E-mail:
        <a href="mailto:info@dagjeindefrituur.be">
          info@dagjeindefrituur.be
        </a>
      </p>

     <p>
  <a
    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    target="_blank"
    rel="noopener noreferrer"
  >
    Download onze Algemene Voorwaarden
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

       <a
  href="https://www.facebook.com/birdingbelgium/"
  class="social-button"
  aria-label="Bezoek Birding Belgium op Facebook"
  title="Birding Belgium op Facebook"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M13.5 22v-9h3l.5-3h-3.5V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8V10H6.5v3h3v9h4z"
    />
  </svg>
</a>

<a
  href="https://www.instagram.com/sydney_sweeney/"
  class="social-button"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
    />
  </svg>
</a>

      </div>

    </div>

  </div>


  <div class="container footer-bottom">

    <span>
      © <span data-year></span> Dagje in de Frituur | Ontwikkeld door een dorstige AI met een bedenkelijke ecologische voetafdruk.
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
