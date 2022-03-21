var locationArray =[];  //empty array
var map;
var markers =[];
var geocoder = new google.maps.Geocoder(); 

function getCenter(){
    let long = 0;
    let lat = 0;
    for(var i = 0; i < locationArray.length; i++){
        lat+= Number(locationArray[i][1]);
        long+= Number(locationArray[i][2]);

    }
    if(locationArray.length != 0){
        lat/=locationArray.length;
        long/=locationArray.length;
    }

    console.log("lat="+lat +" long="+ long);
    return [lat,long];
}

function createAddress(Address){
    geocoder.geocode({"address":Address}, (results,status) =>{
 

        if(status == google.maps.GeocoderStatus.OK){
            return[results[0].geometry.location];
        } else{
            marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map
    
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locationArray[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
            markers.push(marker);
           
    
        }
    });

}


function setMarkers(locations){
    for(var j = 0; j < markers.length; j++){
        markers[j].setMap(null); 
    }
    markers =[];
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locationArray.length; i++) {  
        if(locationArray[i][1] == null){
        //    createAddress(locationArray[i][3]);
        }else{
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locationArray[i][1], locationArray[i][2]),
                map: map
    
            });
           
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locationArray[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
            markers.push(marker);

        }

    }
}


function initializeMap() {
    map = null;
    document.getElementById('maps').innerHTML = '';
    console.log("initializing map");
    console.log(locationArray)
    var mapOptions = {
        zoom: 2,
        center: new google.maps.LatLng(getCenter()[0],getCenter()[1]), //new center
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('maps'), mapOptions);

  
    setMarkers(locationArray);


  
}



google.maps.event.addDomListener(window, 'load', initializeMap);

$(document).ready(function(){
 
    //Find  brewery based on type
    $(".brewery-type").on("change" , () =>{
        $(".result-T").empty();
            //Log the value that the user has entered 
         console.log($(".brewery-type ").val());
        // Value of user in Variable
         let value = $(".brewery-type ").val();
          //  console log test
         console.log("this is a " + value) //Check if let works 
         // Converted value variable based on let Value in order to make url look better
          j = value; 
        // Breweries filtered by type URL
         const BrewType = 'https://api.openbrewerydb.org/breweries?by_type='+j;
         // Get JSON
         $.getJSON(BrewType, function(result){
        // Loop through array 
            locationArray = [];
             for(var i = 0; i < result.length; i++){
                // HTML element

                let Name = result[i].name;
                let Lattitude = result[i].latitude;
                let Longitude = result[i].longitude;
           

                let tempArray = [Name,Lattitude,Longitude];

                

                locationArray.push(tempArray);

                


                 if(result[i].street === null){
                    let  Display = `
                    
                    <tr>
                    <td>`+result[i].name+`</td>
                    <td>`+result[i].state+`, `+result[i].city+`</td>
                    <td class="d-none d-lg-block">Unkown</td>
                    <td>`+result[i].brewery_type+`</td>
                    <td><a href="`+result[i].website_url+`">Go to website</a></td>
                    </tr>
                    `;

                        $(".result-T").append(Display);
                        
                    } else if( result[i].state === null){

                        let  Display = `
                        <tr>
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].city+`</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td><a href="`+result[i].website_url+`">Go to website</a></td>
                        </tr>
                        `;



                        $(".result-T").append(Display);


                    } else if(result[i].city === null){

                        let  Display = `
        
                        <tr>
                     
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].state+`</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td><a href="`+result[i].website_url+`">Go to website</a></td>
                        </tr>
                        `;
    
    
    
                            $(".result-T").append(Display);

                    }  else if(result[i].city === null && result[i].state === null){

                        let  Display = `
        
                        <tr>
                     
                        <td>`+result[i].name+`</td>
                        <td>Unknown</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td><a href="`+result[i].website_url+`">Go to website</a></td>
                        </tr>
                        `;
    
    
                            $(".result-T").append(Display);

                    }else if(result[i].website_url == null){

                        let  Display = `
        
                        <tr>
                     
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].state+`, `+result[i].city+`</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td>Unknown</a></td>
                        </tr>
                        `;
  
                          $(".result-T").append(Display); 
                    
                     } else{

                        let  Display = `
        
                        <tr>
                     
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].state+`, `+result[i].city+`</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td><a href="`+result[i].website_url+`">Go to website</a></td>
                        </tr>
                        `;
                        

                        $(".result-T").append(Display);

                    } //else 

                // console.log(result[i].brewery_type);

    
               }//for loop end
               
               




            

    
          }).then(() =>{

            initializeMap();
            

          }); 
        
    }); //on change function end

 
