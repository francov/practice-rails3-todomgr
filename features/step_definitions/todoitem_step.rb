When /^I click the action "(.*?)" on the row "(.*?)"$/ do |action_name, row_text|
   	row = page.find(:xpath, "//div[contains(@id, 'todoitemlist')]//table//tbody//tr[contains(@class, 'x-grid-row')]//div[contains(text(),'#{row_text}')]/../..")
   	action_button = row.find(:xpath, "//img[contains(@data-qtip, '#{action_name}')]")
   	action_button.click()
end