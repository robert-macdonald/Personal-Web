/**
 * Created by robert on 1/25/17.
 */
function Paddle(x, y, primary) {
    this.x = x;
    this.y = y;
    this.primary = primary;
    this.point = 0;
    this.height = 175;
    this.width = 20;

    this.reachTop = function () {
        return (this.y + 175) <= 0;
    };

    this.reachBottom = function () {
        return this.y >= height;
    };

    this.show = function () {
        fill(255);
        if(primary) {
            text("Score: " + this.point, 20, 20);
        } else {
            text("Score: " + this.point, width - 60, 20);
        }
        rect(this.x, this.y, this.width, this.height);
    };
}