// Google maps setup

export function getCenter(locationArray) {
  let long = 0;
  let lat = 0;
  for (let i = 0; i < locationArray.length; i++) {
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
  

 export  function createAddress(Address, geocoder) {
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

  
  export function setMarkers(locationArray, map, markers) {
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    const infowindow = new google.maps.InfoWindow();
  
    locationArray.forEach((location, i) => {
      if (location[1] == null) {
        createAddress(location[3], geocoder, map, locationArray, i);
      } else {
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(location[1], location[2]),
          map: map,
        });
        google.maps.event.addListener(marker, "click", () => {
          infowindow.setContent(location[0]);
          infowindow.open(map, marker);
        });
        markers.push(marker);
      }
    });
  }
  


  export function initializeMap(locationArray, map) {
    document.getElementById("maps").innerHTML = "";
    console.log("initializing map");
    console.log(locationArray);
    const mapOptions = {
      zoom: 2,
      center: new google.maps.LatLng(getCenter(locationArray)[0], getCenter(locationArray)[1]),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
  
    map = new google.maps.Map(document.getElementById("maps"), mapOptions);
  
    setMarkers(locationArray, map);
  }
