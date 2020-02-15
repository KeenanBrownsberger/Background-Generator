var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // The period is there because we are referencing  a class selector, which is the same way we do it in css.
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"; // Adds linear-gradient information on webpage.
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);