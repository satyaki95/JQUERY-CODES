$("button").click(function(){
    $("h1").text("Clicked");
    $("h1").toggleClass("style1");
})


$(".mybtn").click(function () {
    var value = this.innerHTML;
    $("#result").text(value + " is selected");
  });
  
  $(".mybtn").mouseover(function () {
    var value = this.innerHTML;
    $("#result").text(value + " is overed by mouse");
  });

$(".mybtn").on("click",function () {
    var value = this.innerHTML;
    $("#result").text(value + " is selected");
  });
  
  $(".mybtn").on("mouseover",function () {
    var value = this.innerHTML;
    $("#result").text(value + " is overed by mouse");
  });