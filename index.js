// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   log() {
//     console.log(this);
//   }
// }

// const myCar = new Car("Ford", 2010);

// const salesTax = 0.05;

// const productOne = new Product("Shirt", 15.99, 35);
// const productTwo = new Product("Pants", 20.99, 20);
// const productThree = new Product("Suit", 150.99, 10);
// const productFour = new Product("Socks", 4.99, 0);

// productFour.displayProduct();
// const total = productFour.calculateTotal(salesTax);

// console.log(`Total price (with tax): $${total.toFixed(2)}`);
// productFour.inStock();

class Product {
  constructor(name, price, stock) {
    this.brand = "Kyle Gordon Clothes";
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }
  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
  inStock() {
    if (this.stock > 0) {
      console.log("This product is in stock!");
      console.log(`Remaining stock: ${this.stock}`);
    } else {
      console.log("This product is not in stock.");
      console.log("We will restock this product soon!");
    }
  }
}

class subProduct extends Product {
  constructor(name, price, stock, isGood) {
    super(name, price, stock);
    this.isGood = isGood;
  }
}

const myProduct = new subProduct("Sweater", 25.99, 5, true);

console.log(myProduct);
