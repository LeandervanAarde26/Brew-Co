import { BreweryInformation } from "../modules/BreweryInformation.mjs";
import { GetBreweries } from "../modules/fetchRequest.mjs";

var locationArray = [];
var map;
var markers = [];
var geocoder = new google.maps.Geocoder();

function getCenter() {
  let long = 0;
  let lat = 0;
  for (var i = 0; i < locationArray.length; i++) {
    lat += Number(locationArray[i][1]);
    long += Number(locationArray[i][2]);
  }
  if (locationArray.length != 0) {
    lat /= locationArray.length;
    long /= locationArray.length;
  }
  console.log("lat=" + lat + " long=" + long);
  return [lat, long];
}

function createAddress(Address) {
  geocoder.geocode({ address: Address }, (results, status) => {
    if (status == google.maps.GeocoderStatus.OK) {
      return [results[0].geometry.location];
    } else {
      marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map,
      });
      google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
          return function () {
            infowindow.setContent(locationArray[i][0]);
            infowindow.open(map, marker);
          };
        })(marker, i)
      );
      markers.push(marker);
    }
  });
};

function formatBreweriesResponse(result) {
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
      .insertAdjacentHTML("beforeend", getDisplayedResults(result[i]));
  }
}

function getDisplayedResults(result) {
  const {name, street, state, city, brewery_type, website_url} = result;
  return `
    <tr>
      <td>${name == null ? name : "Unkown"}</td>
      <td>${ city ? city : "Unkown" }</td>
      <td class="d-none d-lg-block">${street ? street :  "Unkown"}</td>
      <td>${brewery_type ? brewery_type : "Unkown"}</td>
      <td><a href="${website_url ? website_url :"Unkown" }">Go to website</a></td>
    </tr>
  `;
};



function setMarkers() {
  for (var j = 0; j < markers.length; j++) {
    markers[j].setMap(null);
  }
  markers = [];
  var infowindow = new google.maps.InfoWindow();
  var marker, i;

  for (i = 0; i < locationArray.length; i++) {
    if (locationArray[i][1] == null) {
      //    createAddress(locationArray[i][3]);
    } else {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          locationArray[i][1],
          locationArray[i][2]
        ),
        map: map,
      });
      google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
          return function () {
            infowindow.setContent(locationArray[i][0]);
            infowindow.open(map, marker);
          };
        })(marker, i)
      );
      markers.push(marker);
    }
  }
}

function initializeMap() {
  map = null;
  document.getElementById("maps").innerHTML = "";
  console.log("initializing map");
  console.log(locationArray);
  var mapOptions = {
    zoom: 2,
    center: new google.maps.LatLng(getCenter()[0], getCenter()[1]), //new center
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  map = new google.maps.Map(document.getElementById("maps"), mapOptions);

  setMarkers(locationArray);
}

google.maps.event.addDomListener(window, "load", initializeMap);


// Document logic

document.addEventListener("DOMContentLoaded", function () {
  document.title = "BREW CO | Find Breweries" 


  const breweryTypes = ["micro", "nano", "regional", "brewpub", "large", "planning", "bar", "contract", "closed"];  
  var selector = document.querySelector(".brewery-type");
  var stateSelector = document.querySelector(".state");

  var heading = document.querySelector('.find-brew');
  var headingContent = document.createTextNode(BreweryInformation.title.toUpperCase());
  heading.appendChild(headingContent);
  var content = document.querySelector('.content');
  var smContent = document.querySelector('.content-sm');
  var bodyContent = BreweryInformation.content;

  var bodyContentNode = document.createTextNode(bodyContent);

  content.appendChild(bodyContentNode.cloneNode(true)); 
  smContent.appendChild(document.createTextNode(bodyContent));
  //Document setup
  breweryTypes.forEach((item) => {
    const element = `<option value="${item}">${item.charAt(0).toUpperCase() + item.slice(1)}</option>`;
    selector.insertAdjacentHTML('beforeend', element);
  });

  selector.addEventListener("change", (event) => {
    const breweryTypeElement = document.querySelector(".result-T");
    breweryTypeElement.innerHTML = "";
    let breweryType = event.target.value;
    console.log(breweryType);
    fetch(`https://api.openbrewerydb.org/breweries?by_type=${breweryType}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        formatBreweriesResponse(result);
        initializeMap();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });

  stateSelector.addEventListener("change", (event) => {

    console.log(event.target.value);

  });

});


