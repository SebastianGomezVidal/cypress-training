import { PaymentPage } from "../page/index";

class ShippingPage {

    private shippingPageHeader: string
    private termsCheckBox: string
    private proceedToPaymentCheckoutButton: string

    constructor() {
        this.shippingPageHeader = "h1[class='page-heading']"
        this.termsCheckBox = "input[id='cgv']"
        this.proceedToPaymentCheckoutButton = "button[name='processCarrier'] span"
    }

    public isUserOnShippingPageValidation(): ShippingPage {
        cy.get(this.shippingPageHeader).contains('Shipping')
        return this
    }

    public acceptsServiceTerms(): ShippingPage {
        cy.get(this.termsCheckBox).check()
        return this
    }

    public passToPaymentPage(): PaymentPage {
        cy.get(this.proceedToPaymentCheckoutButton).click()
        return new PaymentPage ()
    }
    
}

export { ShippingPage }
