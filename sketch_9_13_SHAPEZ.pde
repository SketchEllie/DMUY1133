int m;
int shape = 1;
int mousexloc = mouseX;
int mouseyloc = mouseY;
void setup (){
  size(700,700);
  background (250);
  
}

void draw(){
  
  if (mouseX == pmouseX && mouseY == pmouseY){
  }
}

void keyPressed(){
  if (key == ' '){
    if (shape == 3){
      shape -=2;
      println(shape);
    }
    else{
      shape +=1;
      println(shape);
    }
  }
}

void mousePressed(){
  if(shape == 1){
      ellipse(mouseX,mouseY,100,100); 
    }
    else if(shape ==2){
      rect(mouseX-50,mouseY-50, 100,100);
    }
    else if(shape == 3){
      rect(mouseX-25,mouseY-35, 50, 70);
    }
}

void mouseMoved(){
  float colora = random(50,255);
  float colorb = random(50,255);
  float colorc = random(50,255);
  fill (colora, colorb, colorc);
  
}
