import {MenuContentPage} from "../page/index";

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
        addTShirtToCart().
        passToShoppingCartPage().
        passToLogin().
        entersUsernameAndPassword(user.email, user.password).
        passToAddressPage().
        passToShippingPage().
        acceptsServiceTerms().
        passToPaymentPage().
        selectsPaymentOption().
        confirmOrder().
        getConfirmationMessageValidation();
  });
});


