 describe('hospira angular', function() {
  it('Clicking on button', function() {  
     console.log('Script : Clicking on a Button')     
     browser.get(browser.baseUrl);
     //Click on Open dialog     
     browser.findElement(by.xpath("//li[@ng-click='handleOpen()']")).click();
     //browser.wait(browser.findElement(by.xpath("//button[@id='open-dialog-cancel-button']")));          
     browser.wait(browser.findElement(by.xpath("//button[@ng-click='cancel()']")));
     //Click on cancel button in Open dialog     
     browser.sleep(2000);
     //browser.findElement(by.xpath("//button[@id='open-dialog-cancel-button']")).click();        
     browser.findElement(by.xpath("//button[@ng-click='cancel()']")).click();     
     //Expand/Collapse of Edit Report
     browser.wait(browser.findElement(by.xpath("//button[@id='edit-report-button']")));     
     browser.findElement(by.xpath("//button[@id='edit-report-button']"));     
     browser.findElement(by.xpath("//button[@id='edit-report-button']"));     
  });
});
  

