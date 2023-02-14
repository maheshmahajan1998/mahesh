import sauceDemoLogin from "../pageobjects/sauceDemoLogin.js";
import sauceDemoProduct from "../pageobjects/sauceDemoProduct.js";
import cartElements from "../pageobjects/cartElements.js";
import sauceDemoCartIcon from "../pageobjects/sauceDemoCartIcon.js";

describe("Login application",()=> {

    it("User Login",async()=>{

       await browser.url("https://www.saucedemo.com/");
       await browser.maximizeWindow()
      
       //login
       await sauceDemoLogin.login('standard_user','secret_sauce')


       //Display title
       await sauceDemoProduct.waitUntilLogoDisplay()
       await expect(sauceDemoProduct.imgLogo).toBeDisplayed()

       //catching multiple xpath  
       await cartElements.addToCartElements()

       //Add to cart icon
       await sauceDemoCartIcon.cartIcon()


    })
})
