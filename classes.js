class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  log() {
    console.log(this);
  }
}

const car = new Car("Ford", 2014);

car.log();

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const productOne = new Product("Shirt", 19.99);
const productTwo = new Product("Pants", 22.5);
const productThree = new Product("Underwear", 100.0);

productOne.displayProduct();

const total = productOne.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
