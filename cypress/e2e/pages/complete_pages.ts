export class CompletePage{

    assertSuccesCheckout(){
        cy.contains('Thank you for your order!').should('be.visible')
    }

}