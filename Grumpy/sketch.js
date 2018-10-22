//Different Stages Trigger Different Bgs
//Stage1 = Default Screen
//Stage2 = Feed Screen
//Stage3 = Clean Screen
//Stage4 = Sleep Screen
var hoverButton = 0;
var stages = 0;
var Back = false;


function preload(){
	//LOADING VARIOUS ASSETS INTO THE CODE PROJECT FOR
	//READY USE
	grumpy1 = loadImage("assets/Grumpy-Body-1.png");
	grumpy2 = loadImage("assets/Grumpy-Body-2.png");
	Eyes1 = loadImage("assets/Eyes-1.png");
	Eyes2 = loadImage("assets/Eyes-2.png");
	Eyes3 = loadImage("assets/Eyes-3.png");
	Food1 = loadImage("assets/food.png");
	Food2 = loadImage("assets/food.png");
	Food3 = loadImage("assets/food.png");
	shower1 = loadImage("assets/shower-1.png");
	shower2 = loadImage("assets/shower-2.png");
	back = loadImage("assets/back.png");
	pillow = loadImage("assets/pillow.png");
	myFont = loadFont("assets/BebasNeue-Regular.ttf");
}

function setup() {
	frameRate(120);
	createCanvas(700,700);
	//INITIALIZING FONT
	textFont(myFont);
}

function draw() {
	//When mouse hovers over the buttons, shades of button change
	//to show interactivity option
	if (((mouseX > 50) && (mouseX < 200)) && ((mouseY > 560) && (mouseY < 640))){
		hoverButton = 1;
	}
	else if(((mouseX > 275 ) && (mouseX < 425)) && ((mouseY > 560) && (mouseY < 640))){
		hoverButton = 2;
	}
	else if(((mouseX > 500 ) && (mouseX < 675)) && ((mouseY > 560) && (mouseY < 640))){
		hoverButton = 3;
	}
	else{
		hoverButton = 0;
	}
	if(stages == 0){
		defaultscreenbg();
		defaultgrumpy();
		buttons();
	}
	else if (stages == 1){
		feedScreenbg();
		feedgrumpy();
		backButton();
		Back = true;
	}
	else if (stages == 2){
		cleanScreenbg();
		cleangrumpy();
		backButton();
		Back = true;
	}
	else if (stages == 3){
		sleepScreenbg();
		sleepgrumpy();
		backButton();
		Back = true;
	}
	else{
		return;
	}
}

function buttons(){
	push();
	strokeWeight(5);
	rectMode(CENTER);
	fill(150);
	rect(125,600,150,80);
	rect(350,600,150,80);
	rect(575,600,150,80);
	if (hoverButton == 1){
		fill(175);
		rect(125,600,150,80);
	}
	else if(hoverButton ==2){
		fill(175);
		rect(350,600,150,80);
	}
	else if (hoverButton == 3){
		fill(175);
		rect(575,600,150,80);
	}
	else{
		fill(150);
		rect(125,600,150,80);
		rect(350,600,150,80);
		rect(575,600,150,80);
	}
	textSize(48);
	fill(0);
	textAlign(CENTER);
	text('FEED',125,617);
	text('CLEAN',350,617);
	text('SLEEP',575,617);	
	pop();
}

function backButton(){
	//Button to return to the home screen
	var hover = dist(mouseX,mouseY,650,50);
	push();
	imageMode(CENTER);
	if(hover<35.5){
		image(back,650,50,85,85);
	}
	else{
		image(back,650,50,75,75);
	}
	pop();
}

function defaultscreenbg(){
	//background setup for the default screen
	push();
	noStroke();
	rectMode(CORNER);
	fill(180,180,220);
	rect(0,0,700,500);
	fill(120,120,190);
	ellipseMode(CENTER);
	ellipse(350,700,1200,600);
	pop();
}

