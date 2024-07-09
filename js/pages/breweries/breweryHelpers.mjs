import { TableResult } from "./components.mjs";

export function formatBreweriesResponse(result) {
    let locationArray = [];
    console.log(result);
    for (var i = 0; i < result.length; i++) {
      console.log("REACH");
      let Name = result[i].name;
      let Latitude = result[i].latitude;
      let Longitude = result[i].longitude;
  
      let tempArray = [Name, Latitude, Longitude];
      locationArray.push(tempArray);
  
      document
        .querySelector(".result-T")
        .insertAdjacentHTML("beforeend", TableResult(result[i]));
    }
  }
