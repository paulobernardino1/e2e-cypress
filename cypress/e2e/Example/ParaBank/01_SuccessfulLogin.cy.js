/// <reference types='cypress'/>

describe('LoginTest-01', () => {
    it('Successful Login', () => {
        cy.visit('https://parabank.parasoft.com/')

        // fill in the form
        cy.get("input[name='username']").type('trial@yopmail.com')
        cy.get("input[name='password']").type('test123')
        
        // click the sign in button
        cy.get('[value]').click()
        
    })
})