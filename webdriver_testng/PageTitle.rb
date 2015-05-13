
require "selenium-webdriver"
require 'test/unit'
class PageTitle < Test::Unit::TestCase
  
   def setup
      # create selenium objects
      @browser = Selenium::WebDriver.for :firefox
   end
   
   def test_page_title
      @browser.navigate.to "http://localhost:8181/cdashang6/#/infusionsToday/smithjj" 
      #Verifying the page title      
      sleep(3)
      title = @browser.get_title
      assert_equal(title, "Table")
   end
     
  def teardown
     @browser.quit
  end
end