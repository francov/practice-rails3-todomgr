Feature: Editing of a todo list
 	Background:
 		Given the following todo lists:
			| title 		 |
			| Shopping list  |
		And I double clicked on the row "Shopping list" for the row editing

	Scenario: Entering an emty value
		When I enter the following value in the "Title" form field
			"""
			empty
			"""
		And I click the "Save" button
		Then I should see a message box titled "An Error has occurred"
		And The message box should contains text "title can't be blank"

	Scenario: Entering value too long
		When I enter the following value in the "Title" form field
			"""
			This is a long text value for testing the field 
			too long error message alerting the user user user 
			user user user user user user 
			"""
		And I click the "Save" button
		Then I should see a message box titled "An Error has occurred"
		And The message box should contains text "title must be up to 100 chars"

	Scenario: Updating the value
		When I enter the following value in the "Title" form field
			"""
			Shopping list for tomorrow 
			"""
		And I click the "Save" button
		Then The row in the left panel should change to "Shopping list for tomorrow"