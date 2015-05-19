title('Break In');

// put variables here, just like kahn academy

//tile constructor
var Tiles = function (x, y)  {
    this.x = x;
    this.y = y;
    this.width = 75;
    this.destroyed = 0;
}; 

Tiles.prototype.drawNotDestroyed = function() {
    fill(255, 0, 0);
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.width);
};

var num_cols = 10;
var num_rows = 3;
var selected = [];
var tiles = [];
var paddleX = 300;
var paddleY = 550;
var ballX = 400;
var ballY = 500;
var ballSpeedX = 5;
var ballSpeedY = 5;
var dir = 1;

// put functions here, just like kahn academy

for(var i = 0; i < num_cols; i++) {
    for(var j = 0; j < num_rows; j++){
         tiles.push(new Tiles(i * 78 + 10, j * 78 + 75, selected.pop()));
    }
}

// this code is executed once when the program is started
var setup = function() {

    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);
      
};
// override draw function, by default it will be called 60 times per second

var draw = function() {
    background(250, 250, 250);
    //blocks
    for(var i = 0; i < tiles.length; i++) {
	if(tiles[i].destroyed ===0){
	    tiles[i].drawNotDestroyed();
	}
    }
    
    //paddle
    fill(0, 0, 0);
    rect(paddleX, paddleY, 150, 15);

    if(keyIsPressed) {
	if(keyCode === LEFT) {
	    paddleX -= 5;
	} else if(keyCode === RIGHT) {
	    paddleX += 5;
	} 
    }

    fill(255, 0, 225);
    strokeWeight(1);
    ellipse(ballX, ballY, 50, 50);
    ballX = ballX - ballSpeedX;
    ballY = ballY - ballSpeedY;

    //at left
    if(ballX < 25) {
	ballSpeedX = dir*-random(5);
    }	
    //at right
    if(ballX > 775) {

	ballSpeedX = dir*random(5);
    }
    //at top
    if(ballY < 25) {
	ballSpeedY = dir*-random(5);
    }
    //at paddle
    if (ballX > paddleX && ballX < paddleX + 150) {
	if (ballY > paddleY - 25 && ballY < paddleY + 15) {
	    ballSpeedY = dir*random(5);
	}    
    }
    //at blocks
    //for(var i = 0; i < tiles.length; i++) {
	var bottom = tiles[i].y + tiles[i].width + 25;
	var lSide = tiles[i].x - 25;
	//var rSide = tiles[i].x + tiles[i].width + 25;
	//var top = tiles[i].y - 25;
	
	/*if(tiles[i].destroyed === 0) {
	    if(ballY > bottom - 5) {
	      	tiles[i].destroyed = 1;
		ballSpeedY = dir*-random(5);
            }
	    if(ballY < bottom + 5) {
		tiles[i].destroyed = 1;
		ballSpeedY = dir*-random(5);
	    }
	    if(ballX < lSide + 5) {
		tiles[i].destroyed = 1;
		ballSpeedX = dir*-random(5);
	    }
	    if(ballX > lSide - 5) {
		tiles[i].destroyed = 1;
		ballSpeedX = dir*-random(5);
	    }
	    if( ballY < top + 5  ) {
		tiles[i].destroyed = 1;
		ballSpeedY = dir*-random(5);
	    }
            if(ballY > top - 5) {
		tiles[i].destroyed = 1;
		ballSpeedY = dir*-random(5);
	    }
	    if( ballX > rSide + 5  ) {
		tiles[i].destroyed = 1;
		ballSpeedX = dir*-random(5);
	    }
	    if(ballX < rSide - 5) {
		tiles[i].destroyed = 1;
		ballSpeedX = dir*-random(5);
	    }
	}*/
    for(var i = 0; i < tiles.length; i++) {
	var bottom = tiles[i].y + tiles[i].width + 25;
	var side = tiles[i].x + 25;
	if(tiles[i].destroyed === 0) {
	    if(ballY > bottom - 5) {
		if(ballY < bottom + 5) { 
		    if(ballX > side - 5){
			if(ballX < side + tiles[i].width + 5) {
			    tiles[i].destroyed = 1;
			    ballSpeedY = dir*-random(5);
			}
		    }	       
		}
            }
          
	}
    }	

// call a function (defined up above)

};








