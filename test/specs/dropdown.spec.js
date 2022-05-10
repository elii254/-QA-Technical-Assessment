
describe('check dropdown', ()=> {

    it('should validate page title', async()=> {
        await browser.url("https://the-internet.herokuapp.com/dropdown");
         expect(await browser.getTitle()).toEqual('The Internet')

         const drop = $("#dropdown")
         
        //  const flash = $("#flash")

        //await browser.pause(2000);
        //  await (await user).setValue('tomsmith')
        //  await (await password).setValue('SuperSecretPassword!')
         await (await drop).isSelected()
     //await browser.pause(2000);

        //  await expect(flash).toHaveTextContaining('You logged into a secure area!')

    })


     
})