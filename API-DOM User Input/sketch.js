//Declare Variables before hand
var baseURL;
var APIkey;
var AccessURL;
var query;
var weatherData;
var canvas;
var UserInput;
var submit;


//Set up canvas and HTML placements 
function setup() {
	canvas = createCanvas(1000,600);
	canvas.position(100,100);
	background(101,121,243);
	baseURL = "https://api.openweathermap.org/data/2.5/forecast?";
	APIkey = "8e3dbd8df7c38929165791e451680aaa";

	UserInput = createInput("Zipcode in US?");
	UserInput.position(500,50);

	submit = createButton("Enter");
	submit.position(670,50);
	submit.mousePressed(loadData);
}

function draw() {
}	

//Load data based on user input
function loadData(){
	query = UserInput.value();
	AccessURL = baseURL + "zip=" + query + "&appid=" + APIkey;
	weatherData = loadJSON(AccessURL,gatherData);
	console.log(weatherData);
}

//With input, search through API and visualize the data
function gatherData(){
	background(101,121,243);
	for(var i = 0 ; i < weatherData.list.length ; i++){
		push();
		ellipseMode(CENTER);
		textAlign(CENTER);
		textSize(60);
		text("Weather in " + weatherData.city.name,500,100);
		pop();
		push()
		var temp = weatherData.list[i].main.temp;
		var far = round((temp-273.15)*(9/5)+32);
		var farMap = map(far,0,100,100,550);
		textSize(10);
		textAlign(CENTER);
		text(far,25+(24*i),(625-farMap));
		push();
		translate(0,0);
		rotate(HALF_PI);
		text(weatherData.list[i].dt_txt, (715-farMap) ,(-1*(25+(24*i))));
		pop();
		ellipseMode(CENTER);
		ellipse(25+(24*i),(650-farMap),10,10);
		pop();
	}
}
