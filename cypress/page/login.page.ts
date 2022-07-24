import { AddressPage } from "../page/index";

class LoginPage {

    private loginPageHeader: string     = "h1[class='page-heading']"
    private emailTextField: string      = "input[id='email']"
    private passwordTextField: string   = "input[id='passwd']"
    private signInPageButton: string    = "button[id='SubmitLogin'] span"
    
    public isUserOnLoginPageValidation(): LoginPage {
        cy.get(this.loginPageHeader).contains('Authentication')
        return this
    }

    public entersUsernameAndPassword (name: string, password: string): LoginPage{
        cy.get(this.emailTextField).type(name)
        cy.get(this.passwordTextField).type(password)
        return this
    }
    
    public passToAddressPage(): AddressPage {
        cy.get(this.signInPageButton).click()
        return new AddressPage ()
    }
    
}

export { LoginPage }
