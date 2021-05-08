const { I } = inject();

module.exports = {

  title: "Your shopping cart",

  cartItem: {
    description: "//*[@id='product_1_1_0_0']/td[2]/p/a",
    unitPrice: "//*[@id='product_price_1_1_0']/span"
  }
  
}
