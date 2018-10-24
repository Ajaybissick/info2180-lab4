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

	var start = document.getElementById("start");
	var status = document.getElementById("status");

	start.addEventListener("click", function(){
		var walls = document.querySelectorAll(".boundary");
			for(var i = 0; i < walls.length; i++){
				if(walls[i].className == "boundary example"){
					continue;
				}
				walls[i].className = "boundary";
			}

			status.textContent = "Move your mouse over the \"S\" to begin.";
	});
}