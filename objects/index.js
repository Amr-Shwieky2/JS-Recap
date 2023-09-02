let book = {};

book.title = String;
book.author = String;
book.ISBN = undefined;
book.isCheckedOut = Boolean;
book.toggleCheckOutStatus = function(){
    return this.isCheckedOut;
};

book.addItems = function(title, author, ISBN, isCheckedOut){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isCheckedOut = isCheckedOut;
    return this;
};

let value1 = book.addItems("Sample Title", "Sample Author", "123456789", false);
let value2 = book.addItems("Title", "Author", "543555663", true);
console.log(value1);
console.log(value2);


let shoppingCart = {
  items: [],
};

shoppingCart.addItem = function(name, price, quantity) {
  const existingItem = this.items.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    this.items.push({ name, price, quantity });
  }
};

shoppingCart.removeItem = function(name) {
  this.items = this.items.filter(item => item.name !== name);
};

shoppingCart.calculateTotal = function() {
  return this.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};
