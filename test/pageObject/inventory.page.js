import {browser, $, $$} from '@wdio/globals'

class Inventory{
    // element locator
    get filterField() {return $('[data-test= "product-sort-container"]')}
    get optionfilterDescending() {return this.filterField.$('[value="za"]')}
    get optionfilterAscending() {return this.filterField.$('[value="az"]')}
    get optionFilterLohi() {return this.filterField.$('[value="lohi"]')}
    get optionFilterHilo() {return this.filterField.$('[value="hilo"]')}
    get allProductName() {return $$('div[data-test="inventory-item-name"]')}
    get allProductPrice() {return $$('div[data-test="inventory-item-price"]')}

    get burgerMenuItem() {return $('#react-burger-menu-btn')}
    get allItemMenu() {return $('a[data-test="inventory-sidebar-link"]')}
    get aboutMenu() {return $('a[data-test="about-sidebar-link"]')}
    get logoutMenu() {return $('a[data-test="logout-sidebar-link"]')}
    get resetMenu() {return $('a[data-test="reset-sidebar-link"]')}
    get closeMenu() {return $('#react-burger-cross-btn')}

    // action selector
    async clickBurgerMenu() {
        await this.burgerMenuItem.click()
    }

    async clickAllListItem(){
        await this.allItemMenu.click()
    }

    async clickAboutMenu() {
        await this.aboutMenu.click()
    }

    async clickLogoutMenu() {
        await this.logoutMenu.click()
    }

    async clickResetMenu(){
        await this.resetMenu.click()
    }

    async clickFilterDescending(){
        await this.filterField.click()
        await this.optionfilterDescending.click()
    }

    async clickFilterAscending(){
        await this.filterField.click()
        await this.optionfilterAscending.click()
    }

    async clickFilterLohi(){
        await this.filterField.click()
        await this.optionFilterLohi.click()
    }

    async clickFilterHilo(){
        await this.filterField.click()
        await this.optionFilterHilo.click()
    }

    async getAllProductName(){
        const productName = await this.allProductName

        const allNameText = []

        for(const name of productName){
            const nameText = await name.getText()
            allNameText.push(nameText)
        }

        return allNameText
    }

    async getAllProductPrice(){
        const productprice = await this.allProductPrice

        const allPriceText = []

        for(const price of productprice){
            const priceText = await price.getText()
            allPriceText.push(Number(priceText.split('$')[1]))
        }

        return allPriceText
    }
}

export default new Inventory