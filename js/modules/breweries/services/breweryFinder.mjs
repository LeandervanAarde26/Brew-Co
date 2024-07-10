// import { initializeMap } from "../../../helpers/maps.mjs";
import { formatBreweriesResponse } from "./helpers.mjs";

export class BreweryService {
  constructor(mapService) {
    this.mapService = mapService;
  }
  changeEvent(listener, element, filter) {
    const breweryTypeElement = document.querySelector(".result-T");

    element.addEventListener(listener, (e) => {
      console.log(breweryTypeElement);
      if (!breweryTypeElement) {
        console.error("Brewery type result element not found");
        return;
      }
      this.#BreweryFinder(e.target.value, filter, breweryTypeElement);
    });
  }

  #BreweryFinder(value, filter, breweryTypeElement) {
    fetch(`https://api.openbrewerydb.org/breweries?${filter}=${value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        breweryTypeElement.innerHTML = "";
        formatBreweriesResponse(result);
        this.mapService.initializeMap();
        // initializeMap(locationArray);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
}
