window.onload = function(){
	let wallboundary = document.getElementById("boundary1");
	wallboundary.addEventListener("mouseover", function(){
		wallboundary.className = "boundary youlose";
	});
}