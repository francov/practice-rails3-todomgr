Given /^I double clicked on the row "(.*?)" for the row editing$/ do |locator|
  step %{I double click on the row "#{locator}"}
end

Then /^The row in the left panel should change to "(.*?)"$/ do |text|
  element = page.find(:xpath,"//td//div[contains(text(),'#{text}')]")
  element.has_content?(text)
end
