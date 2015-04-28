title('Break In');

// put variables here, just like kahn academy

var paddleX = 750;
tiles = [];

//tile constructor
var Tiles = function (x, y)  {
    this.x = x;
    this.y = y;
    this.width = 50;
} 

//Tiles.prototype.drawNotDestroyed = function() {
//    fill(255, 0, 0);
//    strokeWeight(5);
//    rect(this.x, this.y, this.width, this.width, -10);
//}



var num_cols = 5;
var num_rows = 16;
var selected = [];

for(var i = 0; i < num_cols; i++) {
    for(var j = 0; j < num_rows; j++) {
        tiles.push(new Tiles(i * 78 + 10, j * 78 + 75, selected.pop()));       
    }    
}

for(var i=0; i < tiles.length; i++ ) {
    tiles[i].drawNotDestroyed();
}

// put functions here, just like kahn academy

fill(255, 0, 0);
strokeWeight(5);
rect(this.x, this.y, this.width, this.width, -10);

// this code is executed once when the program is started
var setup = function() {

    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);
    

    
};

var draw = function() {
      background(0, 0, 0);                
}


// override draw function, by default it will be called 60 times per second

// call a function (defined up above)
setup();
