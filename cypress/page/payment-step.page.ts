class PaymentPage {

    private paymentPageHeader: string
    private paymentTypeButton: string
    private confirmOrderButton: string
    private succesOrderLegend: string
    public static confirmationMessage: string

    constructor() {
        this.paymentPageHeader = "h1[class='page-heading']"
        this.paymentTypeButton = ".bankwire"
        this.confirmOrderButton = "#cart_navigation > .button > span"
        this.succesOrderLegend = "#center_column > div > p > strong"
    }

    public isUserOnPaymentPageValidation(): PaymentPage {
        cy.get(this.paymentPageHeader).contains('Please choose your payment method')
        return this
    }

    public selectsPaymentOption(): PaymentPage {
        cy.get(this.paymentTypeButton).click()
        return this
    }

    public confirmOrder():void {
        cy.get(this.confirmOrderButton).click()
        cy.get(this.succesOrderLegend).then((element) => {
            PaymentPage.confirmationMessage = element.text()
        })   
    }
    
}

export { PaymentPage }
