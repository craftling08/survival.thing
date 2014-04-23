title('Survival');

// put variables here, just like kahn academy
var tileX = 50;
var tileY = 55;
var num = 0;
var playerX = 200;
var playerY = 330;
var healthBarX = 200;
var enemyX = 750; 
var enemyY = 330;
var tempEnemyX = 750;
var tempEnemyY = 330;

// put functions here, just like kahn academy

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
	if (enemyX === playerX && enemyY === playerY) {
		healthBarX -= 1;
	}
	//enemy1
	if (playerX > enemyX) {
		if ((tempEnemyX / 50) % 1 === 0) {
			enemyX = tempEnemyX;		
		}
		fill(43,123,0);
		rect(enemyX,enemyY,50,55);	
		tempEnemyX += 1;
	}
	if (playerX < enemyX) {
		if ((tempEnemyX / 50) % 1 === 0) {
			enemyX = tempEnemyX;		
		}
		fill(43,123,0);
		rect(enemyX,enemyY,50,55);	
		tempEnemyX -= 1;
	}
	if (playerY > enemyY) {
		if ((tempEnemyY / 55) % 1 === 0) {
			enemyY = tempEnemyY;		
		}
		fill(43,123,0);
		rect(enemyX,enemyY,50,55);	
		tempEnemyY += 1;
	}
	if (playerY < enemyY) {
		if ((tempEnemyY / 55) % 1 === 0) {
			enemyY = tempEnemyY;		
		}
		fill(43,123,0);
		rect(enemyX,enemyY,50,55);	
		tempEnemyY -= 1;
	}
	

	//game over
	if (healthBarX < 0) {
		background(0,0,0);
		fill(255,0,0);
		textSize(50);
		text("YOU DIED!!!", 250, 300);
	}
}

var keyPressed = function() {
	if (keyCode === 83) {
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
