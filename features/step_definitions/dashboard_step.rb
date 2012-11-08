Given /^the following todo lists:$/ do |todolists|
	@lists = todolists.hashes
  	TodoList.create!(todolists.hashes)
end

When /^I visit the dashboard page$/ do
  	visit '/'
  	sleep(2)
end

Then /^I should see a panel on the left named "(.*?)"$/ do |panelname|
	page.has_content?(panelname)
end

Then /^that panel should have "(.*?)" items$/ do |num|
  	assert(@lists.length == num.to_i)
end
