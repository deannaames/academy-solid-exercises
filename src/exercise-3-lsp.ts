// =============================================================
// Exercise 3 – Liskov Substitution Principle (LSP)
//
// YOUR TASK:
//   Square extends Rectangle and overrides setWidth/setHeight to
//   keep sides equal. This breaks printArea() which expects a
//   Rectangle to behave predictably (w=5, h=10 → area=50).
//
//   Redesign the hierarchy so both shapes can be used safely
//   without unexpected side effects.
//
// Run:  npm run exercise-3
// =============================================================
interface Shape {
  area(): number;
}
class Rectangle implements Shape{
  constructor(protected width: number, protected height: number) {
  }
  setWidth(w: number) {
    this.width = w;
  }

  setHeight(h: number) {
    this.height = h;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(protected width: number) {

  }

  setWidth(w: number) {
    this.width = w;
  }

  area(): number {
    return this.width * this.width;
  }
}
function printArea(shape: Shape) {
  console.log(` Area Calculated: ${shape.area()}`);
}

const rect = new Rectangle(5,10);
printArea(rect); 

const square = new Square(5);
printArea(square); 
