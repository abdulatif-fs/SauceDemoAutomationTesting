import {browser, $} from '@wdio/globals'

class LoginPage{

    //element locator
    get username() {return $('#user-name')}
    get password() {return $('#password')}
    get LoginButton() {return $('#login-button')}
    get ErrorMessage() {return $('h3[data-test="error"]')}
    

    // action selector
    async OpenLogin(){
        await browser.url('https://www.saucedemo.com/')
    }

    async SetUsername(text){
        await this.username.setValue(text)
    }
    async SetPassword(text){
        await this.password.setValue(text)
    }
    async ClickLogin(){
        await this.LoginButton.click()
    }

}

export default new LoginPage