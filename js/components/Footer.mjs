export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return `
      <footer class="row footer pt-5 ps-lg-4">
          <p class=" ms-4  foot-text"><small>Brew Co. ${year} </small></p>
      </footer>
      `;
};


