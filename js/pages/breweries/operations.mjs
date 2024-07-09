import { initializeMap } from "../../helpers/maps.mjs";
import { formatBreweriesResponse } from "./breweryHelpers.mjs";
var locationArray = [];
var map;
var markers = [];
var geocoder = new google.maps.Geocoder();

google.maps.event.addDomListener(window, "load", () => {
  initializeMap(locationArray);
});

window.addEventListener("DOMContentLoaded", function () {
  // Fields
  var brewerySelector = document.querySelector(".brewery-type");
  var stateSearch = document.querySelector(".state");

  // Change to breweryTypes;
  brewerySelector.addEventListener("change", (event) => {
    var selectedValue = event.target.value;
    const breweryTypeElement = document.querySelector(".result-T");
    if (!breweryTypeElement) {
      console.error("Brewery type result element not found");
      return;
    }

    breweryTypeElement.innerHTML = "";
    fetch(`https://api.openbrewerydb.org/breweries?by_type=${selectedValue}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        formatBreweriesResponse(result);
        initializeMap(locationArray);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });

  // Search By state
  


});