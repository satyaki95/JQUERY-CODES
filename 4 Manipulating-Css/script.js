$("h1").css("color","red");
$("h1").css("font-size","3rem");
$("h1").css("font-style","italic");


// Json

$("h1").css({
    "color":"green",
    "font-size":"5rem",
    "font-style":"bold"
});


// Add Css Class

document.querySelector("h1").classList.add("style1");
document.querySelector("h1").classList.remove("style1");



$("h1").addClass("style1");
$("h1").removeClass("style1"); // Remove Class


$("h1").addClass("style1 style2"); // Add Multi Css Class
$("h1").removeClass("style1 style2");