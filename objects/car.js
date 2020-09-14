class Car {

    constructor(x, y, horizontal, dna) {
        const carWidth = 15;
        const carHeight = 25;
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.completed = false;
        this.crashed = false;
        this.colorCar();
        while (this.red + this.green + this.blue === 0) {
            this.colorCar();
        }
        if (dna) {
            this.dna = dna;
        } else {
            this.dna = new DNA();
        }
        this.fitness = 0;

        if (horizontal) {
            this.w = carHeight;
            this.h = carWidth;
        } else {
            this.w = carWidth;
            this.h = carHeight;
        }
    }

    colorCar(){
        this.red = Math.random() >= 0.5 ? 0:255;
        this.green = Math.random() >= 0.5 ? 0 : 255;
        this.blue = Math.random() >= 0.5 ? 0:255;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    calcFitness() {
        var distance = dist(this.pos.x, this.pos.y, goal.x, goal.y);
        this.fitness = map(distance, 0, width, width, 0);
       if (this.completed) {
            this.fitness *= 10;
        }
        if (this.crashed) {
            this.fitness /= 10;
        }
    }

    crashCar() {
        this.crashed = true;
    }

    update() {
        if (goal.reached(this) && !this.completed) {
            this.completed = true;
            numWinners++;
        }
        if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
            this.crashCar();
        }

        this.applyForce(this.dna.genes[count]);
        if (!this.completed && !this.crashed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit(8);
        }
    }

    show() {
        push();
        noStroke();
        fill(this.red, this.green, this.blue, 200);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();

        /*rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.w, this.h);*/
    }
}
