async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
}
function Check(x) {
	var button = document.getElementById("submit");
	var form = document.querySelector("form");
	var log = document.querySelector("#log");
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
	  //   log.innerText = output;
	  log.innerText = nbr_checked_radios;
		event.preventDefault();
	  }, false);
}

function plotYearSales(yearSales) {

	// Borrowed code from zingcharts code (main.js)
    let years = [];
    let totals = [];
    let totalByYear = [];
	for (datum of yearSales) {
        years.push(datum['Year']);
        totals.push(Number(datum['Total'].toFixed(2)));
        totalByYear.push([datum['Year'], Number(datum['Total'].toFixed(2))])
    }

	Highcharts.chart("lineChart", {
		chart: {
			type: "line",
			marginRight: 45,
			marginLeft: 65,
			marginBottom: 75
		},
		title: {
			text: '',
			style: {
				fontFamily: "Montserrat",
				fontWeight: "bolder",
				color: "black"
			}
		},
		subtitle: {
			text: 'Placeholder',
			style: {
				fontFamily: "Montserrat",
				fontSize: "15px",
				color: "black"
			}
		},
		xAxis: {
			labels: {
				style: {
					fontSize: "12px",
					fontFamily: "Montserrat",
					color: "black"
				},
			},
			tickInterval: 1,
			title: {
				text: "Year",
				style: {
					fontFamily: "Montserrat",
					fontWeight: "bold",
					color: "black"
				}
			},
			tooltip: {
				enabled: true,
			},
			min: years[0],
			lineColor: "#a9a9a9",
			lineWidth: 1,
			tickColor: "#a9a9a9",
			tickLength: 5,
			tickWidth: 1,
			crosshair: {
				width: 1,
				color: "#808080",
				label: {
					enabled: true, 
					overflow: 'justify'
				}
			}
		},
		yAxis: {
			min: 0,
			max: 40000,
			title: {
				text: 'Total Number of Locations',
				align: 'middle',
				style: {
					fontFamily: "Montserrat",
					fontWeight: "bold",
					color: "black"
				}
			},
			lineColor: "#a9a9a9",
			lineWidth: 1,
			tickColor: "#a9a9a9",
			tickLength: 5,
			tickWidth: 1,
			labels: {
				overflow: 'justify',
				style: {
					fontSize: "12px"
				}
			},
			crosshair: {
				width: 1,
				color: "#808080"
			},
			tickInterval: 5000,
			gridLineDashStyle: "ShortDash",
			gridLineColor: "#dcdcdc"
		},
		legend: {
			enabled: true,
			align: "center",
			borderWidth: 0,
			verticalAlign: "top",
			symbolRadius: 0,
		},
		plotOptions: {
			areaspline: {
				color: "#00bfff",
				fillOpacity: "0.3"
			}
		},
		exporting: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		series: [{
			data: totalByYear,
			name: "Total Locations Worldwide",
			color: "#a67c00",
			showInLegend: true,
			tooltip: {
				pointFormat: '{point.y}',
				headerFormat: '{null}'
			},
			states: {
				hover: {
					enabled: false
				}
			}
		}],
	});

	document.addEventListener('DOMContentLoaded', init, false);}