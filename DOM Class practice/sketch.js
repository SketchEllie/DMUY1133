//Set up Variables 
var UserInput;
var canvas;
var submitButton;
var UserData;
var canvasText;
var HTMLp;
var Answered;



function setup() {
	//Canvas as a HTML Object
	canvas = createCanvas(600,600);
	canvas.position(300,50);

	Answered = false;

	//User Input Prompt
	UserInput = createInput("What's your favorite CS:GO Team?");
	UserInput.position(450,25);
	UserInput.style('width','250px');

	//Submit Button for User Prompt
	submitButton = createButton("Enter");
	submitButton.position(725,25);
	submitButton.mousePressed(storeData);

	HTMLp = createP(UserData);
 
}

function draw() {
	background(200);
	//I want the input to not display immediately so I set up a boolean to detect when the prompt is answered
	if(Answered == true){
		HTMLDesign();
		MouseFollow();
	}
	else{
		return;
	}
}

//Function for setting the input data value to other variables
function storeData(){
	UserData = UserInput.value();
	HTMLp.html(UserData);
	canvasText = UserData;
	submitButton.value("");
	Answered = true;
	consolelog();

}

//Design for P5 Canvas
function MouseFollow(){
	canvasTextX = map(mouseX,0,600,200,400);
	canvasTextY = map(mouseY,0,600,200,400);
	canvasTextX = constrain(canvasTextX,100,500);
	canvasTextY = constrain(canvasTextY,100,500);
	textAlign(CENTER);
	textStyle(BOLD);
	textSize(50);
	text(canvasText,canvasTextX,canvasTextY);

}


//Design for Console Log
function consolelog(){
	var basePrompt = "My favorite CS:GO team is ";
	console.log(basePrompt + UserData);
}

//Design for HTML
function HTMLDesign(){
	HTMLp.style('font-size', 'xx-large');
	HTMLp.style('font-family','arial');
	HTMLp.style('font-weight','bolder');
	HTMLp.style('rotate',90);
	HTMLp.position(40,mouseY);

}

