window.onload = function(){
	let wallboundaries = document.querySelectorAll(".boundary");
	for(var i = 0; i < wallboundaries.length; i++){
			wallboundaries[i].addEventListener("mouseover", function(){
				for(var i = 0; i < wallboundaries.length; i++){
						wallboundaries[i].className = "boundary youlose";
				}
			});
	}

	var end = document.getElementById("end");
	end.addEventListener("mouseover", function(){
		if (document.getElementsByClassName("youlose").length == 0){
			alert("You Win!!");
		}
	});
}