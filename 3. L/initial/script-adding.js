class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = height;
  }

  setHeight(height) {
    this.width = width;
    this.height = height;
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const square = new Square(5, 5);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(square);

console.log(rectangle1.area());   // 22
console.log(square.area());       // 36 => Error => 'Square is not substitutable by Square'
