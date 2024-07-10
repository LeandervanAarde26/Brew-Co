import { ContactForm, PageHeader } from "./components.mjs";

import { Footer } from "../../components/Footer.mjs";
export function init() {
    const container = document.querySelector(".main");
    document.title = "BREW CO | Contact us";
    if (container) {
      const elements = [PageHeader(), ContactForm(), Footer()];
      elements.forEach((element) => {
        return container.insertAdjacentHTML("beforeend", element);
      });
    }
  }  