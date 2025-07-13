/// <reference types="Cypress" />

describe("Ürün Ekleme/Silme", () => {

    it("Sepete Ürün Ekleme/Silme" , () => {
       cy.visit('https://www.saucedemo.com/')
       cy.get('#user-name').type('standard_user')
       cy.get('#password').type('secret_sauce')
       cy.get('#login-button').click()

        //Sepete ürün ekleme
       cy.get('#add-to-cart-sauce-labs-backpack').click()

       //Sepetten ürün silme
       cy.get('a[class="shopping_cart_link"]').click()
       cy.get('#remove-sauce-labs-backpack').click()
    })

})