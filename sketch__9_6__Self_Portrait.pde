size(800, 800);

int fullx = 800;
int fully = 800;
/*
Shapes were created in the following order;
BG, shirt, balloon, skin, hair

Originally shading was going to be a thing but I didn't realize how complicated 
and time consuming making the base was going to be

Color shades are denotated as 1 and 2, the latter being the darker shade
*/
noStroke();

fill(#e1d3ca);
//backgroundA 
rect(0,0,fullx,fully/4);
fill(#bdb09d);
//backgroundA 2
rect(0,fully/4,fullx,fully/2);
fill(#836958);
//backgroundB 1
rect(0,fully/2,fullx,(fully/4)*3);
fill(#57493e);
//backgroundB 2
rect(0,(fully/4)*3,fullx,fully);
//Background filling first since the shapes will overlay it

fill(#42474a);
//Shirt 1
quad((fullx/32)*20,(fully/32)*15,(fullx/32)*12,(fully/32)*19,(fullx/32)*17,(fully/32)*28,(fullx/32)*26,(fully/32)*25);
quad((fullx/32)*23,(fully/32)*21,(fullx/32)*27,(fully/32)*28,fullx,(fully/32)*28,fullx,(fully/32)*18);
quad((fullx/32)*25,(fully/32)*15,(fullx/32)*22,(fully/32)*22,fullx,(fully/32)*18,(fullx/32)*28,(fully/32)*15);
fill(#2e2e2e);
//Shirt 2

fill(#feaa54);
//Balloon 1 
quad((fullx/32)*13,(fully/32)*2,(fullx/32)*18,(fully/32)*9,(fullx/32)*3,(fully/32)*19,(fullx/32)*-1,(fully/32)*12);
quad((fullx/32)*-1,(fully/32)*12,(fullx/32)*7,(fully/32)*11,(fullx/32)*17,(fully/32)*28,(fullx/32)*10,fullx);
quad((fullx/32)*10,(fully/32)*20,fullx/2,fully/2,(fullx/32)*20,(fully/32)*22,(fullx/32)*13,(fully/32)*25);
quad((fullx/32)*27,(fully/32)*23,(fullx/32)*31,(fully/32)*30,(fullx/32)*10,(fully/32)*38,(fullx/32)*10,(fully/32)*30);
//Broke Balloon up into seperate quad pieces
fill(#f18b27);
//balloon 2
/*
*/
//shading for balloon



fill(#e6cec2);
//Skin 1
ellipse((fullx/32)*23,(fully/32)*11,(fullx/32)*6,(fully/32)*8);
rect((fullx/32)*21,(fully/32)*13,(fullx/32)*3,(fully/32)*5);
triangle((fullx/32)*21,(fully/32)*18,(fullx/32)*23,(fully/32)*20,(fullx/32)*24,(fully/32)*18);
ellipse((fullx/32)*30,(fully/32)*27,(fullx/32)*3,(fully/32)*3);
fill(#d9ae9b);
//Skin 2



fill(#52413a);
//Hair 1
quad((fullx/32)*22,(fully/32)*6,(fullx/32)*20,(fully/32)*9,(fullx/32)*20,(fully/32)*10,(fullx/32)*23,(fully/32)*8);
quad((fullx/32)*22,(fully/32)*6,(fullx/32)*23,(fully/32)*8,(fullx/32)*25,(fully/32)*9,(fullx/32)*26,(fully/32)*7);
quad((fullx/32)*25,(fully/32)*9,(fullx/32)*26,(fully/32)*7,(fullx/32)*28,(fully/32)*14,(fullx/32)*26,(fully/32)*12);
quad((fullx/32)*28,(fully/32)*14,(fullx/32)*26,(fully/32)*12,(fullx/32)*25,(fully/32)*16,(fullx/32)*25,(fully/32)*20);
quad((fullx/32)*20,(fully/32)*9,(fullx/32)*19,(fully/32)*13,(fullx/32)*20,(fully/32)*19,(fullx/32)*21,(fully/32)*16);
fill(#3a3532);
//Hair 2
