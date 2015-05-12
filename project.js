title('Break In');

// put variables here, just like kahn academy

//tile constructor
var Tiles = function (x, y)  {
    this.x = x;
    this.y = y;
    this.width = 50;
}; 

Tiles.prototype.drawNotDestroyed = function() {
    fill(255, 0, 0);
    strokeWeight(2);
    rect(this.x, this.y, this.width+25, this.width+25);
};

var num_cols = 10;
var num_rows = 3;
var selected = [];
var tiles = [];
var paddleX = 300;
var paddleY = 550;
var ballX = 100;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;

// put functions here, just like kahn academy


// this code is executed once when the program is started
var setup = function() {

    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);
      
};
// override draw function, by default it will be called 60 times per second

var draw = function() {
    background(250, 250, 250);
    for(var i = 0; i < num_cols; i++) {
	for(var j = 0; j < num_rows; j++){
            tiles.push(new Tiles(i * 78 + 10, j * 78 + 75, selected.pop()));   
	}    
    }

    for(var i = 0; i < tiles.length; i++) {
	tiles[i].drawNotDestroyed();
    }

    //paddle
    fill(0, 0, 0);
    rect(paddleX, paddleY, 150, 15);

    if(keyIsPressed) {
	if(keyCode === LEFT) {
	    paddleX -= 15;
	} else if(keyCode === RIGHT) {
	    paddleX += 15;
	} 
    }

    fill(255, 0, 225);
    strokeWeight(1);
    ellipse(ballX, ballY, 50, 50);
    //ballX = ballX + ballSpeedX;
    //ballY = ballY + ballSpeedY;

    //at left
    if(ballX < 25) {

    }	
// call a function (defined up above)

};






