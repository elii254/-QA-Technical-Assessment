
describe('Authentic test', ()=> {

    it('should validate page title', async()=> {
        await browser.url("https://the-internet.herokuapp.com/basic_auth");
         

         


        // a function to test basic auth in https://the-internet.herokuapp.com/basic_auth
         function testBasicAuth(driver) {
          const flash = $("#flash")
        
   
        driver.findElement(By.id("username")).sendKeys("admin");
        driver.findElement(By.id("password")).sendKeys("admin");
     driver.findElement(By.css("button")).click();
   driver.wait(until.titleIs("Basic Auth"), 100000);

   await expect(flash).toHaveTextContaining('Congratulations! You must have the proper credentials')
     driver.quit();
 }


        })


     
    })
    
  
  