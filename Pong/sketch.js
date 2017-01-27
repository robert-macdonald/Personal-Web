/**
 * Created by robert on 1/25/17.
 */

var playerOne;
var playerTwo;
var ball;

function setup() {
    createCanvas(600,600);
    playerOne = new Paddle(10, 215, true);
    playerTwo = new Paddle(width-30, 215, false);
    ball = new Ball();
}

function draw() {
    background(0);

    if (keyIsDown(UP_ARROW)) {
        playerTwo.y -= 10;
    } else if (keyIsDown(DOWN_ARROW)){
        playerTwo.y += 10;
    } else if (keyIsDown(87)){
        playerOne.y -= 10;
    } else if (keyIsDown(83)){
        playerOne.y += 10;
    }

    if (ball.hit(playerOne)) {
        ball.bounceAngle(playerOne);
    } else if (ball.hit(playerTwo)){
        ball.bounceAngle(playerTwo);
    } else if (ball.hitTop()) {
        ball.ballVy += (-2 * ball.ballVy);
    } else if (ball.hitBottom()){
        ball.ballVy -= (2 * ball.ballVy);
    }

    if(ball.x == width) {
        playerOne.point += 1;
        ball.x = width / 2;
        ball.y = height / 2;
    } else if (ball.x == 0) {
        playerTwo.point += 1;
        ball.x = width / 2;
        ball.y = height / 2;
    }

    ball.update();
    ball.show();
    playerOne.show();
    playerTwo.show();

}