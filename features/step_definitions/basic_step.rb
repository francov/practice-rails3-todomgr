#
# Common steps
#
Given /^the following todo list[s]?:$/ do |todolists|
  	TodoList.create!(todolists.hashes)
end

Given /^the following todo item[s]?:$/ do |table|
	table.hashes.each do |row|
		TodoItem.create!({	:description => row['description'],
							:status => row['status'],
							:todo_list_id => TodoList.find_by_title(row['list']).id
						})
	end
end

When /^I enter the following value in the "(.*?)" form field$/ do |field, value|
	(value == "empty") ? fill_in(field, :with => '') : fill_in(field, :with => value)
end

When /^I click the "(.*?)" button$/ do |label|
	button = page.find(:xpath,"//button//*[contains(text(),'#{label}')]/..")
	click_button(button.text)
end

Then /^The "(.*?)" panel should contains "([0-9]+)" rows$/ do |panel_title, num_items|
  	case panel_title
	when "Todos"
		assert(page.all(:xpath, "//div[contains(@id, 'todoitemlist')]//table//tbody//tr[contains(@class, 'x-grid-row')]").length == num_items.to_i)
	when "All lists"
		pending
	else
		pending
	end
end

When /^I double click on the row "(.*?)"$/ do |locator|
	visit '/'
  	element = page.find(:xpath,"//td//div[contains(text(),'#{locator}')]")
  	page.driver.browser.mouse.double_click(element.native)
end

When /^I click on the row "(.*?)"$/ do |locator|
	visit('/')
	page.find(:xpath,"//td//div[contains(text(),'#{locator}')]").click
end

Then /^I should see a message box titled "(.*?)"$/ do |title|
	box = page.find(:xpath, "//div[contains(@class, 'x-window x-message-box')]//span[contains(text(), '#{title}')]")
	assert(box.visible?)
end

Then /^The message box should contains text "(.*?)"$/ do |msg|
	assert(page.has_xpath?("//div[contains(@class, 'x-window x-message-box')]//div[contains(text(), \"#{msg}\")]"))		
end