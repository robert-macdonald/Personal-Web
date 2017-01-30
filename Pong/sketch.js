/**
 * Created by robert on 1/25/17.
 */

var playerOne;
var playerTwo;
var ball;
var multiplier = 1;

function setup() {
    stroke(255);
    createCanvas(600,600);
    playerOne = new Paddle(10, 215, true);
    playerTwo = new Paddle(width-30, 215, false);
    ball = new Ball();
}

function draw() {
    background(0);

    if (keyIsDown(87))
        playerOne.y -= 15;
    else if (keyIsDown(83))
        playerOne.y += 15;

    if (keyIsDown(UP_ARROW))
        playerTwo.y -= 15;
    else if (keyIsDown(DOWN_ARROW))
        playerTwo.y += 15;

    if (ball.hit(playerOne)) {
        multiplier += 0.1;
        ball.bounceAngle(playerOne);
    } else if (ball.hit(playerTwo)) {
        multiplier += 0.1;
        ball.bounceAngle(playerTwo);
    }

    if (ball.hitTop()) {
        ball.ballVy += (-2 * ball.ballVy);
    } else if (ball.hitBottom()) {
        ball.ballVy -= (2 * ball.ballVy);
    }

    if (playerOne.reachTop()) {
        playerOne.y = height;
    } else if (playerOne.reachBottom()) {
        playerOne.y = -175;
    }
    if (playerTwo.reachTop()) {
        playerTwo.y = height;
    } else if (playerTwo.reachBottom()) {
        playerTwo.y = -175;
    }


    if (ball.x === 0) {
        playerTwo.point += 1;
        ball.velocityX = 5;
        ball.startup();
    }
    if (ball.x === width) {
        playerOne.point += 1;
        ball.velocityX = -5;
        ball.startup();
    }

    ball.update();
    ball.show();
    playerOne.show();
    playerTwo.show();
}