// Search by state
    $(".state").on("input", () =>{
       
        $(".result-T").empty();
        const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
        let StateValue = $(".state").val();  
        
        const BrewState = 'https://api.openbrewerydb.org/breweries?by_state='+StateValue;

        $.getJSON(BrewState, function(result){

            locationArray = [];
             for(var i = 0; i < result.length; i++){
                // HTML element

                let Name = result[i].name;
                let Lattitude = result[i].latitude;
                let Longitude = result[i].longitude;
           

                let tempArray = [Name,Lattitude,Longitude];

                locationArray.push(tempArray);
             }



            for(var i = 0; i < result.length; i++){

                let StateValueLow = StateValue.toLowerCase();

                

                var match = result[i].state.toLowerCase().match(StateValueLow);

                
                if (match.length != 0 ) {
                    // console.log(match);

                    let  Display = `
        
                        <tr>
                     
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].state+`, `+result[i].city+`</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td><a href="`+result[i].website_url+`">Go to website</a></td>
                        </tr>
                        `;
                    console.log(result[i].state);
                     
                    $(".result-T").append(Display);

                    
                } else if(result[i].street === null){
                    let  Display = `
                    
                    <tr>
                    
                    <td>`+result[i].name+`</td>
                    <td>`+result[i].state+`, `+result[i].city+`</td>
                    <td class="d-none d-lg-block">Unkown</td>
                    <td>`+result[i].brewery_type+`</td>
                    <td><a href="`+result[i].website_url+`">Go to website</a></td>
                    </tr>
                    `;

                        $(".result-T").append(Display);
                        
                    } else if( result[i].state === null){

                        let  Display = `
                        <tr>
                     
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].city+`</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td><a href="`+result[i].website_url+`">Go to website</a></td>
                        </tr>
                        `;



                        $(".result-T").append(Display);


                    } else if(result[i].city === null){

                        let  Display = `
        
                        <tr>
                     
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].state+`</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td><a href="`+result[i].website_url+`">Go to website</a></td>
                        </tr>
                        `;
    
    
    
                            $(".result-T").append(Display);

                    }  else if(result[i].city === null && result[i].state === null){

                        let  Display = `
        
                        <tr>
                     
                        <td>`+result[i].name+`</td>
                        <td>Unknown</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td><a href="`+result[i].website_url+`">Go to website</a></td>
                        </tr>
                        `;
    
    
                            $(".result-T").append(Display);

                    }else if(result[i].website_url == null){

                        let  Display = `
        
                        <tr>
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].state+`, `+result[i].city+`</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td>Unknown</a></td>
                        </tr>
                        `;
  
                          $(".result-T").append(Display); 
                    
                     } else if(result[i.street == null]){

                        let  Display = `
        
                        <tr>
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].state+`, `+result[i].city+`</td>
                        <td class="d-none d-lg-block">Unkown</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td>Unknown</a></td>
                        </tr>
                        `;
  
                          $(".result-T").append(Display); 
                        
                     }else{

                        let  Display = `
        
                        <tr>        
                        <td>`+result[i].name+`</td>
                        <td>`+result[i].state+`, `+result[i].city+`</td>
                        <td class="d-none d-lg-block">`+result[i].street+`</td>
                        <td>`+result[i].brewery_type+`</td>
                        <td><a href="`+result[i].website_url+`">Go to website</a></td>
                        </tr>
                        `;
                        

                        $(".result-T").append(Display);

                    }
            }

    }).then(() =>{

            initializeMap();
    });


    });

    // Get brewery by name

    $(".name").on("input", () =>{

        

        $(".result-T").empty();
        let NameValue = $(".name").val();  
        
        const BrewName = 'https://api.openbrewerydb.org/breweries/search?query='+ NameValue;

        $.getJSON(BrewName, function(result){

            locationArray = [];
            for(var i = 0; i < result.length; i++){
               // HTML element

               let Name = result[i].name;
               let Lattitude = result[i].latitude;
               let Longitude = result[i].longitude;
          

               let tempArray = [Name,Lattitude,Longitude];

               locationArray.push(tempArray);
            }


            for(var i = 0; i < result.length; i++){

                let NameV = NameValue.toLowerCase();

                let  Display = `
        
                <tr>     
                <td>`+result[i].name+`</td>
                <td>`+result[i].state+`, `+result[i].city+`</td>
                <td class="d-none d-lg-block">`+result[i].street+`</td>
                <td>`+result[i].brewery_type+`</td>
                <td><a href="`+result[i].website_url+`">Go to website</a></td>
                </tr>
                `;
                

                $(".result-T").append(Display);


                var match = result[i].name.toLowerCase().match(NameV);

                
                if (match.length != 0 ) {
                    // console.log(match);
                    console.log(result[i].name);
                     
                    $(".result-T").append(Display);

                    

                }
            }
    }).then(() =>{

        initializeMap();
});



    });


    
}); //Document ready function ends here
