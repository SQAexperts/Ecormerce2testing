const {expect} = require("@playwright/test")
const { TIMEOUT } = require("dns")
class VerificationEcomerce{
    constructor(page){
        this.page=page
        this.Pin ="#input-pin"
        this.SubmitBTN = "//button[normalize-space()='Submit']"
 }
 async verification () {
    await this.page.locator(this.Pin).fill("0346")
    await this.page.locator(this.SubmitBTN).click()    
 }
}

module.exports = VerificationEcomerce;
