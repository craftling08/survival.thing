/*
TO DO LIST
~~~~~~~~~~~~~~~~~~~~~~~~
-no overlaping enemies
-character/enemy images
*/



title('Survival');

// put variables here, just like kahn academy
var tileX = 50;
var tileY = 55;
var num = 0;
var playerX = 200;
var playerY = 330;
var healthBarX = 200;
var expBarX = 0;
var enemyX = []; 
var enemyY = [];
var tempEnemyX = [];
var tempEnemyY = [];
var timer = 0;
var enemyNum = 6;
var counter = 0;
var fps = 1;
var characterX = 200;  
var characterY = 330;

character = loadImage("Code_Character.png");
enemy = loadImage("Code_Enemy.png");

for(i = 0; i < enemyNum; i++) {
	tempEnemyX[i] = 750;
	tempEnemyY[i] = 550-i*110;
	enemyX[i] = 750;
	enemyY[i] = 550-i*110;
}
// put functions here, just like kahn academy

var emptySquare = function(x,y) { 
	return 1;
	for(i = 0; i < enemyNum; i++) {
	        if (enemyX[i] === x && enemyY[i] === y){
			return 0;
		}
	}
	return 1;
}
	

var draw = function() {
	//tiled floor
	fill(255,255,255);
	for(var numX = 0; numX < 800; numX += 50) {
		for(var numY = 0; numY < 600; numY += 55) {
			rect(numX,numY,tileX,tileY);
		}
	 }


	//player
	image(character, characterX, characterY);
	//health bar
	fill(255,0,0);
	rect(10,10,healthBarX ,10);
	for(i = 0; i < enemyNum; i++) {	
		if (enemyX[i] === characterX && enemyY[i] === characterY) {
			healthBarX -= 1;
		}
	}
	//counter
	fill(36,1,239);
	text(counter + " timer stuffs", 10, 35);
	var counterFunction = function() {		
		if (healthBarX < 0) {
			return 1;
		}		
		if (healthBarX > 0) {
			return 0;
		}
	}
	if (counterFunction() === 0) {			
		counter += 1;
	}	
	//enemy	
	for(i = 0; i < enemyNum; i++) {
		if (characterX > enemyX[i]) {
			if ((tempEnemyX[i] / 50) % 1 === 0) {
				if (emptySquare(tempEnemyX[i], enemyY[i]) === 1) {
					enemyX[i] = tempEnemyX[i];
				}
			}
			image(enemy,enemyX[i],enemyY[i]);
			tempEnemyX[i] += 1;
	}
		if (characterX < enemyX[i]) { 
			if ((tempEnemyX[i] / 50) % 1 === 0) {
			    	if (emptySquare(tempEnemyX[i], enemyY[i]) === 1) {
					enemyX[i] = tempEnemyX[i];
		
				}
			}
			image(enemy,enemyX[i],enemyY[i]);
			tempEnemyX[i] -= 1;
		}
		if (characterY > enemyY[i]) {
			if ((tempEnemyY[i] / 55) % 1 === 0) {
				if (emptySquare(enemyX[i], tempEnemyY[i]) === 1) {
					enemyY[i] = tempEnemyY[i];
				}		
			}
			image(enemyX[i],enemyY[i],50,55);
			tempEnemyY[i] += 1;
		}
		if (characterY < enemyY[i]) {
			if ((tempEnemyY[i] / 55) % 1 === 0) {
				if (emptySquare(enemyX[i], tempEnemyY[i]) === 1) {
					enemyY[i] = tempEnemyY[i];
				}			
			}
			image(enemy,enemyX[i],enemyY[i]);
			tempEnemyY[i] -= 1;
		}
	}

	//game over
	if (healthBarX < 0) {
		background(0,0,0);
		fill(255,0,0);
		textSize(50);
		text("YOU DIED!!!", 250, 300);
		textSize(25);
		text("Better luck next time!",275,360);
		textSize(15);
		text("Score: " + counter, 350, 400);
	}

	//side detection
	if (characterX > 750) {
		characterX = 750;
	}
	if (characterX < 0) {
		characterX = 0;
	}

	if (characterY < 0) {
		characterY = 0;
	}

	if (characterY > 550) {
		characterY = 550;
	}


}

var keyPressed = function() {
	if (keyCode === 83) {
		characterY += 55;
	}
	if (keyCode === 87) {
		characterY -= 55;
	}
	if (keyCode === 68) {
		characterX += 50;
	}
	if (keyCode === 65) {
		characterX -= 50;
	}
    
}


// this code is executed once when the program is started
var setup = function() {

    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);
    
};

// override draw function, by default it will be called 60 times per second

// call a function (defined up above)
setup();
