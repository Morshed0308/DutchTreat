
$(document).ready(function () {



    var x = $("#theForm");
    x.hide();



var btnEvent = $("#buyBtn");

btnEvent.on("click",
    function () {
        console.log("You are buying a ticket");
    });


var productinfo = $(".product-prop li");

productinfo.on("click", function () {
    console.log("You clicked on: " + $(this).text());

    });

    var $togglelogin = $("#logintoggle");
    var $popupForm = $(".popup-form");

    $togglelogin.on("click", function () {
        $popupForm.toggle();
    });






});


