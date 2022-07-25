class PaymentPage {

    private paymentPageHeader: string = "h1[class='page-heading']"
    private paymentTypeButton: string = ".bankwire"
    private confirmOrderButton: string = "#cart_navigation > .button > span"
    private succesOrderLegend: string = "#center_column > div > p > strong"
    //public static confirmationMessage: string

    public isUserOnPaymentPageValidation(): PaymentPage {
        cy.get(this.paymentPageHeader).contains('Please choose your payment method')
        return this
    }

    public selectsPaymentOption(): PaymentPage {
        cy.get(this.paymentTypeButton).click()
        return this
    }

    public confirmOrder(): PaymentPage {
        cy.get(this.confirmOrderButton).click()
        return this
    }   

    public assertConfirmationMessage(message : string): void {
        cy.get(this.succesOrderLegend).should('have.text', message)
    }
    
}

export { PaymentPage }
