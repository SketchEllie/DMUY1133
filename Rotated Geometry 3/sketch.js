var angle;
function setup() {
    createCanvas(700,700);
    background(200);
    noStroke();
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
	translate(width/2,height/2);
	fill(255,50,50);
	angle = map(mouseX,0,600,0,360);
	push();
	rotate(angle);
	rect(mouseX,0,55,55);
	pop();
}