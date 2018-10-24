window.onload = function(){

	let wallboundaries = document.querySelectorAll(".boundary");

	for(var i = 0; i < wallboundaries.length; i++){
			wallboundaries[i].addEventListener("mouseover", function(){
				for(var i = 0; i < wallboundaries.length; i++){
						wallboundaries[i].className = "boundary youlose";

				}
				document.getElementById("status").textContent = "You lose!"
			});
	}

	/*var end = document.getElementById("end");
	end.addEventListener("mouseover", function(){
		if (document.getElementsByClassName("youlose").length == 0){
			alert("You Win!!");
		}
	});*/

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

	var end = document.getElementById("end");
	var status = document.getElementById("status");

	end.addEventListener("mouseover", function(){
		if(document.querySelectorAll(".youlose").length == 0){
			status.textContent = "You win!";
		}
	});

	let cheatCheck = document.getElementById("start");
	let maze = document.getElementById("maze");

	cheatCheck.addEventListener("mouseout", function(){
		maze.addEventListener("mouseleave", function(){
			for(var i = 0; i < wallboundaries.length; i++){
				document.getElementById("status").textContent = "You lose!"
				for(var i = 0; i < wallboundaries.length; i++){
					if( wallboundaries[i].className.indexOf("example") == -1){
						wallboundaries[i].className = "boundary youlose";
					}
				}
			}
		});
	});
}