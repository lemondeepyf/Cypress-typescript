export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addToCartBtn(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }

    cartBtn(){
        cy.get('.shopping_cart_link').click()
    }
}