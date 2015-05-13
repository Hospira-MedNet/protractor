 describe('hospira angular', function() {
  it('clicking objects in select report type', function() {  
     console.log('Script : Select/Navigate to a particular page')
     browser.get(browser.baseUrl);
     //Navigating to multiple pages
     browser.findElement(by.xpath("//li[@active='tabs[1].active']//a[@class='ng-binding']")).click();
     browser.sleep(2000);
     element(by.id('srt-button-text')).click();     
     element(by.id('srtmi-aeo')).click();
     element(by.id('srt-button-text')).click();
     element(by.id('srtmi-abd')).click();
     element(by.id('srt-button-text')).click();
     element(by.id('srtmi-comsum')).click();
     element(by.id('srt-button-text')).click();
     element(by.id('srtmi-autoprogs')).click();
  });
 
});
  

