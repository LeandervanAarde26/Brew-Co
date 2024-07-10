// Header

import { Footer } from "../../components/Footer.mjs";
import { BreweriesTable, Header, SearchContainer } from "./components.mjs";

export function init() {
  const container = document.querySelector(".main");

  document.title = "BREW CO | Locate Breweries";
  if (container) {
    const mainContainer = document.querySelector(".main");
    const elements = [Header(), SearchContainer(), BreweriesTable(), Footer()];
    elements.forEach((element) => {
      return mainContainer.insertAdjacentHTML("beforeend", element);
    });
  }
}

