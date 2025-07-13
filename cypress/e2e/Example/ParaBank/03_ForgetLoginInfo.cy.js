/// <reference types= 'cypress'/>

describe('ForgotLoginInfo', () => {

    it('Forgot Login Info-Positive Test', () => {
        cy.visit('https://parabank.parasoft.com/')
        cy.get('div#loginPanel > p:nth-of-type(1) > a').click()

        // filling in information to verify your account
        cy.get('input#firstName').type('trial')
        cy.get('input#lastName').type('lastname')
        cy.get('tbody tr:nth-of-type(3) [type]').type('adress')
        cy.get('tbody tr:nth-of-type(4) [type]').type('city')
        cy.get('tbody tr:nth-of-type(5) [type]').type('state')
        cy.get('tbody tr:nth-of-type(6) [type]').type("1111111")
        cy.get('input#ssn').type('22222222222')

        // find my login info
        cy.get('.form2 .button').click()
})

    it('Forgot Login Info-Negative Test', () => {
        cy.visit('https://parabank.parasoft.com/')
        cy.get('div#loginPanel > p:nth-of-type(1) > a').click()

        // filling in information to verify your account
        cy.get('input#firstName').type('firstname')
        cy.get('input#lastName').type('lastname')
        cy.get('tbody tr:nth-of-type(3) [type]').type('adress')
        cy.get('tbody tr:nth-of-type(4) [type]').type('city')
        cy.get('tbody tr:nth-of-type(5) [type]').type('state')
        cy.get('tbody tr:nth-of-type(6) [type]').type("1111111")
        cy.get('input#ssn').type('22222222222')

        // find my login info
        cy.get('.form2 .button').click()
        cy.contains('The customer information provided could not be found')
    })
})