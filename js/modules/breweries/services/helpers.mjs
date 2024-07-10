import { TableResult } from "../components.mjs";

export function formatBreweriesResponse(result) {
    let locationArray = [];
    console.log(result);
    for (var i = 0; i < result.length; i++) {
      const {name, latitude, longitude} = result[i];
      let tempArray = [name, latitude, longitude];
      locationArray.push(tempArray);
      document
        .querySelector(".result-T")
        .insertAdjacentHTML("beforeend", TableResult(result[i]));
    }
  }
