import { AddressPage } from "../page/index";

class LoginPage {

    private loginPageHeader: string
    private emailTextField: string
    private passwordTextField: string
    private signInPageButton: string

    constructor() {
        this.loginPageHeader = "h1[class='page-heading']"
        this.emailTextField = "input[id='email']"
        this.passwordTextField = "input[id='passwd']"
        this.signInPageButton = "button[id='SubmitLogin'] span"
    }

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
