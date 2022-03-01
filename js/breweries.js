$(document).ready(function(){
    console.log("Breweries linked");

    //urls for beer
    
    const allBreweries = "https://api.openbrewerydb.org/breweries";

    const brewDist = "https://api.openbrewerydb.org/breweries?by_dist=38.8977,77.0365";

    const brewName = "https://api.openbrewerydb.org/breweries?by_name=cooper";

    const brewState = 'https://api.openbrewerydb.org/breweries?by_state=ohio';

    const brewType = "https://api.openbrewerydb.org/breweries?by_type=micro"

    const item ; 


    $.getJSON(allBreweries, function(result){
        
    });


    $.getJSON(brewDist, function(result1){
        console.log(result1);
    });

    $.getJSON(brewName, function(result2){
        console.log(result2);
    });

    $.getJSON(brewState, function(result3){
        console.log(result3);
    });

    $.getJSON(brewType, function(result4){
        console.log(result4);
    });


});