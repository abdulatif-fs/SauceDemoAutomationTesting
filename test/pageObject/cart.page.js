import {browser, $, $$} from '@wdio/globals'

class Cart{

    // element locator
    get cartmenu() {return $('[data-test="shopping-cart-link"]')}
    get titlecart() {return $('[data-test="title"]')}
    get removeOnesie() {return $('#remove-sauce-labs-onesie')}
    get allListItemName() {return $$('[data-test="inventory-item-name"]')}

    get checkoutItemmenu() {return $('#checkout')}


    // action selector
    async clickcartmenu(){
        await this.cartmenu.click()
    }

    async clickRemoveOnesie() {
        await this.removeOnesie.click()
    }

    async clickCheckout(){
        await this.checkoutItemmenu.click()
    }
    
    async getAllItemName() {
        const ItemName = await this.allListItemName
        const AllItemName = []

        for(let name of ItemName){
            AllItemName.push(await name.getText())
        }

        return AllItemName
    }
    
}

export default new Cart