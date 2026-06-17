// =============================================================
// Exercise 2 – Open/Closed Principle (OCP)
//
// YOUR TASK:
//   DiscountCalculator uses if/else chains that grow every time
//   a new customer type is added — requiring edits to existing code.
//
//   Refactor it so adding a new discount type (e.g. "pensioner"
//   at 40% off) requires NO changes to existing classes.
//
// Run:  npm run exercise-2
// =============================================================

// ---- PROBLEM CODE (do not delete — understand it first) -----

interface DiscountCalculator {
  calculate(price: number): number // no discount
  }
class StandardPrice implements DiscountCalculator {
  calculate(price: number): number {
    return price;
  }
}
class StudentDiscount implements DiscountCalculator {
  calculate(price: number): number {
    return price * 0.8;
  }
}

class EmployeeDiscount implements DiscountCalculator {
  calculate(price:number): number {
    return price * 0.7;
  }
}

class VIPDiscount implements DiscountCalculator {
  calculate(price:number):number{
    return price * 0.5;
  }
}
const standard = new StandardPrice();
const student = new StudentDiscount();
const vip = new VIPDiscount();
const employee = new EmployeeDiscount();

console.log("Student price:  ", student.calculate(100)); // 80
console.log("VIP price:      ", vip.calculate(100)); // 50
console.log("Standard price: ", standard.calculate(100)); // 100
