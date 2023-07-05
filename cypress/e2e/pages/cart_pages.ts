export class CartPage{
    link_cart = 'Your Cart'

    assertCart(){
        cy.contains(this.link_cart).click()
        cy.contains('Your Cart').should('be.visible') 
    }

    checkoutBtn(){
        cy.get('[data-test="checkout"]').click()
    }

}