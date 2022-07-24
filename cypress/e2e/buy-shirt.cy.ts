import {MenuContentPage, PaymentPage} from "../page/index";

describe("Buy a t-shirt", () => {
  let buyer: MenuContentPage;
  let user: { email: string, password: string;};

  before( () =>{
    buyer = new MenuContentPage();
    cy.fixture("user").then(function(data) {
      user = data;
    });
  });

  it("then should be bought a t-shirt", function() {
    buyer.
        visitMenuContentPage().
        clickOnTShirtMenu().
        isUserOnProductsPageValidation().
        addTShirtToCart().
        passToShoppingCartPage().
        isUserOnShoppingCartPageValidation().
        passToLogin().
        isUserOnLoginPageValidation().
        entersUsernameAndPassword(user.email, user.password).
        passToAddressPage().
        isUserOnAddressPageValidation().
        passToShippingPage().
        isUserOnShippingPageValidation().
        acceptsServiceTerms().
        passToPaymentPage().
        isUserOnPaymentPageValidation().
        selectsPaymentOption().
        confirmOrder();

    cy.then(()=> {
      expect(PaymentPage.confirmationMessage).to.equal("Your order on My Store is complete.");
    });
  });
});


