Given /The Action is ([A-z]*)/ do |action|
   @action = action
end

Given /^The user is "(.*?)"$/ do |user|
  @user = user # express the regexp above with the code you wish you had
end
 
When /The Subject is ([A-z]*)/ do |subject|
  @subject = subject
end
 
Then /The Greeting message should be (.*)/ do |greeting|
  assert(greeting == "\"#{@action} #{@subject}! #{@user}\"")
end