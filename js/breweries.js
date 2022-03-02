$(document).ready(function(){



$(".brewery-type").on("change" , () =>{


    
 console.log($(".brewery-type ").val());

 let value = $(".brewery-type ").val();

 console.log("this is a " + value) //Check if let works 

 var j = value; 


 const BrewType = 'https://api.openbrewerydb.org/breweries?by_type='+j;

 $.getJSON(BrewType, function(result){

    

    // console.log(result[1].brewery_type);

    for(var i =0; i < result.length; i++){
        console.log(result[i]);
        
        if( j === result[i].brewery_type ){

            places = [result[i]];



            // console.log(result[i].brewery_type);

            let Display = `

            <div class="row results p-3">
            
            <div class="col-12 result p-4 mt-4 mb-4">
            
                <h3 class="text-center">`+result[i].name+`</h3>
                <h5 class="text-center brew-info mt-3">Address</h5>
                <h5 class="text-center brew-info mt-3">`+result[i].brewery_type+`</h5>
                <h5 class="text-center brew-info mt-3">website</h5>
                <h5 class="text-center brew-info mt-3">website</h5>
                <h5 class="text-center brew-info mt-3">website</h5>
                <h5 class="text-center brew-info mt-3">website</h5>
        
            </div>
            
            
            `;
              
 
            //     $(".results").empty();
            
            // $(".results").append(Display);



        }

    }


 






    // for(var i = 0; i < result.length){

    // }

 

});
    
});






});