var light = 250;
var lightOn = true;
var radWin = false;
var TVtouch = false;
var radioChannel = 0;
var playingChannel;

var serial;
var portName = 'COM7';
var inData;
var outByte = 0;

function preload(){
	charleston = loadSound("assets/Charleston.mp3");
	jazzy = loadSound("assets/Jazzy.mp3");
	mer = loadSound("assets/La_Mer.mp3");
	tv1 = loadImage("assets/TV1.png");
	tv2 = loadImage("assets/TV2.png");
	tv3 = loadImage("assets/TV3.png");
	tv4 = loadImage("assets/TV4.png");
}

function setup() {
	frameRate(120);
	createCanvas(1280,720);
	backgroundSetup();
	serial = new p5.SerialPort();
	serial.on('data', serialEvent);
	serial.on('error',serialError);
	serial.open(portName);
	serial.write("H");
	playingChannel = charleston;
	playingChannel.play();
	

}
function draw() {
	TVmode();
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

function serialError(err){
	console.log("Something went wrong with the serial port." + err);
}

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

function keyPressed(){
	if(keyCode == DOWN_ARROW){
		radioChannel =0;
		radioPlay();
	}
}

function TVmode(){
	if(TVtouch == true){
		if(frameCount % 60 <= 15 ){
			image(tv1,465,220,350,240);
		}
		else if ((frameCount % 60 > 15) && (frameCount % 60 <= 29)){
			image(tv2,465,220,350,240);
		}
		else if((frameCount % 60 > 29 ) && (frameCount % 60 <= 45)){
			image(tv3,465,220,350,240);
		} 
		else{
			image(tv4,465,220,350,240);
		}
	}
	else{
		backgroundSetup();
	}
}

function lightSwitch(){
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