import { Logo } from "../../components/Logo.mjs";

export const Section = ({ section, index }) => `
  <div class="row ${section.rowClass}">
      ${index === 0 ? Logo() : ""}
      <div class="col-6 ${
        index === 2 ? "offset-6" : ""
      } d-none d-lg-block section">
          ${section.icon ? `<div>${section.icon}</div>` : ""}
          <h2 class="text-center">${section.title}</h2>
          <p>${section.description}</p>
      </div>
  </div>
  <div class="row sm-color-row d-block d-lg-none pt-4">
      <h2 class="text-center">${section.title}</h2>
      <p class="text-center">
          ${section.description}
          <br>
      </p>
  </div>`;