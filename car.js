// src/car.ts
export class Car {
    make;
    model;
    year;
    speed;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.make} ${this.model} accelerated to ${this.speed} km/h.`);
    }
    brake(amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0;
        console.log(`${this.make} ${this.model} slowed down to ${this.speed} km/h.`);
    }
    getSpeed() {
        return this.speed;
    }
    getDetails() {
        return `${this.make} ${this.model} (${this.year}) - Speed: ${this.speed} km/h`;
    }
}
