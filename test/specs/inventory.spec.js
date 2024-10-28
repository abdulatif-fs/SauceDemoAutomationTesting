import { expect, browser, $$, $ } from '@wdio/globals'
import Inventory from '../pageObject/inventory.page.js'
import LoginPage from '../pageObject/login.page.js'
import AddToCart from '../pageObject/addtocart.page.js'
import { isDesending, isAscending } from '../../helpers/checksorting.js'

describe('Filter SauceDemo Web Inventory product', () => {
    before('Login to SauceDemo and acces inventory.html', async () => {
        await LoginPage.OpenLogin()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')

        await LoginPage.SetUsername('standard_user')
        await LoginPage.SetPassword('secret_sauce')
        await LoginPage.ClickLogin()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('Filter product name Descending', async () => {
        await Inventory.clickFilterDescending()

        // get all product
        const allProductName = await Inventory.getAllProductName()
        const isProductSortedDescending = isDesending(allProductName)

        // asertion
        await expect(isProductSortedDescending).toBe(true)

    })

    it('Filter product name Ascending', async () => {
        await Inventory.clickFilterAscending()

        // get all product
        const allProductName = await Inventory.getAllProductName()
        const isProductSortedAscending = isAscending(allProductName)
        
        // asertion
        await expect(isProductSortedAscending).toBe(true)

    })

    it('Filter product price Low Hight', async () => {
        await Inventory.clickFilterLohi()

        // get all product price
        const allProductPrice = await Inventory.getAllProductPrice()
        console.log('before desending', allProductPrice)
        const isProductSortedAscending = isAscending(allProductPrice)
        
        // asertion
        await expect(isProductSortedAscending).toBe(true)

    })

    it('Filter product price Hight Low', async () => {
        await Inventory.clickFilterHilo()

        // get all product price
        const allProductPrice = await Inventory.getAllProductPrice()
        const isProductSortedDescending = isDesending(allProductPrice)
        
        // asertion
        await expect(isProductSortedDescending).toBe(true)
    })

    it('show burger menu list menu', async () => {
        await expect(Inventory.closeMenu).not.toBeDisplayed()
        await Inventory.clickBurgerMenu()
        await expect(Inventory.closeMenu).toBeDisplayed()
    })


    it('click menu all list item', async () => {
        // await expect(Inventory.closeMenu).not.toBeDisplayed()
        // await Inventory.clickBurgerMenu()
        await expect(Inventory.closeMenu).toBeDisplayed()

        await Inventory.clickAllListItem()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it.skip('click menu reset', async () => {
        await AddToCart.clickAddSaucelabsBackpack()
        await expect(AddToCart.shoppingCartBadge).toExist()

        // await expect(Inventory.closeMenu).not.toBeDisplayed()
        // await Inventory.clickBurgerMenu()
        await expect(Inventory.closeMenu).toBeDisplayed()

        await Inventory.clickResetMenu()
        await expect(AddToCart.shoppingCartBadge).not.toExist()
        await expect(AddToCart.removeBackpack).not.toExist()
    })

    it('click menu About', async () => {
        // await expect(Inventory.closeMenu).not.toBeDisplayed()
        // await Inventory.clickBurgerMenu()
        await expect(Inventory.closeMenu).toBeDisplayed()

        await Inventory.clickAboutMenu()
        await expect(browser).toHaveUrl('https://saucelabs.com/')
    })

    it('click menu Logout', async () => {
        await LoginPage.OpenLogin()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')

        await LoginPage.SetUsername('standard_user')
        await LoginPage.SetPassword('secret_sauce')
        await LoginPage.ClickLogin()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(Inventory.closeMenu).not.toBeDisplayed()
        await Inventory.clickBurgerMenu()
        await expect(Inventory.closeMenu).toBeDisplayed()

        await Inventory.clickLogoutMenu()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })
})
