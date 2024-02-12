alert("Oops");
var animA = document.getElementById("animA");
var curver = document.getElementById("curver");
 
curver.addEventListener("click", myFunction);

function myFunction() {
    alert("ran")
    for (var i = 0; i <= 100; i = i+1){
        animA.style.borderRadius = i+"px";
    }
}
