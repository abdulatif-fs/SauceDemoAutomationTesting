import { expect, browser, $$, $ } from '@wdio/globals'
import LoginPage from '../pageObject/login.page.js'
import AddToCart from '../pageObject/addtocart.page.js'

describe('Cart in SauceDemo', async () => {
    beforeEach('login to sauceDemo and acces Inventory.html', async () => {
        await LoginPage.OpenLogin()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')

        await LoginPage.SetUsername('standard_user')
        await LoginPage.SetPassword('secret_sauce')
        await LoginPage.ClickLogin()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('add product to cart 1 product', async () => {
        await AddToCart.clickAddSaucelabsOnesie()

        // const productInCart = await Cart.countCart()
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

    })

    it('add product to cart 2 product', async () => {
        // await Cart.clickAddSaucelabsOnesie()
        await AddToCart.clickAddSaucelabsBikeLight()

        expect(AddToCart.shoppingCartBadge).toHaveText(2)
    })

    it('add product to cart 3 product', async () => {
        // await Cart.clickAddSaucelabsOnesie()
        // await Cart.clickAddSaucelabsBikeLight()
        await AddToCart.clickAddSaucelabsBoldTshirt()

        expect(AddToCart.shoppingCartBadge).toHaveText(3)
    })

    it('add product to cart 6 product', async () => {
        // await Cart.clickAddSaucelabsOnesie()
        // await Cart.clickAddSaucelabsBikeLight()
        // await Cart.clickAddSaucelabsBoldTshirt()
        await AddToCart.clickAddSaucelabsBackpack()
        await AddToCart.clickAddSaucelabsTshirtRed()
        await AddToCart.clickAddSaucelabsFleeceJacket()

        expect(AddToCart.shoppingCartBadge).toHaveText(6)
    })

    it('Remove product Fleece Jacket', async () => {
        // await AddToCart.clickAddSaucelabsFleeceJacket()
        await AddToCart.clickRemoveFleeceJacket()

        expect(AddToCart.shoppingCartBadge).toHaveText(5)
    })

    it('Remove all product in cart', async () => {
        // await Cart.clickAddSaucelabsOnesie()
        // await Cart.clickAddSaucelabsBikeLight()
        // await Cart.clickAddSaucelabsBoldTshirt()
        // await AddToCart.clickAddSaucelabsBackpack()
        // await AddToCart.clickAddSaucelabsTshirtRed()
        // await AddToCart.clickAddSaucelabsFleeceJacket()

        await expect(AddToCart.shoppingCartBadge).toExist()
        
        await AddToCart.clickRemoveAllProduct()
        // await AddToCart.clickRemoveFleeceJacket()

        expect(AddToCart.shoppingCartBadge).not.toExist()
    })
})