//Preliminary global variables, canvas size and colors
canWid = 775;
canHei = 630;
baseblue='#60769d';
whitegray='#cfd1c3';
purple='#c5a7b1';
darkblue='#262243';
skyblue='#9cb5bc';
snowblue='#bebfc3';
ellipseMode(CENTER);
function setup() {
  createCanvas(775,600);
}

function draw() {
	fill(baseblue);
	stroke('#2e2d57');
	strokeWeight(2);
	//Starting with loops for the rows of ellipses
	for(j=0; j<18; j++){
		//varies the rows by indexing odds and evens to stagger the ellipses
		if((j%2)>0){
			//Loops repeat ellipses through the rows
			for(i=0 ; i<5 ; i++){
				//Because of randomess ellipses, loops row by row first
				if(j==1){
					//and then go through individually for fills
					if(i==0){
						fill(purple);
						//overlapping circles, loops through backwards with circles shrinking
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if((i==1) || (i==4)){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}	
					else if((i==2) || (i==3)){
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==3){
					if((i==2)||(i==4)){
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if((i==0)){
						fill(snowblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==1){
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(purple);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==5){
					if(i<4){
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==7){
					if((i==0) || (i==2)){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==1){
						fill(purple);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==3){
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==9){
					if((i==0)||(i==4)){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==1){
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==3){
						fill(skyblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==11){
					if(i==0){
						fill(snowblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==4){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==13){
					if((i==0)||(i==1)){
						fill(snowblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if (i==2){
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==4){
						fill(purple);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==15){
					if(i==0){
						fill(skyblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==1){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==2){
						fill(snowblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==3){
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==17){
					if(i==0){
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==3){
						fill(purple);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==4){
						fill(snowblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(skyblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else{
					fill(baseblue);
					for(p=10 ; p>0 ; p--){
						ellipse((canWid/5)*(i+.5),(canHei/17)*(j+.5),(p*15),(p*15));
					}
				}
			}
		}
		else{
			for(i=0 ; i<6 ; i++){
				if(j==2){
					if((i==0)||(i==4)||(i==5)){
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if((i==1) || (i==2)){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==3){
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==4){
					if(i==0){
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if((i==1)||(i==2)||(i==5)){
						fill(snowblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==4){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==3){
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(purple);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==6){
					if((i<3) || (i==4)){
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==3){
						fill(whitegray)
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(darkblue)
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==8){
					if((i==0) || (i==2)){
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if((i==1)||(i==3)){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==10){
					if(i==0){
						fill(purple);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if((i==1)||(i==2)){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==12){
					if((i==0)||(i==3)){
						fill(snowblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==4){
						fill(purple);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==5){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==14){
					if(i==2){
						fill(whitegray);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==4){
						fill(darkblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else if(j==16){
					if(i==1){
						fill(skyblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else if(i==4){
						fill(snowblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
					else{
						fill(baseblue);
						for(p=10 ; p>0 ; p--){
							ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
						}
					}
				}
				else{
					fill(baseblue);
					for(p=10 ; p>0 ; p--){
						ellipse((canWid/5)*(i),(canHei/17)*(j+.5),(p*15),(p*15));
					}
				}
			}
		}
	}
}
