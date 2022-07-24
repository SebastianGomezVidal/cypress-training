import { ShoppingCartPage } from "../page/index";

class ProductsPage {

    private ProductsPageHeader: string                  = "h1 > span[class = 'cat-name']"
    private addToCartButton: string                     = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default"
    private proceedToShoppingCartCheckoutButton: string = "[style*='display: block;'] .button-container > a"
    
    public isUserOnProductsPageValidation(): ProductsPage {
        cy.get(this.ProductsPageHeader).contains('T-shirts ')
        return this
    }

    public addTShirtToCart(): ProductsPage {
        cy.get(this.addToCartButton).click();
        return this
    }

    public passToShoppingCartPage(): ShoppingCartPage {
        cy.get(this.proceedToShoppingCartCheckoutButton).click();
        return new ShoppingCartPage ()
    } 


}

export { ProductsPage }
