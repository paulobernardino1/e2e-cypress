/// <reference types="Cypress" />

describe("SauceDemo Login sayfasi testleri", () => {

    it("TC001 - SauceDemo sayfasina git ve basligi dogrula", () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq', 'Swag Labs')
        
    })

    it("TC002 - SauceDemo Basarisiz Login Testi" , () => {
        cy.visit('https://www.saucedemo.com/')
    
        cy.get('#user-name').type('user')
        cy.get('#password').type('123456')
        cy.get('#login-button').click()
    })

    it("TC003 - SauceDemo Basarili Login Testi" , () => {
       cy.visit('https://www.saucedemo.com/')
       cy.get('#user-name').clear().type('standard_user')
       cy.get('#password').clear().type('secret_sauce')
       cy.get('#login-button').click()
    })

})