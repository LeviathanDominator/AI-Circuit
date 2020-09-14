class Population {
    constructor(x, y, horizontal) {
        this.x = x;
        this.y = y;
        this.horizontal = horizontal;
        this.numCars = numCars;
        this.cars = [];
        this.matingPool = [];

        for (let i = 0; i < this.numCars; i++) {
            this.cars[i] = new Car(this.x, this.y, this.horizontal);
        }
    }

    evaluate() {
        var maxFit = 0;

        this.cars.forEach(car => {
            car.calcFitness();
            if (car.fitness > maxFit) {
                maxFit = car.fitness;
            }
        });

        this.cars.forEach(car => {
            car.fitness /= maxFit;
        });

        this.matingPool = [];

        this.cars.forEach(car => {
            const n = car.fitness * 100;
            for (let i = 0; i < n; i++) {
                this.matingPool.push(car);
            }
        });
    }

    selection() {
        var newCars = [];
        for (var i = 0; i < this.cars.length; i++) {
            var parentA = random(this.matingPool).dna;
            var parentB = random(this.matingPool).dna;
            var child = parentA.crossover(parentB);
            child.mutation();
            newCars[i] = new Car(this.x, this.y, this.horizontal, child);
        }
        this.cars = newCars;
    }

    run() {
        this.cars.forEach(car => {
            car.update();
            car.show();
        });
    }

    didCarCrashed(roads) {
        this.cars.forEach(car => {
            roads.forEach(road => {
                road.didCarCrashed(car);
            });
        })
    }

}
