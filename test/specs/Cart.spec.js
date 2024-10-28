import { expect, browser, $$, $ } from '@wdio/globals'
import LoginPage from '../pageObject/login.page.js'
import AddToCart from '../pageObject/addtocart.page.js'
import Cart from '../pageObject/cart.page.js'
import { isProductExist, isEmpty } from '../../helpers/checklistitem.js'

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
        await expect(AddToCart.shoppingCartBadge).toHaveText("1")

        await Cart.clickcartmenu()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(Cart.titlecart).toHaveText('Your Cart')

        const allItemName = await Cart.getAllItemName()
        // await expect(allItemName).toHaveValue('Sauce Labs Onesie')
        const emptyList = isEmpty(allItemName)
        const productExist = isProductExist('Sauce Labs Onesie', allItemName)
        await expect(emptyList).toBe(false)
        await expect(productExist).toBe(true)
    })

    it('Remove product from cart', async () => {
        // await AddToCart.clickAddSaucelabsOnesie()
        // expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(Cart.titlecart).toHaveText('Your Cart')

        await Cart.clickRemoveOnesie()

        const allItemName = await Cart.getAllItemName()
        const emptyList = isEmpty(allItemName)
        await expect(emptyList).toBe(true)
    })

    it('Check continue shopping menu', async () => {
        await Cart.clickcartmenu()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(Cart.titlecart).toHaveText('Your Cart')

        await Cart.clickContinueShopping()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('Add product Onesie and checkout', async () => {
        await AddToCart.clickAddSaucelabsOnesie()
        await expect(AddToCart.shoppingCartBadge).toHaveText("1")

        await Cart.clickcartmenu()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(Cart.titlecart).toHaveText('Your Cart')

        const allItemName = await Cart.getAllItemName()
        const emptyList = isEmpty(allItemName)
        const productExist = isProductExist('Sauce Labs Onesie', allItemName)
        await expect(emptyList).toBe(false)
        await expect(productExist).toBe(true)

        await Cart.clickCheckout()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')

    })
})