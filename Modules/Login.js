const {expect} = require("@playwright/test")
const { TIMEOUT } = require("dns")
class EcomerceLogin{

    constructor(page){
        this.page = page
        this.emailAdd= "//input[@id='input-email']"
        this.passwordAdd = "//input[@id='input-password']"
        this.LoginBTN = "//button[@class='btn btn-primary btn-lg hidden-xs']"
        this.verify = "//h3[normalize-space()='Setup PIN for your account']"
    }
    async LogIN(){
        await this.page.locator(this.emailAdd).fill("aansagill572@gmail.com")
        await this.page.locator(this.passwordAdd).fill("Admin1234@")
        await this.page.locator(this.LoginBTN).click()
        await expect(this.page.locator(this.verify)).toBeVisible()
    }
}

    module.exports = EcomerceLogin; 
    
