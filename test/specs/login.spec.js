import { expect, browser, $$, $ } from '@wdio/globals'
import LoginPage from '../pageObject/login.page.js'

describe('Login SauceDemo Web', () => {
    before('open saucedemo web', async () => {
        await LoginPage.OpenLogin()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })

    it.skip('acces "inventory.html" without login', async () => {
        await browser.url('https://www.saucedemo.com/inventory.html')

        await expect(LoginPage.ErrorMessage).toHaveText(
            expect.stringContaining("You can only access '/inventory.html' when you are logged in.")
        )
    })

    it('login with no Password and no Username', async () => {
        await LoginPage.SetUsername('')
        await LoginPage.SetPassword('')
        await LoginPage.ClickLogin()

        await expect(LoginPage.ErrorMessage).toHaveText(
            expect.stringContaining('Username is required')
        )
    })

    it('login with no password', async () => {
        await LoginPage.SetUsername('standard_user')
        await LoginPage.SetPassword('')
        await LoginPage.ClickLogin()

        await expect(LoginPage.ErrorMessage).toHaveText(
            expect.stringContaining('Password is required')
        )
    })

    it('login with no Username', async () => {
        await LoginPage.OpenLogin()
        await LoginPage.SetUsername('')
        await LoginPage.SetPassword('secrect_sauce')
        await LoginPage.ClickLogin()

        await expect(LoginPage.ErrorMessage).toHaveText(
            expect.stringContaining('Username is required')
        )
        await browser.waitUntil( () => {
            return LoginPage.ErrorMessage.isDisplayed()
        },
        {
            timeout: 2000,
            timeoutMsg: 'Element could not found'
        })
    })

    it('login with wrong password', async () =>{
        await LoginPage.SetUsername('standard_user')
        await LoginPage.SetPassword('nosecret_sauce')
        await LoginPage.ClickLogin()

        await expect(LoginPage.ErrorMessage).toHaveText(
            expect.stringContaining('Username and password do not match')
        )
    })

    it('login with wrong Username', async () =>{
        await LoginPage.SetUsername('nostandard_user')
        await LoginPage.SetPassword('secret_sauce')
        await LoginPage.ClickLogin()

        await expect(LoginPage.ErrorMessage).toHaveText(
            expect.stringContaining('Username and password do not match')
        )
    })    

    it('should login with valid credentials', async () => {
        await LoginPage.SetUsername('standard_user')
        await LoginPage.SetPassword('secret_sauce')
        await LoginPage.ClickLogin()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    })
})

