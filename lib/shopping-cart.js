function ShoppingCart() {
  this.items = [];

  this.add = (productItem) => {
    this.items.push(productItem);
  };

  this.total = () => {
    return this.items
      .map(item => item.price * item.quantity)
      .reduce((current, next) => current + next, 0);
  };

  this.remove = (name) => {
    this.items = this.items.filter(item => item.name !== name);
  };
}

module.exports = ShoppingCart;
