class Goal{
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show() {
        //noStroke();
        fill(256);
        rect(this.x, this.y, this.w, this.h);
    }

    reached(car) {
        if (car.pos.x > this.x && car.pos.x < this.x + this.w) {
            if (car.pos.y > this.y && car.pos.y <= this.y + this.h) {
                console.log("REACHED");
                return true;
            }
        }
        //return car.pos.x > this.x && car.pos.x <= this.x + this.w && car.pos.y > this.y && car.pos.y <= this.y + this.h;
    }
}
