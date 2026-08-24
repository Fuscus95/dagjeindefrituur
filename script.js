const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const snacks = [
  {
    emoji: "🍟",
    title: "Klassieke friet",
    text: "Betrouwbaar, sociaal en altijd welkom. Je functioneert het best met een royale hoeveelheid saus."
  },
  {
    emoji: "🍔",
    title: "Bicky Burger",
    text: "Complex, licht chaotisch en opvallend overtuigend na 23:00. Je hebt minstens drie lagen persoonlijkheid."
  },
  {
    emoji: "🌭",
    title: "Viandel",
    text: "Mysterieuze binnenkant, krokante buitenkant. Niemand begrijpt je volledig, maar iedereen respecteert de consistentie."
  },
  {
    emoji: "🧀",
    title: "Kaaskroket",
    text: "Elegant tot de temperatuur stijgt. Daarna wordt het voor iedereen gevaarlijk."
  },
  {
    emoji: "🥘",
    title: "Julientje",
    text: "Je gelooft niet in minimalisme. Frieten, vlees, saus, ajuin: waarom kiezen als alles tegelijk kan?"
  }
];

const modal = document.getElementById("snackModal");
const randomSnackBtn = document.getElementById("randomSnackBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const modalClose = document.getElementById("modalClose");
const snackEmoji = document.getElementById("snackEmoji");
const snackTitle = document.getElementById("snackTitle");
const snackText = document.getElementById("snackText");

function showRandomSnack() {
  const snack = snacks[Math.floor(Math.random() * snacks.length)];
  snackEmoji.textContent = snack.emoji;
  snackTitle.textContent = `Jij bent een ${snack.title}`;
  snackText.textContent = snack.text;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

randomSnackBtn.addEventListener("click", showRandomSnack);
tryAgainBtn.addEventListener("click", showRandomSnack);
modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

document.querySelectorAll(".mini-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("Deze expeditie is voorlopig volledig uitverkocht. Vermoedelijk door honger.");
  });
});

document.getElementById("giftBtn").addEventListener("click", () => {
  alert("Cadeaubonmodule volgt binnenkort. Tot dan is een envelop met €20 ook cultureel verantwoord.");
});

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();

  const email = emailInput.value.trim();
  if (!email) return;

  formMessage.textContent = `Dank je! ${email} staat nu symbolisch op onze frituurlijst.`;
  newsletterForm.reset();
});
