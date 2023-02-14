

describe('TestDropdown', async () => {
    it.skip('Test', async () => {

        await browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
        await browser.maximizeWindow

        const dropdown = await $('//div[@rel-title="Select Country"]//select')
        await dropdown.waitForClickable()
        await dropdown.click()

        //await dropdown.selectByIndex(9)

        const dropdownValue = await dropdown.getValue()
        console.log("1st dropdown value", dropdownValue)

        await dropdown.selectByAttribute('value', "AFG")
        console.log(await dropdown.getValue())
        await browser.pause(5000)

    })

    it.skip('dragdrop', async () => {

        await browser.url('https://www.globalsqa.com/demo-site/draganddrop/')

        await browser.maximizeWindow()
        await browser.switchToFrame(await $("(//iframe[@class='demo-frame lazyloaded'])[1]"))

        //switch to frame

        //identify source elemenet
        const src = await $('(//li[@class="ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle"])[4]')

        //identify target element
        const trg = await $("//div[@id='trash']")

        //drag and drop
        await src.dragAndDrop(trg)
        browser.pause(10000)

        //to switch the controll to parent frame
        await browser.switchToParentFrame()
        browser.pause(3000)

        //Scrolling into calendar
        const calendar = await $("//table[@id='wp-calendar']")

        browser.pause(3000)
        await calendar.scrollIntoView()
        browser.pause(3000)

    })

    it.skip('calendar', async () => {

        await browser.url("https://www.globalsqa.com/demo-site/datepicker/")
        await browser.pause(2000)
        await browser.maximizeWindow

        const dateClick = await $("//img[@class='ui-datepicker-trigger']")
        await dateClick.waitForClickable()
        await dateClick.click()


        // const datePicker = await $("//a[@class='ui-state-default ui-state-highlight ui-state-hover']")
        // await datePicker.waitForClickable()
        // await datePicker.click()
        await browser.pause(3000)

    })

    it.skip('webElement', async () => {

        await browser.url('https://cosmocode.io/automation-practice-webtable/')
        await browser.maximizeWindow()
        await browser.scroll(0, 500)
        await browser.pause(4000)

        const country = await $("//strong[text()='Andorra']")
        await browser.scroll(0, 200)
        await console.log("Country name", await country.getText())


        const box = await $("(//input[@class='hasVisited'])[4]")
        await box.waitForClickable()
        await box.click()
        await browser.pause(3000)
    })

    it.skip('AllDropdowns', async () => {

        await browser.url('https://semantic-ui.com/modules/dropdown.html')
        await browser.maximizeWindow()

        const gender = await $("//div[@class='ui selection dropdown']")
        browser.scroll(0, 300)
        gender.click()
        //browser.scroll(0,300)

        const gendermenu = await $("//div[@data-value='1']")
        await gendermenu.click()
        console.log("gender is", await gender.getText())

        browser.pause(4000)
    })
    it.skip("Countries",async()=>{
        // Countries
        await browser.url('https://semantic-ui.com/modules/dropdown.html')
        await browser.maximizeWindow()
         const cntryDD=await $("(//input[@class='search'])[1]")
        //let cntryDD = await $$("//div[@class='menu transition visible']//div[@class='item']")
        // let sizeOfCntry = await cntryDD.length
        //  console.log(await sizeOfCntry)
        await cntryDD.click()
        await cntryDD.setValue("Albania")
        const cntry=await $("//div[@class='menu transition visible']/div[@class='item selected']")
        await cntry.click()
        browser.pause(3000)
        await console.log("country is:",await cntry.getText())


    })
    it.skip('Friends',async()=>{
        //Friends
        await browser.url('https://semantic-ui.com/modules/dropdown.html')
        await browser.maximizeWindow()
        const frnds = await $("(//div[@class='ui fluid selection dropdown'])[1]")
        await frnds.click()
        browser.pause(3000)
        const frnd1 = await $("//div[@data-value='jenny']")
        await frnd1.click()
        await console.log("Frnds name: ", await frnds.getText())
    })

    it.skip('State',async()=>{
        //State
        await browser.url('https://semantic-ui.com/modules/dropdown.html')
        await browser.maximizeWindow()

        const state = await $("(//input[@class='search'])[2]")
        await state.waitForClickable()
        await state.click()
        await state.setValue("Alaska")
        const s= await $("//div[@class='menu transition visible']//div[@class='item selected']")
        await s.click()
        await browser.pause(3000)
        await console.log("State :", await s.getText())

    })
    it.skip('Skills',async()=>{
        //Skills
        await browser.url('https://semantic-ui.com/modules/dropdown.html')
        await browser.maximizeWindow()

        const skills = await $("//div[@class='ui fluid dropdown selection multiple']")
        await skills.click()
        // await skills.selectByAttribute('data-value','CSS')
        // console.log("skill is: ",skills.getText())
        const angular = await $('(//div[@class="item" and @data-value="angular"])[1]')
        await angular.click()
        await console.log(await angular.getText())
    })

        //Muliti selection
        // const multiSel = await $("//div[@class='ui fluid search dropdown selection multiple']")
        // await multiSel.waitForClickable()
        // await multiSel.click()
        // await multiSel.setValue("Alaska")
        // const select= await $("//div[@class='menu transition visible']//div[@class='item selected']")
        // await select.click()
        // await browser.pause(3000)
        // await console.log("Multiselect :", await multiSel.getText())

        it.skip('Language',async()=>{
        //Language
        await browser.url('https://semantic-ui.com/modules/dropdown.html')
        await browser.maximizeWindow()

        const lang =await $("//span[text()='Select Language']")
        await lang.click()
        await lang.setValue("Arabic")
        const langSelected=await $("//div[@class='menu transition visible']//div[@class='item selected']")
        await langSelected.click()
        //await console.log("Language:",await langSelected.getText())
    })


})