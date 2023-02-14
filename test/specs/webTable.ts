import country from "../pageobjects/country.js"

describe('WebElement', async () => {

    it.skip('singleWebElement', async () => {

        await browser.url('https://cosmocode.io/automation-practice-webtable/')
        await browser.maximizeWindow()
        await browser.scroll(0, 500)
        await browser.pause(4000)

        let cntry = 'India'
        const country = await $("//strong[text()='" + cntry + "']")
        await browser.scroll(0, 200)
        console.log("Country name", await country.getText())


        // const box = await $("(//input[@class='hasVisited'])[4]")
        // await box.waitForClickable()
        // await box.click()
        // await browser.pause(3000)

        //const box = await $("//strong[text()='" + cntry + "']/../..//input")
        const box = await $("//strong[text()='" + cntry + "']/ancestor::tr//input")
        await box.waitForClickable()
        await box.click()
        await browser.pause(3000)


    })

    it('multiselect', async () => {

        await browser.url('https://cosmocode.io/automation-practice-webtable/')
        await browser.maximizeWindow()
        await browser.scroll(0, 500)
        await browser.pause(4000)

        const nation = await $$("//tbody//td[strong]")
        await browser.scroll(0, 200)

        for (let i = 1; i <= nation.length; i++) {
             console.log("Countries are: ",await nation[i].getText())
             if(await nation[i].getText()=='India'){
                //await country.tickBox(nation[i].getText())
             }
        }
    })

    it.skip('POM',async()=>{
        await browser.url('https://cosmocode.io/automation-practice-webtable/')
        await browser.maximizeWindow()
        await browser.scroll(0, 500)
        await browser.pause(4000)//wait

        let cntry='India'

        let nameOfTheCountry=await  country.countryName(cntry)
        //await expect(nameOfTheCountry).toBe(cntry)
        console.log("country name is", await nameOfTheCountry)

        await country.tickBox(cntry)
        await expect(nameOfTheCountry).toBeChecked()

        //validate the  country name is checked or not

        

    })

})