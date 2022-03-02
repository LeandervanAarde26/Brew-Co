$(document).ready(function(){



$(".brewery-type").on("change" , () =>{
    $(".results").empty();

    
 console.log($(".brewery-type ").val());

 let value = $(".brewery-type ").val();

 console.log("this is a " + value) //Check if let works 

  j = value; 


 const BrewType = 'https://api.openbrewerydb.org/breweries?by_type='+j;

 $.getJSON(BrewType, function(result){





    

    // console.log(result[1].brewery_type);

    for(var i = 0; i < result.length; i++){

        var Display = `
    
        <div class="col-12 result p-4 mt-4 mb-4">
        
            <h3 class="text-center">`+result[i].name+`</h3>
            <h5 class="text-center brew-info mt-3">Address</h5>
            <h5 class="text-center brew-info mt-3"></h5>
            <h5 class="text-center brew-info mt-3">website</h5>
            <h5 class="text-center brew-info mt-3">website</h5>
            <h5 class="text-center brew-info mt-3">website</h5>
            <h5 class="text-center brew-info mt-3">website</h5>
    
    
        
        
        `;

        console.log(result[i]);

       
        
        $(".results").append(Display);



            // console.log(result[i].brewery_type);




    };


 






    // for(var i = 0; i < result.length){

    // }

 

});
    
});






});


// ASK LEO 

//  const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

// $('.state').on("keypress", (event) =>{
//     var filterstates = states.filter((state) =>{
//             return state.toLowerCase().startsWith($(event.currentTarget).val().toLowerCase());

//     }); 
//     if(states.includes($(event.currentTarget).val())){
//         i = $(event.currentTarget).val().replace(/\s/g, "_").toLowerCase();
        
//         let brewState = 'https://api.openbrewerydb.org/breweries?by_state='+i+'';
 
//               $.getJSON(brewState, function(result3){
//                   console.log('hello');
//                   console.log(result3);
  
         
//        });
//     }


// });