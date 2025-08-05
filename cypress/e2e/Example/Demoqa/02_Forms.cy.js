/// <reference types= 'cypress' />

describe('Forms', () => {

    it('Practice Form', () => {
        cy.visit('https://demoqa.com/')
        cy.get('div:nth-of-type(2) > div > .avatar.mx-auto.white > svg').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click({force: true})
        cy.get('#firstName').focus().type('First Name')
        cy.get('#lastName').focus().type('Last Name')
        cy.get('#userEmail').focus().type('test@yopmail.com')
        cy.get('#gender-radio-1')
        .check({force: true}).should('be.checked')
        cy.get('#userNumber').focus().type('11111111111')
        cy.get('#dateOfBirthInput').invoke('val').then((text) => {
            expect('24 May 2023').to.equal(text)
        })
        cy.get('.subjects-auto-complete__value-container').type('Legal')
        cy.get('[type="checkbox"]#hobbies-checkbox-3').check({force: true})
        cy.get('input#uploadPicture').attachFile({filePath:"../fixtures/Toolsqa.jpg"})
        cy.get('#currentAddress').focus().type('Current Address')
        //cy.get('div#state .css-19bqh2r > path').click({force: true}).type('Haryana')
        cy.get('button#submit').click({force: true})
        cy.get('button#closeLargeModal').click({force: true})
    })
})
