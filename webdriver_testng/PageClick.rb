require "selenium-webdriver"
require 'test/unit'
class PageClick < Test::Unit::TestCase
  
   def setup
      # create selenium objects
      @browser = Selenium::WebDriver.for :firefox
      @wait = Selenium::WebDriver::Wait.new :timeout => 10
   end
   
   def test_click
      @browser.navigate.to "http://localhost:8181/cdashang6/#/infusionsToday/smithjj" 
      @browser.find_element(:xpath, "//li[@ng-click='handleOpen()']").click
      #Click on cancel button in Open dialog     
      @browser.find_element(:xpath, "//button[@ng-click='cancel()']").click
      #Expand/Collapse of Edit Report 
      @browser.find_element(:xpath, "//button[@id='edit-report-button']").click    
      @browser.find_element(:xpath, "//button[@id='edit-report-button']").click    
   end
     
  def teardown
     @browser.quit
  end
end