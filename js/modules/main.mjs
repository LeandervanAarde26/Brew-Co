import { Navigation } from "../components/Navigation.mjs";

window.addEventListener("DOMContentLoaded", function () {
  // Create the container-fluid div
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.className = "container-fluid main";
  body.appendChild(container);


  // Insert the navbar


  body.insertAdjacentHTML("afterbegin", Navigation());

  // Function to set active link
  function setActiveLink() {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  }

  setActiveLink();
});
