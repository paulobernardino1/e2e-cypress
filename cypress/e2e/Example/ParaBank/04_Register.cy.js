/// <reference types= 'cypress'/>

describe('Register', () => {
    it('Successful Registration', () => {
        cy.visit('https://parabank.parasoft.com/')
        cy.get('#loginPanel a[href*="register.htm"]').click()

        // filling in the information to register
        cy.get('[name*="customer.firstName"]').type('trial')
        cy.get('[name*="customer.lastName"]').type('lastname')
        cy.get('[name*="customer.address.street"]').type('adress')
        cy.get('[name*="customer.address.city"]').type('city')
        cy.get('[name*="customer.address.state"]').type('state')
        cy.get('[name*="customer.address.zipCode"]').type('1111111')
        cy.get('[name*="customer.phoneNumber"]').type('+905555555555')
        cy.get('[name*="customer.ssn"]').type('22222222222')
        cy.get('[name*="customer.username"]').type('trial@yopmail.com')
        cy.get('[name*="customer.password"]').type('test123')
        cy.get('[name*="repeatedPassword"]').type('test123')

        // register button click
        cy.get('.form2 .button').click()
        cy.contains('Your account was created successfully. You are now logged in')
    })
})