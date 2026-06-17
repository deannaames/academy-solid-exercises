// =============================================================
// Exercise 4 – Interface Segregation Principle (ISP)
//
// YOUR TASK:
//   The Vehicle interface covers ALL possible vehicle behaviours.
//   Classes that implement it are forced to throw errors for
//   methods that don't apply to them (e.g. Bicycle.refuel()).
//
//   Split Vehicle into smaller, focused interfaces so each class
//   only implements what it actually supports.
//
// Run:  npm run exercise-4
// =============================================================


interface HasEngine {
  startEngine(): void;
  stopEngine(): void;
}
interface HasFuel {
  refuel(): void;
}
interface HasBattery {
  chargeBattery(): void;
}

interface HasPedals {
  pedal(): void;
}
class PetrolCar implements HasEngine, HasFuel {
  startEngine() {
    console.log("Engine started");
  }
  stopEngine() {
    console.log("Engine stopped");
  }
  refuel() {
    console.log("Refuelling with petrol");
  }

}

class ElectricCar implements HasEngine, HasBattery {
  startEngine() {
    console.log("Motor started");
  }
  stopEngine() {
    console.log("Motor stopped");
  }
  chargeBattery() {
    console.log("Charging battery");
  }
}

class Bicycle implements HasPedals {
  pedal() {
    console.log("Pedalling away!");
  }
}

const petrol = new PetrolCar();
petrol.startEngine();
petrol.refuel();

const electric = new ElectricCar();
electric.startEngine();
electric.chargeBattery();

const bike = new Bicycle();
bike.pedal();
