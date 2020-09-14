class Curve extends Road {
    constructor(x, y, roadWidth, horizontal, angle) {
        super(x, y, roadWidth, horizontal);
        this.angle = angle;
    }

    show() {
        //noStroke();
        fill(0, 0, 0);
        circle(this.x, this.y, (this.h + this.offset) * 2);
        noStroke();
        fill(bgRed, bgGreen, bgBlue);
        circle(this.x, this.y, this.offset * 2);
        noStroke();
        rect(this.x - this.w, this.y - this.h - this.offset, this.w, this.h + this.offset * 2);
        rect(this.x, this.y - this.h - this.offset * 2, this.w, this.h + this.offset * 2);

    }

    didCarCrashed(car) {
        if (car.pos.x > this.x) {
            if (car.pos.x > this.x + this.w - this.offset || car.pos.y > this.y + this.h + this.offset / 2) {
                car.crashCar();
            }
        }
    }

}
