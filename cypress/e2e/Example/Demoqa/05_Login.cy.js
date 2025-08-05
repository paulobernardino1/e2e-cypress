/// <reference types= 'cypress' />

describe('Login', () => {
    it('create new user', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(6) > :nth-child(1)').click()
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click({force: true})
        cy.get('#userName').type('Username')
        cy.get('#password').type('123456')
        cy.get('#newUser').click()
    })

    it('log in user', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(6) > :nth-child(1)').click()
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click({force: true})
        cy.get('#userName').type('username')
        cy.get('#password').type('123456')
        cy.get('button#login').click()
    })
})