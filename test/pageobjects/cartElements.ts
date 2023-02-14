class cartElements{


    public get CartElements(){
        return $$("//button[text()='Add to cart']")
    }

    public async addToCartElements(){

        let sizeOfCartElements=await this.CartElements.length
        console.log(sizeOfCartElements)

        await browser.waitUntil(async()=> await this.CartElements.length>0,{timeout: 8000,timeoutMsg: "Elements should be more than 0"})

       for (let index = 0; index < sizeOfCartElements; index++) {
        const element = await this.CartElements[index];
        await browser.pause(300)
        await element.waitForClickable() //to ensure the element is clickable
        await element.click()
        
       }
    }

    public async sizeOfCartElmnts() {
        let sizeOfCartElements=await this.CartElements.length
        return sizeOfCartElements

    }
}
export default new cartElements()