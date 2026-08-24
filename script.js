const input = document.getElementById('excursionSearch');
const button = document.getElementById('searchButton');
const cards = [...document.querySelectorAll('.excursion-card')];
const noResults = document.getElementById('noResults');

function normalize(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function filterExcursions() {
  if (!input) return;
  const term = normalize(input.value.trim());
  let visible = 0;

  cards.forEach(card => {
    const haystack = normalize(card.innerText + ' ' + (card.dataset.search || ''));
    const match = !term || haystack.includes(term);
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });

  if (noResults) noResults.hidden = visible !== 0;
}

if (input) {
  input.addEventListener('input', filterExcursions);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') filterExcursions();
  });
}
if (button) button.addEventListener('click', filterExcursions);
