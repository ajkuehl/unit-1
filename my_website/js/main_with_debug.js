// A.Kuehl GEOG 575 activity 3 javascrpt main_with_debug.js

//initialize function called when the script loads
function initialize(){
	cities();
};

//cities function is created
function cities(){
	//the variable cityPop, an array, is created and holds 4 objects with two properties in each: cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	//jquery is used to select the id #mydiv and the append method adds a table to mydiv
	$("#mydiv").append("<table>");

	//append a header row to the table
	//jquery selects the table element and the append method adds a header row
	$("table").append("<tr>");

	//header names for each row
	// jquery slects the header row element and the append method adds the title of of city and population
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
	//cityPop contains 4 cities. This for loop will add one city at a time to the rowHtml variable until the length of cityPop is complete.
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
				//jqery selects the table element and adds in the rowHtml variable
        $("table").append(rowHtml);
    };
		//calling two functions that are defined below.
    addColumns(cityPop);
    addEvents();
};

//this function adds an additional column called City Size to the variable cityPop
function addColumns(cityPop){
// jquery selects the header element and uses an each method with an anonymous function to pass the index element into the function as a variable
    $('tr').each(function(i){
			//adding conditional statement below that appends the title City Size the above function cities
    	if (i == 0){
				//jquery selects the current element (tr) and the append method to assign City Size to header row
    		$(this).append('<th>City Size</th>');
    	} else {
				//for all remaining rows in the cities function will append the citySize variable
    		var citySize;
				//adding conditional statements below that classifies citySize as small, medium, or large based on population size in the cityPop array
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
				// jquery selects the current element and uses the append method to add the citySize variable to each row
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

// addEvents function is created
function addEvents(){
// jquery selects the table element and applie a mouseover method using an anonymous function.
	$('table').mouseover(function(){
		// variable for color is defined which below will be added to the random variable that will be created next
		var color = "rgb(";
		// a never ending for loop is used below to assign random digits to the random variable
		for (var i=0; i<3; i++){
			// random variable is assigned to a Math module and the round and random methods *255 to generate different numbers
			var random = Math.round(Math.random() * 255);
			// the color variable is appended to the random variable
			color += random;
			// Conditional statements are used to append in commas or a paretheses to close the value on the color variable
			if (i<2){
				color += ",";

			} else {
				color += ")";
			}
		};
		// jquery selects the current element and uses the css method with the color listener to set the value of they style (color) attribute to the table
		$(this).css('color', color);
	});


	//another new function called click me which is part of addEvents function which is called above
	function clickme(){
		// this function includes an alert, or a pop-up box with the following text when the function is called.
		alert('Hey, you clicked me!');
	};
	// jquery slects the table element and uses the on method with an event lisener 'click' to indicate the clickme function should be called
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
//indicates end of script
$(document).ready(initialize);
