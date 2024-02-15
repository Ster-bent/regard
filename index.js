alert("1");
var animA = document.getElementById("animA");
var body = document.getElementById("body")
var curver = document.getElementById("curver");
 
curver.addEventListener("click", myFunction);

function myFunction() {
    alert("ran")
    body.style.backgroundColor = "blue";
    }