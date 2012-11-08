Feature: Dashboard page
 
	Scenario: Show all todo lists
		Given the following todo lists:
			| title 		 |
			| Shopping list |
			| TODO list 	 |
			| Other List 	 |
		When I visit the dashboard page
		Then I should see a panel on the left named "All lists"
		And that panel should have "3" items

	# Scenario: Edit a todo list
	# 	Given the following todo list:
	# 		| title 		 |
	# 		| Shopping list |
	# 	When I click on the row "Shopping list"
	# 	Then I should see a panel on the left named "All lists"
	# 	And that panel should have "3" items