//Sort Guitar Manufacturers by Years
//pre 1900 #A8A878
//1900-1909 #4b7f33
//1910-1919 #6890F0
//1920-1929 #78C850
//1930-1939 #F85888
//1940-1949 #A8B820
//1950-1959 #705848
//1960-1969 #E0C068
//1970-1979 #B8B8D0
//1980-1989 #98D8D8
//1990-1999 #F8D030
//2000-2009 #A040A0
//2010-now #F08030
//Unknown #705898

//Set up Variables
var DataArray = [];
var guitarManufacturers;

function preload(){
	//Load JSON file
	guitarManufacturers = loadJSON("assets/a_list_of_guitar_manufacturers.json");
}

function setup() {
	createCanvas(1200,700);
	//Set up Array with Dimensions as well as color
	DataArray[0] =new data('#A8A878',"Pre 1900");
	DataArray[1] =new data('#4b7f33',"1900-1909");
	DataArray[2] =new data('#6890F0',"1910-1919");
	DataArray[3] =new data('#78C850',"1920-1929");
	DataArray[4] =new data('#F85888',"1930-1939");
	DataArray[5] =new data('#A8B820',"1940-1949");
	DataArray[6] =new data('#705848',"1950-1959");
	DataArray[7] =new data('#E0C068',"1960-1969");
	DataArray[8] =new data('#B8B8D0',"1970-1979");
	DataArray[9] =new data('#98D8D8',"1980-1989");
	DataArray[10] =new data('#F8D030',"1990-1999");
	DataArray[11] =new data('#A040A0',"2000-20009");
	DataArray[12] =new data('#F08030',"2010-Now");
	DataArray[13] =new data('#705898',"Unknown");

	collectData();
}

function draw(){
	fill(0);
	background(100,150,240);
	strokeWeight(4);	
	textAlign(CENTER);
	textSize(30);
	text('Guitar Manufacturers by Year Founded',600,50);
	textSize(10);
	line(50,600,1150,600)
	ellipseMode(CENTER);
	for(var i = 0 ; i<DataArray.length ; i++){
		fill(0);
		text(DataArray[i].yearRange,(100+i*75),625);
		for(var j = 0 ; j<DataArray[i].count ; j++){
			fill(DataArray[i].color);
			ellipse((100+i*75),(580-(j*20)),10,10);
		}
	}
}

//Data class for the data array
function data(col,year){
	this.color = col;
	this.count = 0;
	this.yearRange = year;

	this.addcount = function(){
		this.count++;
	}
};

//Syphering data form the JSON file into the data array
function collectData(){
	for (var i = 0 ; i<guitarManufacturers.guitar_manufacturing_companies.length ; i++){
		if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded < 1900){
			DataArray[0].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1900 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <1910){
			DataArray[1].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1910 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <1920){
			DataArray[2].addcount();

		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1920 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <1930){
			DataArray[3].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1930 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <1940){
			DataArray[4].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1940 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <1950){
			DataArray[5].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1950 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <1960){
			DataArray[6].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1960 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <1970){
			DataArray[7].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1970 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <1980){
			DataArray[8].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1980 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <1990){
			DataArray[9].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=1990 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <2000){
			DataArray[10].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=2000 && guitarManufacturers.guitar_manufacturing_companies[i].year_founded <2010){
			DataArray[11].addcount();
		}
		else if(guitarManufacturers.guitar_manufacturing_companies[i].year_founded >=2010){
			DataArray[12].addcount();
		}
		else {
			DataArray[13].addcount();
		}
	}
}