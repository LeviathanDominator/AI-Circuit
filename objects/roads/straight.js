class Straight extends Road {
    constructor(x, y, roadWidth, horizontal) {
        super(x, y, roadWidth, horizontal);
        this.horizontal = horizontal;
    }

    show() {
        //noStroke();
        fill(0, 0, 0);
        rect(this.x, this.y + this.offset, this.w, this.h);
    }

    didCarCrashed(car) {
        if (horizontal) {
            if (car.pos.x > this.x && car.pos.x <= this.x + roadSize && car.pos.y > this.y && car.pos.y <= this.y + roadSize) {
                if (car.pos.y < this.y + this.offset || car.pos.y > this.y + this.h + this.offset) {
                    car.crashCar();
                }
            }
        } else {
            if (car.pos.x > this.y && car.pos.x <= this.y + roadSize && car.pos.y > this.x && car.pos.y <= this.x + roadSize) {
                if (car.pos.y < this.x + this.offset || car.pos.y > this.x + this.w + this.offset) {
                    car.crashCar();
                }

            }
        }

    }
}
