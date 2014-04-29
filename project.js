/*
To do list
~~~~~~~~~~~~~~~~
-enemy overlap(no aperating enemies!!!)
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
var enemyNum = 3;

for(i = 0; i < enemyNum; i++) {
	tempEnemyX[i] = 750;
	tempEnemyY[i] = 550-i*110;
	enemyX[i] = 750;
	enemyY[i] = 550-i*110;
}
// put functions here, just like kahn academy
var emptySquare = function(x,y) {
	for(i = 0; i < enemyNum; i++) {
		if (enemyX[i] === x && enemyY[i] ===y){
			return 1;
		}
	}
	return 0;
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
	fill(133,21,0);
	rect(playerX, playerY, 50, 55);
	//health bar
	fill(255,0,0);
	rect(10,10,healthBarX ,10);
	for(i = 0; i < enemyNum; i++) {	
		if (enemyX[i] === playerX && enemyY[i] === playerY) {
			healthBarX -= 1;
		}
	}
	//exp bar
	fill(20,231,232);
	rect(10,25,expBarX,10);
	//enemy1
	for(i = 0; i < enemyNum; i++) {
		if (playerX > enemyX[i]) {
			if ((tempEnemyX[i] / 50) % 1 === 0) {
				if (emptySquare(tempEnemyX[i], tempEnemyY[i]) === 1) {
					enemyX[i] = tempEnemyX[i];
		
				}
			}
			fill(43,123,0);
			rect(enemyX[i],enemyY[i],50,55);	
			tempEnemyX[i] += 1;
	}
		if (playerX < enemyX[i]) {
			if ((tempEnemyX[i] / 50) % 1 === 0) {
				enemyX[i] = tempEnemyX[i];		
			}
			fill(43,123,0);
			rect(enemyX[i],enemyY[i],50,55);	
			tempEnemyX[i] -= 1;
		}
		if (playerY > enemyY[i]) {
			if ((tempEnemyY[i] / 55) % 1 === 0) {
				enemyY[i] = tempEnemyY[i];		
			}
			fill(43,123,0);
			rect(enemyX[i],enemyY[i],50,55);	
			tempEnemyY[i] += 1;
		}
		if (playerY < enemyY[i]) {
			if ((tempEnemyY[i] / 55) % 1 === 0) {
				enemyY[i] = tempEnemyY[i];		
			}
			fill(43,123,0);
			rect(enemyX[i],enemyY[i],50,55);	
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
	}

	//side detection
	if (playerX > 750) {
		playerX = 750;
	}

	if (playerX < 0) {
		playerX = 0;
	}

	if (playerY < 0) {
		playerY = 0;
	}

	if (playerY > 550) {
		playerY = 550;
	}

}

var keyPressed = function() {
	if (keyCode === 83 && playerY < 600) {
		playerY += 55;
	}
	if (keyCode === 87) {
		playerY -= 55;
	}
	if (keyCode === 68) {
		playerX += 50;
	}
	if (keyCode === 65) {
		playerX -= 50;
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
emptySquare();
