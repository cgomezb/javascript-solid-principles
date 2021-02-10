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
const rectangle2 = new Rectangle(5, 5);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(rectangle2);

console.log(rectangle1.area());   // 22
console.log(rectangle2.area());   // 30
