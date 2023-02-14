//import {moment} from "moment"
import * as moment from 'moment';
import datePicker from "../pageobjects/datePicker.js"

describe('Calendar',async()=>{
    it.skip('Currentdate',async()=>{

        await browser.url('https://demo.automationtesting.in/Datepicker.html')
        await browser.maximizeWindow()

        const dateicon=await $("//input[@type='text']")
        await dateicon.click()

        const currentDate=await $('//td//a[@class="ui-state-default ui-state-highlight ui-state-hover"]')
        console.log("Today's Date",await  currentDate.getText())
        await currentDate.click()

        let date:Date =new Date()
        console.log("Date = ",await  date)
        


        await browser.pause(2000)



    })
    it.skip('Next Day',async()=>{

    //     await browser.url('https://demo.automationtesting.in/Datepicker.html')
    //     await browser.maximizeWindow()

    //     const dateicon=await $("//input[@type='text']")
    //     await dateicon.click()
        
    //    await browser.pause(4000)
        let date:Date =await new Date()
        console.log(date)

        let today=new Date()
        let dd=today.getDate()+1
        let mm=today.getMonth()+1
        let yyyy=today.getFullYear()

        console.log("Next day:",await dd,"/",mm,"/",yyyy)

        let tomorrow= new Date()
        await tomorrow.setDate(tomorrow.getDate()+1)
        console.log("Tomorrow:",await tomorrow)




    })
    it.skip('Previos day',async()=>{
        let today=new Date()
        console.log(today)
        let dd=today.getDate()-1
        let mm=today.getMonth()+1
        let yyyy=today.getFullYear()

        console.log("Previous day:",dd,"/",mm,"/",yyyy)
    })

    it.skip('Dynamic',async()=>{
        await browser.url('https://demo.automationtesting.in/Datepicker.html')
        await browser.maximizeWindow()

        const dateicon=await $("//input[@type='text']")
        await dateicon.click()

        let today=new Date()
        let dd=today.getDate()
        let currentDate=await datePicker.dynamicXPath(dd)
    //     const currentDate=await $("//tr//a[contains(text(),'30')]") 
    //    await  currentDate.click()
        console.log("Todays date: ",await currentDate)
    
        

        
        
    })

    it('Calendar',async()=>{


        await browser.url('https://demo.automationtesting.in/Datepicker.html')
        await browser.maximizeWindow()

        const dateicon=await $("//input[@type='text']")
        await dateicon.click()


        const mmYY=await $("//div[@class='ui-datepicker-title']")
        const prev=await $("//a[@title='Prev']")
        const next=await $("//a[@title='Next']")
    
        let dateToSelect="March 2022"

        console.log('Moment=' + moment().format('LLLL'));
       // const thisMonth=moment(dateToSelect,"MMMM YYYY").isBefore()
       // console.log(thisMonth)

        while(await mmYY.getText()!=dateToSelect){
            await prev.click()
            

        }

    })
})
let cntry = 'Andorra'
const country = await $("//strong[text()='" + cntry + "']")
await browser.scroll(0, 200)
await console.log("Country name", await country.getText())


// const box = await $("//strong[text()='" + cntry + "']/../..//input")
// await box.waitForClickable()
// await box.click()
// await browser.pause(3000)
