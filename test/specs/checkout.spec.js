import { expect, browser, $$, $ } from '@wdio/globals'
import LoginPage from '../pageObject/login.page.js'
import AddToCart from '../pageObject/addtocart.page.js'
import Cart from '../pageObject/cart.page.js'
import Checkout from '../pageObject/checkout.page.js'
import OverviewCo from '../pageObject/checkoutoeverview.page.js'

describe('Checkout in SauceDemo', async () => {
    beforeEach('login to sauceDemo and add onesie to cart', async () => {
        await LoginPage.OpenLogin()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await LoginPage.SetUsername('standard_user')
        await LoginPage.SetPassword('secret_sauce')
        await LoginPage.ClickLogin()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        
    })

    it('click cancel checkout', async () => {
        await AddToCart.clickAddSaucelabsOnesie()
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')

        await Cart.clickCheckout()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')

        await Checkout.clickCancel()
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(AddToCart.shoppingCartBadge).toHaveText(1)
    })

    it('no fill all field', async () => {
        // await AddToCart.clickAddSaucelabsOnesie()
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')

        await Cart.clickCheckout()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await Checkout.fillDataInformation('', '', '')
        await Checkout.clickContinueItem()

        await expect(Checkout.errorMsg).toHaveText(
            expect.stringContaining("First Name is required")
        )
    })

    it('no fill firstname', async () => {
        // await AddToCart.clickAddSaucelabsOnesie()
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')

        await Cart.clickCheckout()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await Checkout.fillDataInformation('', 'fajar', '12345')
        await Checkout.clickContinueItem()

        await expect(Checkout.errorMsg).toHaveText(
            expect.stringContaining("First Name is required")
        )
    })

    it('no fill lasttname', async () => {
        // await AddToCart.clickAddSaucelabsOnesie()
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')

        await Cart.clickCheckout()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await Checkout.fillDataInformation('abdulatif', '', '12345')
        await Checkout.clickContinueItem()

        await expect(Checkout.errorMsg).toHaveText(
            expect.stringContaining("Last Name is required")
        )
    })

    it('no fill postal code', async () => {
        // await AddToCart.clickAddSaucelabsOnesie()
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')

        await Cart.clickCheckout()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await Checkout.fillDataInformation('abdulatif', 'fajar', '')
        await Checkout.clickContinueItem()

        await expect(Checkout.errorMsg).toHaveText(
            expect.stringContaining("Postal Code is required")
        )
    })

    it('fill all data and continue', async () => {
        // await AddToCart.clickAddSaucelabsOnesie()
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')

        await Cart.clickCheckout()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await Checkout.fillDataInformation('abdulatif', 'fajar', '12345')
        await Checkout.clickContinueItem()

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
    })

    it('cancel checkout overview', async () => {
        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')

        await Cart.clickCheckout()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await Checkout.fillDataInformation('abdulatif', 'fajar', '12345')
        await Checkout.clickContinueItem()

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')

        await OverviewCo.clickCancel()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        expect(AddToCart.shoppingCartBadge).toHaveText(1)

    })

    it('finish checkout overview', async () => {
        await Cart.clickcartmenu()

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(Cart.titlecart).toHaveText('Yout Cart')

        const allItemName = await Cart.getAllItemName()
        expect(allItemName).toHaveValue('Sauce Labs Onesie')

        await Cart.clickCheckout()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await Checkout.fillDataInformation('abdulatif', 'fajar', '12345')
        await Checkout.clickContinueItem()

        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')

        await OverviewCo.clickFinis()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        expect(AddToCart.shoppingCartBadge).not.toExist()
    })

})