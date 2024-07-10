import { BreweryService } from "./services/breweryFinder.mjs";
import { Maps } from "./services/maps.mjs";

export function initialiseSearch() {
  const maps = new Maps();

  maps.init();

  const breweryService = new BreweryService(maps);
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
