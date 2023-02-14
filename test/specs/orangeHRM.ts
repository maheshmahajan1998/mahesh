describe('orangeHRM',async()=>{
    it('calendar',async()=>{
        
        browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        browser.maximizeWindow()

        const userName=await $("//input[@name='username']")
        const password=await $("//input[@type='password']")
        const submit= await $("//button[@type='submit']")

        await userName.setValue("Admin")
        await password.setValue("admin123")
        await submit.click()

        const rcrtmnt =await $("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[5]")
        rcrtmnt.click()
        
        await browser.pause(3000)


    })
})