import { PaymentPage } from "../page/index";

class ShippingPage {

    private shippingPageHeader: string = "h1[class='page-heading']"
    private termsCheckBox: string = "input[id='cgv']"
    private proceedToPaymentCheckoutButton: string = "button[name='processCarrier'] span"
    
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
