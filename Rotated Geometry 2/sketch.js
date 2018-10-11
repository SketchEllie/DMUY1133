var greenShade = 0;
function setup() {
    createCanvas(600,600);
    background(200);
    noStroke();
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
	translate(100,100);
	for(i=0; i<9; i++){
		push();
		fill((greenShade+(i*5)),255,(greenShade+(i*5)));
		rotate(15+i);
		rect((i*40),(i*40),55,55);
		pop();
	}
}