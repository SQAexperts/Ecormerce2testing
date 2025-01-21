const {expect} = require("@playwright/test")
const { TIMEOUT } = require("dns")
class VerificationEcomerce{
    constructor(page){
        this.page=page
        this.Pin ="#input-pin"
        this.SubmitBTN = "//button[normalize-space()='Submit']"
 }
 async verification () {
    await this.page.locator(this.Pin).fill("0346", { delay: 100 })
    await this.page.waitForTimeout(1000)
    await this.page.locator(this.SubmitBTN).click()
    await this.page.waitForTimeout(3000)
    
 }
}

module.exports = VerificationEcomerce;