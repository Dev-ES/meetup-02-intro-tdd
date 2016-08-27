function Product() {
  this.price = 0;
  this.quantity = 0;
  this.total = () => this.price * this.quantity;
}

module.exports = Product;
