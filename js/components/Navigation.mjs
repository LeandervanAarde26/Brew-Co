
export const Navigation = () => {
    return `
          <nav class="navbar navbar-expand-lg navbar-dark sticky-top" id="navbar">
              <div class="container-fluid">
                  <a class="navbar-brand" href="../index.html">
                      <img src="../Assets/Logo-white.svg" class="me-5" alt="logo" height="80&s">
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                              <a class="nav-link" href="../index.html" tabindex="-1">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" aria-current="page" href="../pages/breweries.html">Breweries</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="../pages/contact.html" aria-disabled="true">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      `;
  };
  