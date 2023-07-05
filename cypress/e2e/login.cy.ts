import {LoginPage} from "./pages/login_pages.cy"
import {DashboardPage} from "./pages/dashboard_pages.cy"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

describe('LOGIN ', ()=>{
    it('LO001 : valid username & password', () => {
        loginPage.login(URL,'standard_user','secret_sauce')
        loginPage.assertLogin() 
    })

    it ('LO002 : invalid username & valid password', ()=>{
        loginPage.login(URL,'invalid user','secret_sauce')
        loginPage.assertLoginFail()
    })

    it('LO003 : valid username & invalid password', () => {
        loginPage.login(URL,'standard_user','invalidPass')
        loginPage.assertLoginFail()
    })
    
    it('LO004 : invalid username & invalid password', ()=>{
        loginPage.login(URL,'invalid username','invalidPass')
        loginPage.assertLoginFail()
    })

    it('Test Sauce Demo Sauce labs product backpack', () => {
        loginPage.login(URL,'standard_user','secret_sauce')
        loginPage.assertLogin()
        dashboardPage.sauceLabsBackpack() 
    })
})