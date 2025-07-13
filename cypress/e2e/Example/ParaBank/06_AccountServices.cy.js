/// <reference types= 'cypress' />

describe('Account Services', () => {
    it('list to account services',  () => {
        cy.login()

        //process of listing account services
        //cy.get('#leftPanel ul').find("li").should('be.visible')
        cy.get("#leftPanel ul").then(($el) => {
            cy.log ($el.find("li").length) 
        })
    })
})



