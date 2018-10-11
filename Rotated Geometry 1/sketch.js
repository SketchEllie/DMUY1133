function setup() {
    createCanvas(600,600);
    background(200);
    noStroke();
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
	translate(width/2,height/2);
	fill(45,45,255);
	rect(-200,0,55,55);
	push();
	rotate(45);
	rect(-50,50,55,55);	
	rect(50,-50,55,55);
	pop();
	rect(200,0,55,55);

}