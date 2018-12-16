//Establish Variables
var lightOn = true;
var radWin = false;
var TVtouch = false;
var radioChannel = 0;
var playingChannel;
var shadeOverlay = [255,255,255,0];

var serial;
var portName = 'COM7';
var inData;
var outByte = 0;

var colorSelect = 0;
var poster = 1;
var painting = 1;


//Preload for all visual and audio assets
function preload(){
	charleston = loadSound("assets/Charleston.mp3");
	jazzy = loadSound("assets/Jazzy.mp3");
	mer = loadSound("assets/La_Mer.mp3");
	tv1 = loadImage("assets/TV1.png");
	tv2 = loadImage("assets/TV2.png");
	tv3 = loadImage("assets/TV3.png");
	tv4 = loadImage("assets/TV4.png");


	bg1 = loadImage("assets/scene.png");
	bg2 = loadImage("assets/scene2.png");
	poster1 = loadImage("assets/Poster1.png");
	poster2 = loadImage("assets/Poster2.png");
	poster3 = loadImage("assets/Poster3.png");
	paint1 = loadImage("assets/paint1.png");
	paint2 = loadImage("assets/paint2.png");
	paint3 = loadImage("assets/paint3.png");
}

function setup() {
	frameRate(120);
	createCanvas(1280,720);
	serial = new p5.SerialPort();
	serial.on('data', serialEvent);
	serial.on('error',serialError);
	serial.open(portName);
	serial.write("H");
	playingChannel = charleston;
	playingChannel.play();
	

}

//Draw function for the layout of the room and constant updates as new data comes in
function draw() {
	if(lightOn == true){
		image(bg1,0,0,1280,720);
	}
	else{
		image(bg2,0,0,1280,720);
	}
	TVmode();
	wallart();
	fill(shadeOverlay);
	rect(0,0,1280,720);
	buttons();
}

//Function used to detect when information comes in from the arduino and what to do with that data
function serialEvent(){
	inData = Number(serial.read());
	if(inData == 52){
		TVtouch = true;
	}
	else if (inData == 54){
		TVtouch = false;
	}
	else if (inData == 49){
		if(radioChannel != 1){
			radioChannel = 1;
			radioPlay();
		}
		else{
			return;
		}
	}
	else if (inData == 50){
		if(radioChannel !=2){
			radioChannel = 2;
			radioPlay();
		}
		else{
			return;
		}
	}
	else if (inData == 51){
		if(radioChannel !=3){
			radioChannel = 3;
			radioPlay();
		}
		else{
			return;
		}
	}
	else if(inData == 55){
		lightSwitch();
	}

}

//See errors with Arudino Board if any
function serialError(err){
	console.log("Something went wrong with the serial port." + err);
}

//Takes data from Arduino and changes the radio accordingly
function radioPlay(){
	if(radioChannel ==0){
		playingChannel.stop()
	}

	else if (radioChannel == 1){
		playingChannel.stop()
		playingChannel=charleston;
		playingChannel.play();
	}
	else if (radioChannel == 2){
		playingChannel.stop()
		playingChannel=jazzy;
		playingChannel.play();
	}
	else if(radioChannel == 3){		
		playingChannel.stop()
		playingChannel=mer;
		playingChannel.play();	
	}
}

//Room Color Buttons
function buttons(){
	push();
	ellipseMode(CENTER);
	strokeWeight(4);
	fill(255,0,0);
	ellipse(20,20,20,20);
	fill(0,255,0);
	ellipse(20,50,20,20);
	fill(0,0,255);
	ellipse(20,80,20,20);
	fill(255,255,255);
	ellipse(20,110,20,20);
	pop();
}

//mouseClicked to change wall art based on location/dimensions
function mouseClicked(){
	if(dist(mouseX,mouseY,20,20)<10){
		shadeOverlay = [255,60,60,25];
		console.log("Red");
	}
	else if(dist(mouseX,mouseY,20,50)<10){
		shadeOverlay = [60,255,60,25];
		console.log("green");
	}
	else if (dist(mouseX,mouseY,20,80)<10){
		shadeOverlay = [60,60,255,25];
		console.log("blue");
	}
	else if (dist(mouseX,mouseY,20,110)<10){
		shadeOverlay = [255,255,255,0];
		console.log("white");
	}
	else if (((mouseX > 187) && (mouseX < 387)) && ((mouseY > 148) && (mouseY < 428))){
		poster++;
	}
	else if (((mouseX > 879) && (mouseX < 1104)) && ((mouseY > 218) && (mouseY < 378))){
		painting++;
	}
}


//Takes in data from arduino and displays an animation of the tv when data is true and goes away when it's false
function TVmode(){
	if(TVtouch == true){
		if(frameCount % 60 <= 15 ){
			image(tv1,440,186,400,274);
		}
		else if ((frameCount % 60 > 15) && (frameCount % 60 <= 29)){
			image(tv2,440,186,400,274);
		}
		else if((frameCount % 60 > 29 ) && (frameCount % 60 <= 45)){
			image(tv3,440,186,400,274);
		} 
		else{
			image(tv4,440,186,400,274);
		}
	}
	else{
		if(lightOn == true){
			image(bg1,0,0,1280,720);
		}
		else{
			image(bg2,0,0,1280,720);
		}
	}
}

//Takes in information from the arduino to change the room in the p5 sketch
// and sends data back into arduino to turn on and off LED
function lightSwitch(){
	if(lightOn == true){
		lightOn = false;
		serial.write("L");
	}
	else{
		serial.write("H");
		lightOn = true;
	}
}

//Creates the abckgroun with the color shaders
function backgroundColor(){
	console.log("backgroundcolor running");
	fill(shadeOverlay);
	rect(0,0,1280,720);
}


//Function that cycles through wall art based on variable value
function wallart(){
	if(poster == 1){
		image(poster1,187,148,200,280);
	}
	else if (poster == 2){
		image(poster2,187,148,200,280);
	}
	else if(poster == 3){
		image(poster3,187,148,200,280);
	}
	else if(poster >3){
		poster = 1;
	}

	if(painting == 1){
		image(paint1,879,218,225,160);
	}
	else if (painting == 2){
		image(paint2,879,218,225,160);
	}
	else if(painting == 3){
		image(paint3,879,218,225,160);
	}
	else if(painting >3){
		painting = 1;
	}

}