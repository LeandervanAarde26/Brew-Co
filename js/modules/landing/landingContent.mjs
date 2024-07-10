import { HomeContent } from "../../content/homeContent.mjs";
import { Section } from "./components.mjs";

window.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".main");
  document.title = "BREW CO | Super Brewery Locator";
  if (container) {
    const mainContainer = document.querySelector(".main");
    HomeContent.forEach((section, index) => {
      const element = Section({ section, index });
      mainContainer.insertAdjacentHTML("beforeend", element);
    });
  }
});
