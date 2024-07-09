// Header

import {
  BreweriesTable,
  Footer,
  Header,
  SearchContainer,
} from "./components.mjs";

window.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".main");

  document.title = "BREW CO | Locate Breweries";
  if (container) {
    const mainContainer = document.querySelector(".main");
    mainContainer.insertAdjacentHTML("beforeend", Header());
    mainContainer.insertAdjacentHTML("beforeend", SearchContainer());
    mainContainer.insertAdjacentHTML("beforeend", BreweriesTable());
    mainContainer.insertAdjacentHTML("beforeend", Footer());
  }
});
