/// <reference types= 'cypress'/>

describe('LoginTest-02', () => {
    it('Failed Login with wrong password', () => {
        // Correct username, wrong password
        cy.visit('https://parabank.parasoft.com/')

        // fill in the form
        cy.get("input[name='username']").type('trial@yopmail.com')
        cy.get("input[name='password']").type('123456')

        // click the sign in button
        cy.get('[value]').click()
        cy.contains('The username and password could not be verified')
    })

    it('Failed Login with wrong username', () => {
        // Wrong username, correct password 
        cy.visit('https://parabank.parasoft.com/')

        // fill in the form
        cy.get("input[name='username']").type('testtt@yopmail.com')
        cy.get("input[name='password']").type('test123')

        // click the sign in button
        cy.get('[value]').click()
        cy.contains('The username and password could not be verified')
    })
})