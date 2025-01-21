const {expect} = require("@playwright/test")
const { TIMEOUT } = require("dns")


class EcomerceSignUp{    
    constructor(page){
        this.page= page
        this.heading = "div[class='container'] h1"
        this.Click= ".btn.btn-black.navbar-btn"
        this.username= "#input-username"
        this.firstName= "#input-firstname"
        this.LastName= "#input-lastname"
        this.email= "#input-email"
        this.Country= "#input-country"
        this.option = "//option[@value='162']"
        this.password = "#input-password"
        this.buttonRegister = "//button[@class='btn btn-primary btn-lg btn-block visible-xs-block']"
        this.heading2 = "//h3[contains(text(),'Welcome to OpenCart')]"
        this.ContinueBTN= "//a[normalize-space()='Continue']"
        this.VerifyHeading= "//h1[normalize-space()='Log in to your OpenCart account']" 
            }
            async Checkheading1() {
             await expect(this.page.locator(this.heading)).toBeVisible()
            }
            async SignUpprocess() {
                await this.page.waitForTimeout(5000)
                await this.page.locator(this.Click).click()
                await this.page.pause(); // Pauses execution so you can inspect manually

                await this.page.locator(this.username).fill("TestingAutomation", { delay: 100 })
                await this.page.locator(this.firstName).fill("Abdur", { delay: 100 })
                await this.page.locator(this.LastName).fill("Virk", { delay: 100 })
                await this.page.locator(this.email).fill("aansagill572@gmail.com", { delay: 100 })
                await this.page.locator(this.Country).click()
                await this.page.waitForTimeout(1000)
                await this.page.locator(this.option).click()
                await this.page.locator(this.password).fill("Admin1234@",  { delay: 100 } )
                await this.page.waitForTimeout(1000)
                await this.page.locator(this.buttonRegister).click();
           }
           async Checkheading2(){
            await expect(this.page.locator(this.heading2)).toBeVisible()
            await this.page.locator(this.ContinueBTN).click();
            await expect(this.page.locator(this.VerifyHeading)).toBeVisible
            await this.page.waitForTimeout(3000)

           }
    }

    module.exports = EcomerceSignUp; 

    

