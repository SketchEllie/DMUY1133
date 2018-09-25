//Set up for global variables
int shape = 1;
boolean mousePress;
int mousexloc = mouseX;
int mouseyloc = mouseY;
int startsize =0;
PShape tri;
float colora = random(50, 255);
float colorb = random(50, 255);
float colorc = random(50, 255);


void setup () {
  size(700, 700);
  background (230);
  //Below I defined the equilaterla triangle as a shape
  tri = createShape();
  tri.setFill(color(colora, colorb, colorc));
  tri.beginShape();
  tri.noStroke();
  tri.vertex(0, 0);
  tri.vertex(8, 0);
  tri.vertex(4, 4*(sqrt(3)));
  tri.endShape(CLOSE);
}

void draw() {
  noStroke();
  //Based on what shape selection is in place, different shapes will 
  //grow out of the mouse when pressed
  
  //But first checks boolean to asure that the mouse is actually being pressed
  //and will stop when the mouse is released
  if (mousePress == true) {
    if (shape == 1) {  
      ellipseMode(CENTER);
      ellipse(mouseX, mouseY, startsize, startsize);
      startsize++;
    } else if (shape ==2) {
      rectMode(CENTER);
      rect(mouseX, mouseY, startsize, startsize);
      startsize++;
    } else if (shape == 3) {
      shapeMode(CENTER);
      shape(tri, mouseX, mouseY, startsize, startsize);
      startsize++;
    }
  }
}
//Spacebar used to toggle in between shapes
//1 is ellipse
//2 is square
//3 is triangle
void keyPressed() {
  if (key == ' ') {
    if (shape == 3) {
      shape -=2;
      println(shape);
    } else {
      shape +=1;
      println(shape);
    }
  }
}
//when mouse is pressed the boolean to detect the mouse is actually pressed changes
//to true

//Also changes the overarching fill color so that every shape created has a color 
//that is different from the prior shape drawn
void mousePressed() {
  mousePress = true;
  colora = random(50, 255);
  colorb = random(50, 255);
  colorc = random(50, 255);
  fill (colora, colorb, colorc);
}

//When the mouse is released, the boolean to detech the mouse pressed is changed
//to false
void mouseReleased() {
  mousePress = false;
  startsize=0;
}

/*
ISSUES UNRESOLVED
-When mouse is dragged while being pressed, will make a trail of growing shapes
-Since the Triangle is a set shape instead of creating new entities, it only stays
 one color
*/
