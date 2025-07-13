/// <reference types= 'cypress' />

describe('Alerts', () => {

    it('should trigger an alert with a message', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('button#alertButton').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`You clicked a button`)
        })
    }) 

    it('should trigger a time alert with a message', () => {    
        cy.visit('https://demoqa.com/alerts')
        cy.get('button#timerAlertButton',{ timeout: 50000 }).click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`This alert appeared after 5 seconds`)
        })
    })

    it('should trigger a confirmation with a message', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('button#confirmButton').click()

        cy.on('window:confirm', (text) => {
            expect(text).to.contains('Do you confirm action?')
        })
        cy.get('#confirmResult').contains('You selected Ok')
    })

    it('should trigger a prompt with a message', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('button#promtButton').click()

        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('test')
            cy.contains('On button click, prompt box will appear').click()
        })
        cy.get('span#promptResult').should('have.text', 'You entered test')
    })
})

