export class Maps {
    constructor(locationArray = [], map = null, markers = []) {
      this.locationArray = locationArray;
      this.map = map;
      this.markers = markers;
      this.geocoder = new google.maps.Geocoder();
    }
  
    init() {
      google.maps.event.addDomListener(window, "load", () => this.initializeMap());
    }
  
    getCenter() {
      let long = 0;
      let lat = 0;
      for (let i = 0; i < this.locationArray.length; i++) {
        lat += Number(this.locationArray[i][1]);
        long += Number(this.locationArray[i][2]);
      }
      if (this.locationArray.length !== 0) {
        lat /= this.locationArray.length;
        long /= this.locationArray.length;
      }
      console.log("lat=" + lat + " long=" + long);
      return [lat, long];
    }
  
    createAddress(Address) {
      this.geocoder.geocode({ address: Address }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          return [results[0].geometry.location];
        } else {
          const marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: this.map,
          });
          google.maps.event.addListener(marker, "click", () => {
            infowindow.setContent(this.locationArray[i][0]);
            infowindow.open(this.map, marker);
          });
          this.markers.push(marker);
        }
      });
    }
  
    setMarkers() {
      for (let j = 0; j < this.markers.length; j++) {
        this.markers[j].setMap(null);
      }
      this.markers = [];
      const infowindow = new google.maps.InfoWindow();
      let marker, i;
  
      for (i = 0; i < this.locationArray.length; i++) {
        if (this.locationArray[i][1] == null) {
          // createAddress(this.locationArray[i][3]);
        } else {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(
              this.locationArray[i][1],
              this.locationArray[i][2]
            ),
            map: this.map,
          });
          google.maps.event.addListener(
            marker,
            "click",
            ((marker, i) => {
              return () => {
                infowindow.setContent(this.locationArray[i][0]);
                infowindow.open(this.map, marker);
              };
            })(marker, i)
          );
          this.markers.push(marker);
        }
      }
    }
  
    initializeMap() {
      document.getElementById("maps").innerHTML = "";
      console.log("initializing map");
      console.log(this.locationArray);
      const mapOptions = {
        zoom: 2,
        center: new google.maps.LatLng(this.getCenter()[0], this.getCenter()[1]), // new center
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
  
      this.map = new google.maps.Map(document.getElementById("maps"), mapOptions);
  
      this.setMarkers();
    }
  }
  