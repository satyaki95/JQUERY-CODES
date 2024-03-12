
// Methods
/*******
 * text()
 * html()
 * append()
 * prepend()
 * after()
 * before()
 ******/

$(".my-div h1").text("Change");
$("#p1").text("Change");


$("#p1").html("<h1>Change</h1>");


$("#p2").append("<h1>Change1</h1>");


$("#p2").prepend("<h1>Change2</h1>");

debugger;
var myPara1 = $("<p/>").text("This is paragraph after");
$('#p3').after(myPara1);

var myPara2 = $("<p/>").text("This is paragraph before");
$('#p3').before(myPara2);