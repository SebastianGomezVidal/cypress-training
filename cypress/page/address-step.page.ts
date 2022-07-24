import { ShippingPage } from "../page/index";

class AddressPage {

    private addressPageHeader: string
    private proceedToShippingCheckoutButton: string

    constructor() {
        this.addressPageHeader = "h1[class='page-heading']"
        this.proceedToShippingCheckoutButton = "button[name='processAddress'] span"
    }

    public isUserOnAddressPageValidation(): AddressPage {
        cy.get(this.addressPageHeader).contains('Addresses')
        return this
    }

    public passToShippingPage(): ShippingPage {
        cy.get(this.proceedToShippingCheckoutButton).click()
        return new ShippingPage ()
    }
    
}

export { AddressPage }
