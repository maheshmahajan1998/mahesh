class sauceDemoProduct{

    public get imgLogo(){
        return $('//div[@class="app_logo"]')
    }

    public async waitUntilLogoDisplay(){
        await this.imgLogo.waitForDisplayed()
    }


}
export default new sauceDemoProduct()