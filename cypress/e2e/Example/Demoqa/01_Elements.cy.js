/// <reference types= 'cypress' />

describe('Elements', () => {

    it('Text Box', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > div:nth-of-type(1)').click()
        cy.get('.collapse.element-list.show > .menu-list > li:nth-of-type(1) > .text').click()
        cy.get('#userName').type('test')
        cy.get('#userEmail').type('test@yopmail.com')
        cy.get('#currentAddress').type('Current Address')
        cy.get('#permanentAddress').type('Permanent Address')
        cy.get('#submit').click()
    })
    
    it('Check Box', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > div:nth-of-type(1)').click()
        cy.get('.collapse.element-list.show > .menu-list > li:nth-of-type(2) > .text').click()
        cy.get('[type="checkbox"]').check({force: true})
    })

    it('Radio Button', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > div:nth-of-type(1)').click()
        cy.get(' .collapse.element-list.show > .menu-list > li:nth-of-type(3) > .text').click()
        cy.get('#yesRadio').click({force: true})
    })

    it('Web Tables', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > div:nth-of-type(1)').click()
        cy.get('.collapse.element-list.show > .menu-list > li:nth-of-type(4) > .text').click({force: true})
        cy.get('button#addNewRecordButton').click()
        cy.get('#firstName').type('FirstName')
        cy.get('#lastName').type('LastName')
        cy.get('#userEmail').type('test@yopmail.com')
        cy.get('#age').type('20')
        cy.get('#salary').type('5000')
        cy.get('#department').type('Legal')
        cy.get('button#submit').click()
        cy.get('#edit-record-1').click()
        cy.get('#age').clear().type('25')
        cy.get('button#submit').click()
    })

    it('Buttons', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > div:nth-of-type(1)').click()
        cy.get('.collapse.element-list.show > .menu-list > li:nth-of-type(5) > .text').click()
        cy.get('button#doubleClickBtn').dblclick()
        cy.contains('You have done a double click')
        cy.get('button#rightClickBtn').rightclick()
        cy.contains('You have done a right click')
        cy.get('[class] [class="mt-4"]:nth-of-type(3) .btn-primary').click().debug()
        cy.contains('You have done a dynamic click')
    })
})

