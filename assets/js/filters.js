const initExcursionFilters = () => {

  const filterSearch = document.querySelector("#filter-search");
  const filterProvince = document.querySelector("#filter-province");
  const filterDuration = document.querySelector("#filter-duration");
  const filterGuide = document.querySelector("#filter-guide");
  const filterCategory = document.querySelector("#filter-category");

  const resetFilters = document.querySelector("#reset-filters");
  const resultCount = document.querySelector("#filter-result-count");

  const getExcursionCards = () => [
    ...document.querySelectorAll(".excursion-card")
  ];


  function applyExcursionFilters() {

    const search = (filterSearch?.value || "").trim().toLocaleLowerCase("nl");
    const province = filterProvince?.value || "";
    const duration = filterDuration?.value || "";
    const guide = filterGuide?.value || "";
    const category = filterCategory?.value || "";

    let visibleCount = 0;


    getExcursionCards().forEach(card => {

      const cardSearch = card.dataset.search || "";
      const cardProvince = card.dataset.province || "";
      const cardDuration = card.dataset.duration || "";
      const cardGuide = card.dataset.guide || "";

      const cardCategories = (card.dataset.category || "")
        .split(/\s+/)
        .filter(Boolean);


      const matchesSearch =
        search === "" ||
        cardSearch.includes(search);


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
        matchesSearch &&
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


  if (filterSearch) {
    filterSearch.addEventListener("input", applyExcursionFilters);
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

      if (filterSearch) {
        filterSearch.value = "";
      }

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

};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initExcursionFilters, { once: true });
} else {
  initExcursionFilters();
}
