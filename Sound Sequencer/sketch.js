//Establish sound variables
var conga;
var clave;
var shaker;
var heavy;
//Establish global array for the musical balls
var ballArray = [];


//Preload media
function preload(){
	conga = loadSound("assets/Conga.mp3");
	clave = loadSound("assets/Clave.mp3");
	shaker = loadSound("assets/Shaker.mp3");
	heavy = loadSound("assets/Heavy.mp3");
}

function setup() {
	createCanvas(600,600);
}

function draw() {
	DrawBackground();
	for(var i=0; i<ballArray.length; i++){
		ballArray[i].anim();
		ballArray[i].display();
	}
}
//To keep code clean, seperated the drawing of the scene/background into its own function
function DrawBackground(){
	rectMode(CORNER);
	strokeWeight(6);
	fill(255,80,80);
	rect(0,0,300,300);
	fill(51,102,255);
	rect(0,300,300,300);
	fill(51,204,52);
	rect(300,0,300,300);
	fill(255,214,51);
	rect(300,300,300,300);
}

//Musical Ball class
function musicalBall(xpos, ypos, where){
	this.size = 15;
	this.x = xpos;
	this.y = ypos;
	this.velx = 7;
	this.vely = 7;
	this.quadrant = where;

	this.anim = function(){
		//Balls have different sound attributes based on its location.
		if(this.quadrant == 1){
			this.x = this.x + this.velx;
			if((this.x <= 0 || this.x >= 300)){
				conga.play();
				this.velx = (this.velx)*-1;
			}
		}
		else if(this.quadrant == 2){
			this.y = this.y + this.vely;
			if((this.y <=0 || this.y >= 300)){
				clave.play();
				this.vely = (this.vely)*-1;
			}
		}
		else if(this.quadrant == 3){
			this.y = this.y + this.vely;
			if(this.y <300 || this.y >= 600){
				heavy.play();
				this.vely = (this.vely)*-1;
			}
		}
		else if(this.quadrant == 4){
			this.x = this.x + this.velx;
			if(this.x < 300 || this.x >= 600){
				shaker.play();
				this.velx = (this.velx)*-1;
			}

		}
		else{
			return;
		}
	}
	//Display the animation
	this.display = function(){
		fill(255);
		ellipse(this.x,this.y,this.size,this.size);
	}
};
//Depending on where you click, which is in correlation to the backgoun division
//Ball will have different sounds
function mouseClicked(){
	if((mouseX <= 300) && (mouseY <=300)){
		ball = new musicalBall(mouseX,mouseY,1);
		ballArray.push(ball);
	}
	else if((mouseX > 300) && (mouseY <=300)){
		ball = new musicalBall(mouseX,mouseY,2);
		ballArray.push(ball);
	}
	else if((mouseX <= 300) && (mouseY > 300)){
		ball = new musicalBall(mouseX,mouseY,3);
		ballArray.push(ball);
	}
	else if((mouseX > 300) && (mouseY > 300)){
		ball = new musicalBall(mouseX,mouseY,4);
		ballArray.push(ball);	
	}
	else{
		return;
	}
}