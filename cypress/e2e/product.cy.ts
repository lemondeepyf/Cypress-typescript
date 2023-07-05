import {LoginPage} from "./pages/login_pages.cy"
import {DashboardPage} from "./pages/dashboard_pages.cy"
import { CartPage } from "./pages/cart_pages"
import { CheckoutPage1 } from "./pages/checkout_pages"
import { CheckoutPage2 } from "./pages/checkout2_pages"
import { CompletePage } from "./pages/complete_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
let checkoutPage1 = new CheckoutPage1()
let checkoutPage2 = new CheckoutPage2()
let completePage = new CompletePage()
const URL = 'https://www.saucedemo.com/'

describe('PRODUCT',()=>{
    it ('PR001 : (positive case) Complete form', ()=>{
        loginPage.login(URL,'standard_user','secret_sauce')
        loginPage.assertLogin()
        dashboardPage.sauceLabsBackpack()
        dashboardPage.addToCartBtn()
        dashboardPage.cartBtn()
        cartPage.assertCart()
        cartPage.checkoutBtn()
        checkoutPage1.assertCheckoutPage1()
        checkoutPage1.fillFormCheckout('yustiana', 'fauziyah', '165243')
        checkoutPage1.continueBtn()
        checkoutPage2.assertCheckoutPage2()
        checkoutPage2.btnFinish()
        completePage.assertSuccesCheckout()
    })

    it ('PR002 : (negative case) Incomplete form', ()=>{
        loginPage.login(URL,'standard_user','secret_sauce')
        loginPage.assertLogin()
        dashboardPage.sauceLabsBackpack()
        dashboardPage.addToCartBtn()
        dashboardPage.cartBtn()
        cartPage.assertCart()
        cartPage.checkoutBtn()
        checkoutPage1.assertCheckoutPage1()
        checkoutPage1.fillFormCheckout('yustiana', 'fauziyah','{backspace}')
        checkoutPage1.continueBtn()
        checkoutPage1.errorMsg()
    })
})

