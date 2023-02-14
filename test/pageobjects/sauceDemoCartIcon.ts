import cartElements from "./cartElements.js"
class sauceDemoCartIcon{

public get cartLink(){

    return $(".shopping_cart_link")
}

public async cartIcon(){
    const addToCartText=await this.cartLink.getText()
       console.log("add to cart text: ",addToCartText)
       console.log("toString :",cartElements.sizeOfCartElmnts)
       await browser.waitUntil(async()=> await addToCartText=='cartElements.sizeOfCartElmnts()',{timeout: 8000,timeoutMsg: "Element length not equal to 6"})
       await expect(addToCartText).toEqual(cartElements.sizeOfCartElmnts)
}
}
export default new sauceDemoCartIcon()