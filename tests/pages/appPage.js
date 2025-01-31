const { expect } = require('@playwright/test');
const { applicationLocators } = require('../locators/application');

class AppPage {
  constructor(page) {
    this.page = page;
    this.locators = applicationLocators;
  }

  async clickMenuBarButton() {
    await this.page.click(this.locators.menuBar);
  }

  async clickLogoutButton() {
    await this.page.click(this.locators.logoutButton);
  }

  async clickOnProduct(){
    await this.page.click(this.locators.sauceLabsBoltTShirt);
  }

  async clickAddToCart(){
    await this.page.click(this.locators.addToCart);
  }

  async clickOnCart(){
    await this.page.click(this.locators.cartButton);
  }

  async clickOnCheckout(){
    await this.page.click(this.locators.checkoutButton);
  }

  async enterFirstName(firstName){
    await this.page.fill(this.locators.firstNameField, firstName);
  }

  async enterLastName(lastName){
    await this.page.fill(this.locators.lastNameField, lastName);
  }

  async enterZipCode(zipCode){
    await this.page.fill(this.locators.postalCodeField, zipCode);
  }

  async clickOnContinue(){
    await this.page.click(this.locators.continueButton);
  }

  async clickOnFinish(){
    await this.page.click(this.locators.finishButton);
  }
}

module.exports = AppPage;