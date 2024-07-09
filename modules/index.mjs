import { HomeDetails } from "./homeContent.mjs";

window.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".main"); 
  document.title = "BREW CO | Super Brewery Locator";
  if (container) {
    function generateSections() {
      const mainContainer = document.querySelector(".main");
      HomeDetails.forEach((section, index) => {
        const element = `
            <div class="row ${section.rowClass}">
                ${
                  index === 0
                    ? `<div class="col-6 pt-4 col-lg-6 offset-lg-0 col-sm-12">
                        <img src="Assets/Logo-white.svg" class="img-fluid" alt="Brew Co. logo">
                    </div>`
                    : ""
                }
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
				<p class="text-center ">
					${section.description}
					<br>
				</p>
            </div>`;
        mainContainer.insertAdjacentHTML("beforeend", element);
      });
    }

    // Call the function to generate sections
    generateSections();
  }
});
