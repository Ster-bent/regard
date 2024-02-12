alert("Oops");
var animA = document.getElementById("animA");

const button = document.querySelector('curver') 
 
button.addEventListener('click', e => { 
	alert('I have been clicked'); 
    for (var i = 0; i <= 100; i+1) {
        animA.style.borderRadius = i;
    }
}) 

