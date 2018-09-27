function setup() {
	width =600;
	height=500;
  createCanvas(600,500);
  background(200);
}

function draw() {
	stroke('#222222');
	line(300,0,300,500);
	line(0,height/3,300,height/3);
	line(500,0,500,500);
}
function mouseMoved(){
	if (mouseX <= width/2) {
		if(mouseY <= height/3){
			background('green');
		}
		else{
			background('blue');
		}
	}
	else if(mouseX == 500){
		background('red');
	}
	else{
		background('orange');
	}
}