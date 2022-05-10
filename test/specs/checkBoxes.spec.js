
describe('check box test', ()=> {

    it('should check the second checkbox', async()=> {
        await browser.url("https://the-internet.herokuapp.com/checkboxes");
         expect(await browser.getTitle()).toEqual('The Internet')

         const check = $("#checkboxes")
         var webdriver = require("selenium-webdriver");
        var By = webdriver.By;
        var until = webdriver.until;
       
       //await check.click.then(()=>{
          // console.log("dfgh");

          
         //Locating and Clicking a CheckBox By using ID
          driver.findElement(By.id("checkboxes"));
          await (await check).click()
        

          
       });
      
       
    })


     
//})