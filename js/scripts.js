const SIZES = [
  { size: "small", price: 5.00},
  { size: "medium", price: 10.00},
  { size: "large", price: 12.00},
  { size: "x-large", price: 15.00}
];

const TOPPINGS = [
  { size: "pepperoni", price: 1.00},
  { size: "sausage", price: 1.00},
  { size: "pineapple", price: 1.00},
  { size: "jalapenos", price: 1.00}
];

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.getCost = function() {
  let cost = 0;
  
}