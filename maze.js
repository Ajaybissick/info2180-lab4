window.onload = function(){
	let wallboundaries = document.querySelectorAll(".boundary");
	for(var i = 0; i < wallboundaries.length; i++){
			wallboundaries[i].addEventListener("mouseover", function(){
				for(var i = 0; i < wallboundaries.length; i++){
						wallboundaries[i].className = "boundary youlose";
				}
			});
	}
}