alert("Oops");
var animA = document.getElementById("animA");
var curver = document.getElementById("curver");
 
curver.addEventListener("click", myFunction);

function myFunction() {
    alert("ran")
    animA.style.borderRadius = 100;
    }