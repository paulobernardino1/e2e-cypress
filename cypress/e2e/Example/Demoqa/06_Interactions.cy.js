/// <reference types= 'cypress' />

describe('Interaction', () => {
    it('Selectable', () => {
        cy.visit('https://demoqa.com/selectable')
        cy.get('ul#verticalListContainer li').first().click()
       .should('have.attr','class', 'mt-2 list-group-item active list-group-item-action')

       cy.get('ul#verticalListContainer li').first().click()
       .should('have.attr','class', 'mt-2 list-group-item list-group-item-action')
    })
})


