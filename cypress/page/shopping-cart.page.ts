import { LoginPage } from "../page/index";

class ShoppingCartPage {

    private shoppingPageHeader: string;
    private proceedToAddressCheckoutButton: string

    constructor() {
        this.shoppingPageHeader = "h1[id='cart_title']"
        this.proceedToAddressCheckoutButton = "a[class='button btn btn-default standard-checkout button-medium'] span"
    }

    public isUserOnShoppingCartPageValidation(): ShoppingCartPage {
        cy.get(this.shoppingPageHeader).contains('Shopping-cart')
        return this
    }
    
    public passToLogin(): LoginPage {
        cy.get(this.proceedToAddressCheckoutButton).click()
        return new LoginPage ()
    }
    
}

export { ShoppingCartPage }
