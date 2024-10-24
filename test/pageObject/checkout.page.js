import {browser, $, $$} from '@wdio/globals'

class Checkout{
    get firstnameField() {return $('#first-name')}
    get lastnameField() {return $('#last-name')}
    get zipCodeField() {return $('#postal-code')}
    get errorMsg() {return $('[data-test="error"]')}
    get cancelItemMenu() {return $('#cancel')}
    get continueItemMenu() {return $('#continue')}

    // action page
    async fillDataInformation(firstname, lastname, postalCode){
        await this.firstnameField.setValue(firstname)
        await this.lastnameField.setValue(lastname)
        await this.zipCodeField.setValue(postalCode)
    }

    async clickContinueItem(){
        await this.continueItemMenu.click()
    }

    async clickCancel() {
        await this.cancelItemMenu.click()
    }

}

export default new Checkout