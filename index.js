// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Getter to count the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter to calculate the perimeter of the polygon
    get perimeter() {
      return this.sides.reduce((total, side) => total + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    // Getter to check if the triangle is valid
    get isValid() {
      if (this.countSides !== 3) return false;
  
      const [a, b, c] = this.sides;
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
  }
  
  class Square extends Polygon {
    // Getter to check if the square is valid
    get isValid() {
      if (this.countSides !== 4) return false;
  
      const [a, b, c, d] = this.sides;
      return (a === b) && (b === c) && (c === d);
    }
  
    // Getter to calculate the area of the square
    get area() {
      if (this.isValid) {
        return this.sides[0] ** 2;
      }
      return undefined;
    }
  }
  
  // Example usage:
  // const polygon = new Polygon([5, 5, 5, 5]);
  // console.log(polygon.countSides); // 4
  // console.log(polygon.perimeter);  // 20
  
  // const triangle = new Triangle([3, 4, 5]);
  // console.log(triangle.isValid);   // true
  
  // const square = new Square([4, 4, 4, 4]);
  // console.log(square.isValid);     // true
  // console.log(square.area);        // 16
  