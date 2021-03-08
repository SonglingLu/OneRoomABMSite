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

	if (nbr_checked_radios == 5) {
		button.disabled = false;
	}
	form.addEventListener("submit", function(event) {
		var data = new FormData(form);
		var output = "";
		for (const entry of data) {
		  // output = output + entry[0] + "=" + entry[1] + "\r";
		  output = output + entry[1] + "\r";
		};
	    //log.innerText = nbr_checked_radios;
	    // log.innerText = checked_radios[0].value;
		event.preventDefault();
	  }, false);
}

console.log()

function makePlot() {
	var button = document.getElementById("submit");
	var form = document.querySelector("form");
	var log = document.querySelector("#log");
	var checked_radios = document.querySelectorAll('input[type=radio]:checked');
	
	var chk1 = checked_radios[0].value // 10, 25, 40
	var chk2 = checked_radios[1].value // no mask, n95, 40
	var chk3 = checked_radios[2].value // 1, 3, 5
	var chk4 = checked_radios[3].value // 3, 5, 7
	var chk5 = checked_radios[4].value // yes, no

	var pointSize = 3
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	
	// for (const x of)
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.arc(160, 275, 3, 0, 2 * Math.PI);
	ctx.fill();
}

// document.addEventListener('DOMContentLoaded', init, false);