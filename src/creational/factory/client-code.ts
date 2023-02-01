import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

/* const fusca = new Car('Fusca');
fusca.pickUp('Joana');
fusca.stop();

const celta = new Car('celta');
celta.pickUp('Joana');
celta.stop(); */

/* const carFactory = new CarFactory();
const fusca = carFactory.getVehicle('Fusca');
fusca.pickUp('Joana');
fusca.stop(); */

const carFactory = new CarFactory();
const customerNames = ['ana', 'joas', 'pedro', 'joao'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `novo carro ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
