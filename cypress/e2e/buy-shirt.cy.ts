describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // Go to homepage
    cy.visit("http://automationpractice.com/");
    // Locate and click the T-shirt option on homepage
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    // Locate and add to cart the only t-shirt available
    cy.get(
        "#center_column a.button.ajax_add_to_cart_button.btn.btn-default",
    ).click();
    // Click on check out buttong from pop-up message
    cy.get("[style*='display: block;'] .button-container > a").click();
    // Click on proceed to check out button on summary
    cy.get(".cart_navigation span").click();
    // Sign in
    // Enter user
    cy.get("#email").type("aperdomobo@gmail.com");
    // Enter Password
    cy.get("#passwd").type("WorkshopProtractor");
    // Click sign in button
    cy.get("#SubmitLogin").click();
    // Adding a time with an assertion until new page is upload
    cy.get(".page-heading").should("have.text", "Addresses");
    // Address
    cy.get("button[class='button btn btn-default button-medium']").click();
    // Shipping
    // Thick accept condions
    cy.get("input[id='cgv']").check();
    cy.get("button[name='processCarrier'] span").click();
    // Payment
    // Bank wire payment type
    cy.get("a[title='Pay by bank wire']").click();
    cy.get("button[class='button btn btn-default button-medium'] span").click();
    // Assertion
    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
