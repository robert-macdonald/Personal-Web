/**
 * Created by robert on 1/24/17.
 */
var s;
var scl = 20;

var food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);

    s.death();
    if (s.eat(food)) {
        pickLocation();
    }
    s.update();
    s.show();

    fill(78, 244, 66);
    textSize(15);
    text("Score: "+s.tail.length, 25, 25);

    fill(255);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    switch (keyCode){
        case UP_ARROW: s.dir(0, -1);
            break;
        case DOWN_ARROW: s.dir(0, 1);
            break;
        case LEFT_ARROW: s.dir(-1, 0);
            break;
        case RIGHT_ARROW: s.dir(1,0);
    }
}