async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
}
function Check(x) {
	var button = document.getElementById("submit");
	var form = document.querySelector("form");
	var log = document.querySelector("#log");
	var checked_radios = document.querySelectorAll('input[type=radio]:checked');
	var nbr_checked_radios = document.querySelectorAll('input[type=radio]:checked').length;

	if (nbr_checked_radios == 1) {
		button.disabled = false;
	}
	form.addEventListener("submit", function(event) {
		var data = new FormData(form);
		var output = "";
		for (const entry of data) {
		  // output = output + entry[0] + "=" + entry[1] + "\r";
		  output = output + entry[1] + "\r";
		};
	    // log.innerText = nbr_checked_radios;
	    // log.innerText = checked_radios[0].value;
		event.preventDefault();
	  }, false);
}

function makePlot() {
	// var button = document.getElementById("submit");
	// var form = document.querySelector("form");
	// var log = document.querySelector("#log");
	var checked_radios = document.querySelectorAll('input[type=radio]:checked');
	img1 = document.getElementById("image1");
	img2 = document.getElementById("image2");
	img3 = document.getElementById("image3");
	console.log(img1)
	
	var chk = checked_radios[0].value // low, mid, high
	console.log(checked_radios[0].value)
	if (chk == "low") {
		img1.style.visibility = "visible";
		img1.style.display = "inline-block"

		img2.style.visibility = "hidden";
		img2.style.display = "none"

		img3.style.visbility = "hidden";
		img3.style.display = "none"

		console.log(img1)
		
	} else if (chk == "mid") {
		img2.style.visibility = "visible";
		img2.style.display = "inline-block"

		img1.style.visibility = "hidden";
		img1.style.display = "none"

		img3.style.visbility = "hidden";
		img3.style.display = "none"

	} else {
		img3.style.visibility = "visible";
		img3.style.display = "inline-block"

		img2.style.visibility = "hidden";
		img2.style.display = "none"

		img1.style.visbility = "hidden";
		img1.style.display = "none"
	}
	

	// // var chk2 = checked_radios[1].value // no mask, n95, 40
	// // var chk3 = checked_radios[2].value // 1, 3, 5
	// // var chk4 = checked_radios[3].value // 3, 5, 7
	// // var chk5 = checked_radios[4].value // yes, no

	// var pointSize = 3
	// var c = document.getElementById("myCanvas");
	// var ctx = c.getContext("2d");
	
	// // for (const x of)
	// ctx.fillStyle = "#000000";
	// ctx.beginPath();
	// ctx.arc(160, 275, 3, 0, 2 * Math.PI);
	// ctx.fill();
}

// document.addEventListener('DOMContentLoaded', init, false);