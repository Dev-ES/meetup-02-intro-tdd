function ShoppingCart() {
  this.items = [];

  this.add = productItem => {
    this.items.push(productItem);
  };

  this.total = () => {
    return this.items
      .map(item => item.price)
      .reduce((current, next) => current + next, 0);
  };
}

module.exports = ShoppingCart;
