Given /^I double clicked on the row "(.*?)" for the row editing$/ do |locator|
 	visit '/'
  	element = page.find(:xpath,"//td//div[contains(text(),'#{locator}')]")
  	page.driver.browser.mouse.double_click(element.native)
end

When /^I enter the value$/ do |value|
	(value == "empty") ? fill_in('Title', :with => '') : fill_in('Title', :with => value)
end

When /^I click the "(.*?)" button$/ do |label|
	button = page.find(:xpath,"//button//*[contains(text(),'#{label}')]/..")
	click_button(button.text)
end

Then /^I should see an error box$/ do
	box = page.find(:xpath, "//span[contains(@id, 'messagebox') and contains(text(), 'An Error has occurred')]")
	assert(box.visible?)
	sleep(1)
end

Then /^The error box contains Title "(.*?)"$/ do |msg|
	assert(page.has_content?(msg))  		
end

Then /^The row in the left panel should change to "(.*?)"$/ do |text|
  element = page.find(:xpath,"//td//div[contains(text(),'#{text}')]")
  element.has_content?(text)
end
