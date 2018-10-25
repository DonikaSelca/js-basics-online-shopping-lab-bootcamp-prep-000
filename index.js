var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var completeItem = {
    itemName: item,
    itemPrice: 0
  };
  completeItem.itemPrice = Math.floor(Math.random() * 100)
  cart.push(completeItem);
  return `${completeItem.itemName} has been added to your cart.`
}

function viewCart() {
  var completeString = "In your cart, you have "; 
  for(var i = 0; i < carts.length; i++) {
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
