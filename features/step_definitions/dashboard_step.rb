# 
# Scenario: Show all todo lists
# 
When /^I visit the dashboard page$/ do
  	visit '/'
end

Then /^I should see a panel on the left named "(.*?)"$/ do |panelname|
	assert(page.has_content?(panelname))
end

Then /^that panel should have "([0-9]*?)" items$/ do |num|
	visit '/'
	sleep(1)
	elements = page.all(:xpath, "//div[contains(@id, 'gridview')]//table//tbody//tr//td//div")
  	assert(elements.length == num.to_i)
end

Then /^I should see a panel on top named "(.*?)"$/ do |panelname|
  	assert(page.has_content?(panelname))
end

Then /^that panel should contain a form field and an "(.*?)" button$/ do |locator|
	assert(page.has_xpath?("//button//*[contains(text(),'#{locator}')]"))
end

Then /^I should see a panel on bottom named "(.*?)"$/ do |panelname|
  	assert(page.has_content?(panelname))
end

Then /^that panel should have an empty grid$/ do
  	assert(page.all(:xpath, "//div[contains(@id, 'todoitemlist')]//table//tbody//tr[contains(@class, 'x-grid-row')]").length == 0)
end

#
# Scenario: Edit a todo list
# 
Then /^I should see a form dialog titled "(.*?)"$/ do |dialog_name|
	assert(page.has_xpath?("//span[contains(text(),'#{dialog_name}') and contains(@id, 'todolistedit')]") )
end

Then /^the dialog should contains a "(.*?)" field prefilled with "(.*?)"$/ do |label, value|
	input_el = page.find_field(label)
	assert(input_el.value == value)
end

#
# Scenario: Show todo items for a given todo listGiven
# 
Then /^In the right panel I should see "([0-9]*?)" todo items$/ do |num|
	sleep(1)
  	assert(page.all(:xpath, "//div[contains(@id, 'todoitemlist')]//table//tbody//tr[contains(@class, 'x-grid-row')]").length == num.to_i)
end
