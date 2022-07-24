import { ProductsPage } from "../page/index";

class MenuContentPage {

    private menuContentPageURL: string
    private tShirtMenu: string;


    constructor() {
        this.menuContentPageURL = "http://automationpractice.com/index.php"
        this.tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a"
    }

    public visitMenuContentPage(): MenuContentPage {
        cy.visit(this.menuContentPageURL)
        return this
    }

    public clickOnTShirtMenu(): ProductsPage {
        cy.get(this.tShirtMenu).click()
        return new ProductsPage ()
    }
}

export { MenuContentPage }
