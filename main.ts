#!/usr/bin/env node 

// src/index.ts
import inquirer from 'inquirer';
import { Car } from './car.js';

const cars: Car[] = [];

async function mainMenu() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: ['Add new car', 'List all cars', 'Manage a car', 'Exit'],
    },
  ]);

  switch (answers.action) {
    case 'Add new car':
      await addNewCar();
      break;
    case 'List all cars':
      listAllCars();
      break;
    case 'Manage a car':
      await manageCar();
      break;
    case 'Exit':
      process.exit();
  };

  mainMenu();
};

async function addNewCar() {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'make', message: 'Enter car make:' },
    { type: 'input', name: 'model', message: 'Enter car model:' },
    { type: 'number', name: 'year', message: 'Enter car year:' },
  ]);

  const newCar = new Car(answers.make, answers.model, answers.year);
  cars.push(newCar);
  console.log(`Added new car: ${newCar.getDetails()}`);
}

function listAllCars() {
  if (cars.length === 0) {
    console.log('No cars available.');
    return;
  }
  cars.forEach((car, index) => {
    console.log(`${index + 1}. ${car.getDetails()}`);
  });
}

async function manageCar() {
  if (cars.length === 0) {
    console.log('No cars available to manage.');
    return;
  }

  const carChoices = cars.map((car, index) => ({
    name: car.getDetails(),
    value: index,
  }));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'carIndex',
      message: 'Select a car to manage:',
      choices: carChoices,
    },
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: ['Accelerate', 'Brake', 'Back to main menu'],
    },
  ]);

  const selectedCar = cars[answers.carIndex];
  if (answers.action === 'Accelerate') {
    const accelAnswer = await inquirer.prompt({
      type: 'number',
      name: 'amount',
      message: 'Enter amount to accelerate:',
    });
    selectedCar.accelerate(accelAnswer.amount);
  } else if (answers.action === 'Brake') {
    const brakeAnswer = await inquirer.prompt({
      type: 'number',
      name: 'amount',
      message: 'Enter amount to brake:',
    });
    selectedCar.brake(brakeAnswer.amount);
  }
}

mainMenu();

 