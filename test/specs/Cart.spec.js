import { expect, browser, $$, $ } from '@wdio/globals'
import LoginPage from '../pageObject/login.page.js'
import AddToCart from '../pageObject/addtocart.page.js'
import Cart from '../pageObject/cart.page.js'
import { isProductExist } from '../../helpers/checklistitem.js'

describe('Cart in SauceDemo', async () => {
    beforeEach('login to sauceDemo and acces Inventory.html', async () => {
        await LoginPage.OpenLogin()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await LoginPage.SetUsername('standard_user')
        await LoginPage.SetPassword('secret_sauce')
        await LoginPage.ClickLogin()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('chect 1 product in cart', async () => {
        await AddToCart.clickAddSaucelabsOnesie()
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')
        // const productExist = isProductExist('Sauce Labs Onesie', allItemName)
        // expect(productExist).toBe(true)
    })

    it('Remove product from cart', async () => {
        // await AddToCart.clickAddSaucelabsOnesie()
        // expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        await Cart.clickRemoveOnesie()

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).not.toHaveValue()
    })

    it('Add product Onesie and checkout', async () => {
        await AddToCart.clickAddSaucelabsOnesie()
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')

        await Cart.clickCheckout()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')

    })
})