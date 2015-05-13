
require "selenium-webdriver"
require 'test/unit'
class GetText < Test::Unit::TestCase
  
   def setup
      # create selenium objects
      @browser = Selenium::WebDriver.for :firefox
   end
   
   def test_get_text
      @browser.navigate.to "http://localhost:8181/cdashang6/#/infusionsToday/smithjj" 
      #getting & verifying the text Table
      sleep(5)
      table = @browser.find_element(:xpath, "//li[@active='tabs[1].active']//a[@class='ng-binding']").text
      assert_equal(table, "Table")
   end
     
  def teardown
     @browser.quit
  end
end