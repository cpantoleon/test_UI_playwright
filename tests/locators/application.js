const applicationLocators = {
    swagLabsLogo: '.app_logo',
    menuBar: '.bm-burger-button',
    logoutButton: '#logout_sidebar_link',
    sauceLabsBoltTShirt: 'div.inventory_item_name:has-text("Sauce Labs Bolt T-Shirt")',
    addToCart: 'button.btn_primary.btn_inventory',
    cartButton: '.shopping_cart_link',
    checkoutButton: '#checkout',
    firstNameField: '#first-name',
    lastNameField: '#last-name',
    postalCodeField: '#postal-code',
    continueButton: '#continue',
    finishButton: '#finish',
    orderVerification: '.complete-header',
    thankYouMessage: 'h2.complete-header:has-text("Thank you for your order!")'
}
  
  module.exports = { applicationLocators };
  