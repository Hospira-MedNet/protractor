require "selenium-webdriver"
require 'test/unit'
class PageNav < Test::Unit::TestCase
  
   def setup
      # create selenium objects
      @browser = Selenium::WebDriver.for :firefox
      @wait = Selenium::WebDriver::Wait.new :timeout => 10
   end
   
   def test_page_nav
      @browser.navigate.to "http://localhost:8181/cdashang6/#/infusionsToday/smithjj" 
      #Navigating to multiple pages
      @browser.find_element(:xpath, "//li[@active='tabs[1].active']//a[@class='ng-binding']").click    
      assert_equal(@browser.find_element(:xpath, "//span[@id='header-title']/span[1]").text, "Reports : Quick View")
      @browser.find_element(:id, "srt-button-text").click
      @browser.find_element(:id, "srtmi-aeo").click
      #sleep(5)
      puts @browser.inspect_element
      #puts @browser.isTextPresent("Reports : Quick View")
      @browser.find_element(:id, "srt-button-text").click
      @browser.find_element(:id, "srtmi-abd").click
      #puts "entering here"
      #puts @browser.find_element(:xpath, "//span[@id='header-title']/span[1]").text
      
      @browser.find_element(:id, "srt-button-text").click
      @browser.find_element(:id, "srtmi-comsum").click
      @browser.find_element(:id, "srt-button-text").click
      @browser.find_element(:id, "srtmi-autoprogs").click
   end
     
  def teardown
     @browser.quit
  end
end