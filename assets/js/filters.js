document.addEventListener("DOMContentLoaded", () => {

  const filterProvince = document.querySelector("#filter-province");
  const filterDuration = document.querySelector("#filter-duration");
  const filterGuide = document.querySelector("#filter-guide");
  const filterCategory = document.querySelector("#filter-category");

  const resetFilters = document.querySelector("#reset-filters");
  const resultCount = document.querySelector("#filter-result-count");

  const excursionCards = [
    ...document.querySelectorAll(".excursion-card")
  ];


  function applyExcursionFilters() {

    const province = filterProvince?.value || "";
    const duration = filterDuration?.value || "";
    const guide = filterGuide?.value || "";
    const category = filterCategory?.value || "";

    let visibleCount = 0;


    excursionCards.forEach(card => {

      const cardProvince = card.dataset.province || "";
      const cardDuration = card.dataset.duration || "";
      const cardGuide = card.dataset.guide || "";

      const cardCategories = (card.dataset.category || "")
        .split(/\s+/)
        .filter(Boolean);


      const matchesProvince =
        province === "" ||
        cardProvince === province;


      const matchesDuration =
        duration === "" ||
        cardDuration === duration;


      const matchesGuide =
        guide === "" ||
        cardGuide === guide;


      const matchesCategory =
        category === "" ||
        cardCategories.includes(category);


      const visible =
        matchesProvince &&
        matchesDuration &&
        matchesGuide &&
        matchesCategory;


      card.hidden = !visible;


      if (visible) {
        visibleCount++;
      }

    });


    if (resultCount) {

      if (visibleCount === 0) {

        resultCount.textContent =
          "Geen excursies gevonden. Probeer één of meerdere filters te wissen.";

      } else if (visibleCount === 1) {

        resultCount.textContent =
          "1 excursie gevonden";

      } else {

        resultCount.textContent =
          `${visibleCount} excursies gevonden`;

      }

    }

  }


  [
    filterProvince,
    filterDuration,
    filterGuide,
    filterCategory
  ].forEach(filter => {

    if (filter) {
      filter.addEventListener("change", applyExcursionFilters);
    }

  });


  if (resetFilters) {

    resetFilters.addEventListener("click", () => {

      if (filterProvince) {
        filterProvince.value = "";
      }

      if (filterDuration) {
        filterDuration.value = "";
      }

      if (filterGuide) {
        filterGuide.value = "";
      }

      if (filterCategory) {
        filterCategory.value = "";
      }


      applyExcursionFilters();

    });

  }


  applyExcursionFilters();

});
