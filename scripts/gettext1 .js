 describe('hospira angular', function() {
  it('clicking objects in select report type', function() {  
     console.log('Script : Getting and Verifying the text in a page')
     browser.get(browser.baseUrl);
     //getting & verifying the summary text
     var table = browser.findElement(by.xpath("//li[@active='tabs[1].active']//a[@class='ng-binding']")).getText();
     var data = browser.findElement(by.xpath("//span[@id='header-title']")).getText();     
     //expect(data).toEqual('Alerts by Drug');
     element(by.id('srt-button-text')).click();
     element(by.id('srtmi-reports-text')).click();
     
     expect(browser.findElement(by.xpath("//s:g[@id='ac-bar-0']")).isPresent()).toBe(false);
     //expect(data1).toEqual('Alerts by Drug');
     //expect(table).toEqual('Table');
  }); 
});
  

