var light = 250;
var lightOn = true;
var radWin = false;
var TVwin = false;

var serial;
var portName = 'COM7';
var inData;
var outByte = 0;

function setup() {
	createCanvas(1280,720);
	backgroundSetup();
	serial = new p5.SerialPort();
	serial.on('data', serialEvent);
	serial.on('error',serialError);
	serial.open(portName);
	serial.write("H");

}
function draw() {
}

function backgroundSetup(){
	rectMode(CENTER);
	fill(light);
	//Wall 1
	rect(640,360,960,540);

	//Wall2
	beginShape();
	vertex(0,0);
	vertex(160,90);
	vertex(160,630);
	vertex(0,720);
	endShape(CLOSE);

	//Wall3
	beginShape();
	vertex(1280,0);
	vertex(1120,90);
	vertex(1120,630);
	vertex(1280,720);
	endShape(CLOSE);

	//Ceiling
	beginShape();
	vertex(0,0);
	vertex(1280,0);
	vertex(1120,90);
	vertex(160,90);
	endShape(CLOSE);

	//Floor
	beginShape();
	vertex(0,720);
	vertex(1280,720);
	vertex(1120,630);
	vertex(160,630);
	endShape(CLOSE);

	//TV
	rect(640,340,350,240);
	push();
	rectMode(CORNER);
	//Radio
	rect(100,480,100,70);

	//Light Switch
	rect(25,360,25,50);

	//Window
	rect(1150,250,100,250);
	pop();

};
function mouseClicked() {
	if((mouseX > 25) && (mouseX < 50) && (mouseY > 360) && (mouseY < 410)){
		if(radWin == false && TVwin == false){
			if(lightOn == true){
				light = 50;
				lightOn = false;
				serial.write("L");
				backgroundSetup();
			}
			else{
				light = 250;
				serial.write("H");
				lightOn = true;
				backgroundSetup();
			}
		}

	}
	else if (radWin == true){
		if((mouseX > 910) && (mouseX < 930) && (mouseY > 170) && (mouseY < 190)){
			radWin = false;
			backgroundSetup();
		}
	}
	else if (TVwin == true){
		if((mouseX > 910) && (mouseX < 930) && (mouseY > 160) && (mouseY < 180)){

			TVwin = false;
			backgroundSetup();
		}
	}
	else if ((mouseX > 100) && (mouseX < 200) && (mouseY > 480) && (mouseY < 550)){
		radioWindow();
		console.log("Radio");
	}
	else if ((mouseX > 465) && (mouseX < 815) && (mouseY > 220) && (mouseY < 460)){
		console.log("TV");
		TVWindow();
	}
	else if ((mouseX > 1150) && (mouseX < 1250) && (mouseY > 250) && (mouseY < 500)){
		console.log("Window");
	}
	
}

function radioWindow(){
	radWin = true;
	push();
	strokeWeight(4);
	rect(640,360,600,400);
	rectMode(CORNER);
	rect(910,170,20,20);
	pop();
}

function TVWindow(){
	TVwin = true;
	push();
	strokeWeight(4);
	rect(640,300,600,300);
	rectMode(CORNER);
	rect(910,160,20,20);
	pop();

}

function serialEvent(){
	indata = Number(serial.read());
	//console.log(indata);


}

function serialError(err){
	console.log("Something went wrong with the serial port." + err);
}