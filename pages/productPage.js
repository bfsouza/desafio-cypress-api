const { I } = inject();

module.exports = {
  
  product: {
    name: "//h1[@itemprop='name']",
    btnAdd: "//*[@id='add_to_cart']/button"
  },
  
  modalValidationAddCart: {
    modal: "//div[@id='layer_cart']",
    txtValidationSuccess: "Product successfully added to your shopping cart",
    btnGoCheckout: "//a[@class='btn btn-default button button-medium']"
  }

}
