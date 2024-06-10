
// src/car.ts
export class Car {
    private make: string;
    private model: string;
    private year: number;
    private speed: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    accelerate(amount: number): void {
      this.speed += amount;
      console.log(`${this.make} ${this.model} accelerated to ${this.speed} km/h.`);
    }
  
    brake(amount: number): void {
      this.speed -= amount;
      if (this.speed < 0) this.speed = 0;
      console.log(`${this.make} ${this.model} slowed down to ${this.speed} km/h.`);
    }
  
    getSpeed(): number {
      return this.speed;
    }
  
    getDetails(): string {
      return `${this.make} ${this.model} (${this.year}) - Speed: ${this.speed} km/h`;
    }
  }
  