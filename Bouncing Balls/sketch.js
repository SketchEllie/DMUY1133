var ball1;
var ball2;
var ball3;
var ball4;


function setup() {
	
  createCanvas(600, 600);
	
	ball1 = new bouncyBall(10,15,24);
	ball2 = new bouncyBall(20,35,50);
	ball3 = new bouncyBall(15,32,34);
	ball4 = new bouncyBall(30,4,75);
	
}

function draw() {
  background(200);
	
	ball1.anim();
	ball2.anim();
	ball3.anim();
	ball4.anim();
	
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	
}

function bouncyBall (xVel, yVel, size){
	var colora = random(25,255);
	var colorb = random(25,255);
	var colorc = random(25,255);
	this.xpos = random(0,600);
	this.ypos = random(0,600);
	this.velocityX = xVel;
	this.velocityY = yVel;
	this.size = size;
	//this.ballColor = shade;
	
	this.anim = function(){
		this.xpos = this.xpos + this.velocityX;
		this.ypos = this.ypos + this.velocityY;
		
		if(this.xpos <= 0 || this.xpos >=  width){
			this.velocityX = (this.velocityX)*-1;
		}
		if(this.ypos <=0 || this.ypos >= height){
			this.velocityY = (this.velocityY)*-1;
		}
	}
	
	this.display = function(){
		fill(colora,colorb,colorc);
		ellipse(this.xpos,this.ypos,this.size,this.size);
	}
};

