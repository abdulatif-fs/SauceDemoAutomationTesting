import { expect, browser, $$, $ } from '@wdio/globals'
import Inventory from '../pageObject/inventory.page.js'
import LoginPage from '../pageObject/login.page.js'
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
})
