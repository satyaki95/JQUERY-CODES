// var getAtt = document.querySelector("a").getAttribute("href");
// console.log(getAtt);


var getAtt = $("a").attr("href");
console.log(getAtt);


$("a").removeAttr("href");
console.log(getAtt);


// document.querySelector("a").setAttribute("href","https://www.youtube.com/watch?v=eosp4QAbu-U&list=PLgH5QX0i9K3pSJG9Hwjnykd0hLGEsW4DB&index=4");

$("a").attr("href","https://www.youtube.com/watch?v=eosp4QAbu-U&list=PLgH5QX0i9K3pSJG9Hwjnykd0hLGEsW4DB&index=4");