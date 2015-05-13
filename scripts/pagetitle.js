
describe('hospira angular', function() {
  it('Verify Page Title Exists', function() {
    console.log('Script : Verifying the page title exist')  
    browser.get(browser.baseUrl);
    //Verifying the page title exist
    expect(browser.getTitle()).toEqual('Clinical Dashboard Demo - AngularJS Proof-of-Concept');
  }); 
});

