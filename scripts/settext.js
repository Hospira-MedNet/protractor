 describe('hospira angular', function() {
  it('Typing a value', function() {  
     console.log('Script : Setting a Text');     
     browser.get(browser.baseUrl);
     //Click on Open dialog     
     browser.findElement(by.xpath("//li[@ng-click='handleSave()']")).click();     
     browser.wait(browser.findElement(by.xpath("//button[@ng-click='cancel()']")));
     //Setting text in Save dialog     
     browser.findElement(by.xpath("//input[@id='save-report-name']")).sendKeys("MN7.0");
     browser.findElement(by.xpath("//button[@ng-click='ok()']")).click();     
  });
});
  

