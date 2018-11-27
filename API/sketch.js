var baseURL;
var key;
var AccessURL;
var query;
var weatherData;

function setup() {
	createCanvas(1000,650);
	background(101,121,243);
	baseURL = "https://api.openweathermap.org/data/2.5/forecast?";
	key = "8e3dbd8df7c38929165791e451680aaa";
	query = 5110302;
	AccessURL = baseURL + "id=" + query + "&appid=" + key;
	loadData();
}

function draw() {
	push();
	ellipseMode(CENTER);
	textAlign(CENTER);
	textSize(60);
	text("Weather in Brooklyn",500,100);
	pop();
}	

function loadData(){
	weatherData = loadJSON(AccessURL,gatherData);
	console.log(weatherData);
}

function gatherData(){
	for(var i = 0 ; i < weatherData.list.length ; i++){
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

function weatherData(){

};