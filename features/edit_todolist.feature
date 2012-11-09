Feature: Editing of a todo list
 	Background:
 		Given the following todo list:
			| title 		 |
			| Shopping list  |
		And I double clicked on the row "Shopping list" for the row editing

	Scenario: Entering an emty value
		When I enter the value
			"""
			empty
			"""
		And I click the "Save" button
		Then I should see an error box
		And The error box contains Title "can't be blank"

	Scenario: Entering value too long
		When I enter the value
			"""
			This is a long text value for testing the field 
			too long error message alerting the user user user 
			user user user user user user 
			"""
		And I click the "Save" button
		Then I should see an error box
		And The error box contains Title "must be up to 100 chars"

	Scenario: Updating the value
		When I enter the value
			"""
			Shopping list for tomorrow 
			"""
		And I click the "Save" button
		Then The row in the left panel should change to "Shopping list for tomorrow"