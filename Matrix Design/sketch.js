//Glocal Variables
let angle = 1;
var colChoice = 0;
function setup() {
  createCanvas(700,700);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(200);
  noStroke();
}

function draw() {
	translate(width/2,height/2);
	Ringz(colChoice);
	//Angle increments allows for the 
	//rect to draw and rotate along the translate point
	angle = angle + 1;
}


//Depending on what the value of colChoice is,
//The Ringz Function will draw in a diff color
//The function draws multiple squares and rotates them
//along the translate origin while chaning color of each ring
function Ringz(colChoice){
	if(colChoice == 1){
		for(i=0; i<5 ; i++){
			fill(255,((i+1)*30),((i+1)*30));
			rotate(angle);
			rect(0,(i)*75,55,55);
		}
	}
	else if(colChoice == 2){
		for(i=0; i<5 ; i++){
			fill(((i+1)*30),255,((i+1)*30));
			rotate(angle);
			rect(0,(i)*75,55,55);
		}
	}
	else if(colChoice ==3){
		for(i=0; i<5 ; i++){
			fill(((i+1)*30),((i+1)*30),255);
			rotate(angle);
			rect(0,(i)*75,55,55);
		}
	}
	
}
//User Input to decide what color to select
//Data is recorded into the colIcre Variable
function keyPressed(){
	if (keyCode === LEFT_ARROW){
		colChoice = 1;
		background(200);
	}
	else if (keyCode === UP_ARROW){
		colChoice = 2;
		background(200);
	}
	else if (keyCode === RIGHT_ARROW){
		colChoice = 3;
		background(200);
	}
	else{
		colChoice = 0;
	}
}