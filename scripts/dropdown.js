  describe('hospira angular', function() {
  it('dropdown selection', function() {  
     console.log('Script : To Select Value In Dropdown');  
     browser.get(browser.baseUrl);
     browser.wait(browser.findElement(by.xpath("//li[@ng-click='handleOpen()']")));
     browser.findElement(by.xpath("//li[@ng-click='handleOpen()']")).click();        
     //Selecting folder 2 value from  Select Folder         
        element(by.cssContainingText('option', 'Folder 3')).click();     
     browser.sleep(2000);     
  });
});