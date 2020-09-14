//const roadSize = 120;

const numCars = 100;
const roadSize = 180;
const roadWidth = roadSize / 1.5;
const horizontal = true;
const vertical = false;
let lifespan = 900;
const bgRed = 0;
const bgGreen = 150;
const bgBlue = 0;
const maxForce = 0.1;

let goal;
let roadPosition;
let targetX;
let targetY;
let population;
var count = 0;
let countP;
let generation = 1;
let generationP;
let numWinners = 0;
let numWinnersPrevious = 0;
let numWinnersP;
let numWinnersPreviousP;

var roads = [];

function setup() {
    createCanvas(1200, 600);
    targetX = width - 100;
    targetY = 10;
    roadPosition = height - roadSize * 2;
    countP = createP();
    generationP = createP();
    numWinnersP = createP();
    numWinnersPreviousP = createP();
    population = new Population(10, roadPosition + roadSize / 1.5, horizontal);
    generateRoad();
}

function draw() {
    background(bgRed, bgGreen, bgBlue);
    countP.html("Tiempo restante: " + (lifespan - count));
    generationP.html("Generación: " + generation);
    numWinnersP.html("Número de coches que han llegado a la meta en la generación actual: " + numWinners);
    numWinnersPreviousP.html("Número de coches de la " + (generation - 1) + "º generación que han llegado a la meta: " + numWinnersPrevious);
    for (let road of roads) {
        road.show();
        //road.didCarCrashed(car);
    }
    goal.show();
    population.run();
    population.didCarCrashed(roads);
    /*car.update();
    car.show();*/
    count++;
    if (count === lifespan) {
        population.evaluate();
        population.selection();
//        population = new Population();
        count = 0;
        numWinnersPrevious = numWinners;
        numWinners = 0;
        generation++;
    }
}

function generateRoad() {
    let roadPosX = 0;
    let roadPosY = roadPosition;
    while (roadPosX < width - roadSize * 2) {
        const road = new Straight(roadPosX, roadPosY, roadWidth, horizontal);
        this.roads.push(road);
        roadPosX += roadSize;
    }
    const curve = new Curve(roadPosX, roadPosY, roadWidth, horizontal, 90);
    this.roads.push(curve);
    while (roadPosY > -roadSize) {
        roadPosY -= roadSize;
        const road = new Straight(roadPosX, roadPosY, roadWidth, vertical);
        this.roads.push(road);
    }
    goal = new Goal(roadPosX + roadWidth / 4, roadPosY + roadSize * 2, roadWidth, 30);
}
