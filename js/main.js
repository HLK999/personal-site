$(function(){
    setTimeout(function(){
        var $img = $("img");
        $img.fadeTo(4000, 0.5);
    }, 500);
});

// function greeting(){
//     alert("Hello, world!");
// }
//
// setTimeout(greeting, 2000);



//Want to make sure that the DOM html elements are loaded before js tries doing stuff... which it couldn't if the thing in question (e.g., an image) isn't there.
