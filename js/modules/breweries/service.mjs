import { initializeMap } from "../../helpers/maps.mjs";
import { BreweryService } from "./services/breweryFinder.mjs";

export function initialiseSearch() {
  var locationArray = [];
  var map;
  var markers = [];
  var geocoder = new google.maps.Geocoder();

  google.maps.event.addDomListener(window, "load", () => {
    initializeMap(locationArray);
  });

  const breweryService = new BreweryService();
  const searchFields = {
    type: document.querySelector(".brewery-type"),
    state: document.querySelector(".state"),
    name: document.querySelector(".name"),
  };
  const { type, name, state } = searchFields;
  breweryService.changeEvent("change", type, "by_type");
  breweryService.changeEvent("input", state, "by_state");
  breweryService.changeEvent("input", name, "by_name");
}
