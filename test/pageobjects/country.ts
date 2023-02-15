class country{

    public async countryName(cntry:string) {
        const county = await $("//strong[text()='" + cntry + "']")
        return  county.getText()
        //India
        
    }

    public async tickBox(cntry:string){
        const box = await $("//strong[text()='" + cntry + "']/ancestor::tr//input")
        await box.waitForClickable()
        await box.click()
        await browser.pause(3000)
    }
   
}
export default new country()