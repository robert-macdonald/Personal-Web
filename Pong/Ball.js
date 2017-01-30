/**
 * Created by robert on 1/25/17.
 */
var interceptY;
var relIntY;
var normRelIntY;
var bounceAngle;

function Ball() {
    this.x = 300;
    this.y = 300;
    this.velocityX = 5;
    this.ballVx = 0;
    this.ballVy = 0;

    this.hit = function (pos) {
        if(pos.primary) {
            if (this.x < 48) {
                return (this.y > pos.y && this.y < pos.y + 175);
            }
        } else if(!pos.primary) {
            if (this.x > width - 46) {
                return (this.y > pos.y && this.y < pos.y + 175);
            }
        } else {
            return false;
        }
    };
    this.hitTop = function () {
        if (this.x > 0 && this.x < width)
            return this.y - height === -height;
        else return false;
    };
    this.hitBottom = function () {
        if (this.x > 0 && this.x < width)
            return this.y - height === 0;
        else return false;
    };

    this.bounceAngle = function (pos) {
        interceptY = this.y;
        relIntY = (pos.y + (pos.height / 2) - interceptY);
        normRelIntY = (relIntY/(pos.height / 2));
        bounceAngle = normRelIntY * (5*PI/12);
        this.velocityX += (-2 * this.velocityX);
        this.ballVx = (this.velocityX*Math.cos(bounceAngle))*multiplier;
        this.ballVy = (this.velocityX*-Math.sin(bounceAngle))*multiplier;
    };

    this.update = function () {
        this.x += this.velocityX;
        this.x += this.ballVx;
        this.y += this.ballVy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    };

    this.startup = function () {
        multiplier = 1;
        this.ballVy = 0;
        this.ballVx = 0;
        this.x = width / 2;
        this.y = height / 2;
    };

    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, 25, 25);
    };
}