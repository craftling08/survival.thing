title('Survival');

// put variables here, just like kahn academy
var tileX = 50;
var tileY = 55;
var num = 0;
var playerX = 200;
var playerY = 330;
var healthBarX = 200;
var enemy1Y = 330;
var enemyX = 750; 

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


    //enemy1
    fill(43,123,0);
    rect(enemyX,enemy1Y,50,55);
    enemyX -= 1;
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
