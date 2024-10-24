import {browser, $, $$} from '@wdio/globals'

class OverviewCo{

    get finishItem() {return $('#finish')}
    get cancelItem() {return $('#cancel')}

    // action
    async clickFinis(){
        await this.finishItem.click()
    }
    async clickCancel(){
        await this.cancelItem.click()
    }

}

export default new OverviewCo