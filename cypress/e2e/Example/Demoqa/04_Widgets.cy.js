/// <reference types= 'cypress' />

describe('Widgets' ,() => {
    
    it('Accordian', () => {
        cy.visit('https://demoqa.com/widgets')
        cy.get(':nth-child(4) > .element-list > .menu-list > #item-0').click({force: true})
        cy.get('#section1Heading').click()
        cy.get('#section2Heading').click().should('have.text','Where does it come from?')
    })

    it('Date Picker', () => {
        cy.visit('https://demoqa.com/widgets')
        cy.get(':nth-child(4) > .element-list > .menu-list > #item-2').click({force: true})
        cy.get('#datePickerMonthYearInput').invoke('val').then((text) => {

            var myDate = new Date()
            var year = myDate.getFullYear()
            var month = myDate.getMonth() + 1
            if(month <= 9)
                month = '0'+month
            var day= myDate.getDate()
            if(day <= 9)
                day = '0'+day

            let currentDate = `${month}/${day}/${year}`
            console.log(currentDate); 
            expect(currentDate).to.equal(text)
        })

        cy.get('#dateAndTimePickerInput').invoke('val').then((text) => {
        
            const date = new Date();
            const left = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            })
            const right = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
        
            expect(left + ' ' + right).to.equal(text)
        })   
    })

    it("Changing slider", () => {
        cy.visit("https://demoqa.com/slider");
        cy.get("[class='range-slider range-slider--primary']")
            .invoke("val", 70)
            .trigger("change")
            .click({ force: true })
    })
})