function defaultgrumpy(){
	//Draw Grumpy based on images
	//Map and constrains added to add interactivity 
	//of Grumpy's Eyes with mouse
	var GrumpyEyesX;
	GrumpyEyesX = map(mouseX,0,700,300,400);
	GrumpyEyesY = map(mouseY,0,700,325,400);
	GrumpyEyesX = constrain(GrumpyEyesX,300,400);
	GrumpyEyesY = constrain(GrumpyEyesY,325,400);
	push();
	imageMode(CENTER);	
	image(grumpy1,350,350,325,275);
	//Factors in frame rate to animate the eyes blinking
	if(frameCount % 120 > 110){
		image(Eyes2,GrumpyEyesX,GrumpyEyesY,170,10);
	}
	else{
		image(Eyes1,GrumpyEyesX,GrumpyEyesY,170,25);
	}
	pop();
}

function feedScreenbg(){
	//background for the feed screen
	push();
	noStroke();
	rectMode(CORNER);
	fill(180,220,220);
	rect(0,0,700,500);
	fill(120,190,190);
	ellipseMode(CENTER);
	ellipse(350,700,1200,600);
	pop();
}
function feedgrumpy(){
	//setup for grumpy during feed scene
	imageMode(CENTER);	
	image(grumpy1,350,350,325,275);
	if(frameCount % 120 > 110){
		image(Eyes2,300,350,170,10);
	}
	else{
		image(Eyes1,300,350,170,25);
	}
	push();
	textSize(75);
	text('No',325,170);
	translate(150,500);
	rotate(15);
	image(Food1,0,0,50,70);
	pop();

	push();
	translate(500,550);
	rotate(-30);
	image(Food2,0,0,50,70);
	pop();
}

function cleanScreenbg(){
	//background for clean screen
	push();
	noStroke();
	rectMode(CORNER);
	fill(220,220,180);
	rect(0,0,700,500);
	fill(190,190,120);
	ellipseMode(CENTER);
	ellipse(350,700,1200,600);
	pop();
}
function cleangrumpy(){
	//grumpy setup for clean scene
	push();
	textSize(75);
	text('I hate you',230,600);
	pop();
	imageMode(CENTER);	
	image(grumpy2,350,350,325,275);
	if(frameCount % 120 > 110){
		image(Eyes2,300,350,170,10);
	}
	else{
		image(Eyes3,300,350,170,25);
	}
	
	if(frameCount % 60 >30){
		image(shower1,350,100,300,350);
	}
	else{
		image(shower2,350,100,300,350);
	}
}

function sleepScreenbg(){
	//backgroun for sleep screen
	push();
	noStroke();
	rectMode(CORNER);
	fill(220,180,220);
	rect(0,0,700,500);
	fill(190,120,190);
	ellipseMode(CENTER);
	ellipse(350,700,1200,600);
	pop();
}
function sleepgrumpy(){
	//grumpy setup for sleep scene
	imageMode(CENTER);	
	image(pillow,350,490,500,150);
	if(frameCount % 60>30){
		textSize(30);
		text('Z',475,200);
		textSize(40);
		text('Z',500,200);
		textSize(50);
		text('Z',525,200);
		image(grumpy1,350,350,325,250);
		image(Eyes3,300,400,170,10);
	}
	else{
		textSize(40);
		text('Z',475,200);
		textSize(50);
		text('Z',500,200);
		textSize(60);
		text('Z',525,200);
		image(grumpy1,350,350,330,255);
		image(Eyes3,300,400,173,10);
	}
	push();
	textSize(50);
	text('Wake me, see what happens',120,640);
	pop();
}

function mousePressed(){
	if(hoverButton == 1){
		stages = 1;
	}
	else if (hoverButton == 2){
		stages = 2;
	}
	else if (hoverButton == 3){
		stages = 3;
	}
	else if((Back==true) && (dist(mouseX,mouseY,650,50)<35.5)){
		stages=0;
	}
	/*else if (dimesnion of grumpy){
		petting
	}*/
}

