import {browser, $, $$} from '@wdio/globals'

class AddToCart{
    // element locator
    get addProductSauceLabsOnesie() {return $('#add-to-cart-sauce-labs-onesie')}
    get addProductBikeLight() {return $('#add-to-cart-sauce-labs-bike-light')}
    get addProductBoldTshirt() {return $('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get addProductBackpack() {return $('#add-to-cart-sauce-labs-backpack')}
    get addProductTshirtRed() {return $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')}
    get addProductFleeceJacket() {return $('#add-to-cart-sauce-labs-fleece-jacket')}

    get removeOnesie() {return $('#remove-sauce-labs-onesie')}
    get removeBikeLight() {return $('#remove-sauce-labs-bike-light')}
    get removeBoltTshirt() {return $('#remove-sauce-labs-bolt-t-shirt')}
    get removeBackpack() {return $('#remove-sauce-labs-backpack')}
    get removeTshirtRed() {return $('[data-test="remove-test.allthethings()-t-shirt-(red)"]')}
    get removeFleeceJacket() {return $('#remove-sauce-labs-fleece-jacket')}

    get shoppingCart() {return $('[data-test="shopping-cart-link"]')}
    get shoppingCartBadge() {return this.shoppingCart.$('[data-test="shopping-cart-badge"]')}

    // action selector
    async clickAddSaucelabsOnesie(){
        await this.addProductSauceLabsOnesie.click()
    }

    async clickAddSaucelabsBikeLight(){
        await this.addProductBikeLight.click()
    }

    async clickAddSaucelabsBoldTshirt(){
        await this.addProductBoldTshirt.click()
    }

    async clickAddSaucelabsBackpack(){
        await this.addProductBackpack.click()
    }

    async clickAddSaucelabsTshirtRed(){
        await this.addProductTshirtRed.click()
    }

    async clickAddSaucelabsFleeceJacket(){
        await this.addProductFleeceJacket.click()
    }

    async clickRemoveFleeceJacket(){
        await this.removeFleeceJacket.click()
    }

    async clickRemoveAllProduct(){
        await this.removeOnesie.click()
        await this.removeBikeLight.click()
        await this.removeBoltTshirt.click()
        await this.removeBackpack.click()
        await this.removeTshirtRed.click()
        // await this.removeFleeceJacket.click()
    }

    async countCart(){
        const productInCart = await this.shoppingCartBadge.getText()

        return productInCart
    }
}

export default new AddToCart