$(document).ready(function(){
    console.log("hello")
    $(".submit").on("click", () =>{
        console.log("click");
        $(this).prop('disabled', true);
    })


})