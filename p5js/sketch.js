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

function score() {
    return s.total;
}


function draw() {
    background(51);

    if (s.eat(food)) {
        pickLocation();
    }
    s.death();
    s.update();
    s.show();

    fill(78, 244, 66);
    textSize(15);
    text("Score: "+score(), width-575, height-575);

    fill(255);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}