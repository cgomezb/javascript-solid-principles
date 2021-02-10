class Parallelogram {
  constructor(width, height) {
    this.setWidth(width);
    this.setHeight(height);
  }

  setWidth(width) {
    this.width = width;
  }

  getWidth() {
    return this.width;
  }

  setHeight(height) {
    this.height = height;
  }

  getHeight() {
    return this.height;
  }

  area() {
    return this.width * this.height;
  }
}

class Rectangle extends Parallelogram {
  constructor(width, height) {
    super(width, height);
  }
}

class Square extends Parallelogram {
  constructor(side) {
    super(side, side);
  }
  
  getSide() {
    return this.getWidth();
  }
}

function increaseParallelogramWidth(parallelogram) {
  parallelogram.setWidth(parallelogram.getWidth() + 1);
}

const rectangle = new Rectangle(10, 2);
const square = new Square(5);

increaseParallelogramWidth(rectangle);
increaseParallelogramWidth(square);

console.log(rectangle.area());    // 22
console.log(square.area());       // 30
