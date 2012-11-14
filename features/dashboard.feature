Feature: Dashboard page
 	Background: 
 		Given the following todo lists:
			| title 		 |
			| Shopping list  |
			| TODO list 	 |
			| Other List 	 |

	Scenario: Show all todo lists
		When I visit the dashboard page
		Then I should see a panel on the left named "All lists"
		And that panel should have "3" items
		And I should see a panel on top named "Add a todo."
		And that panel should contain a form field and an "Add" button
		And I should see a panel on bottom named "Todos"
		And that panel should have an empty grid

	Scenario: Edit a todo list
		When I double click on the row "Shopping list"
		Then I should see a form dialog titled "Edit TodoList"
		And the dialog should contains a "Title" field prefilled with "Shopping list"

	Scenario: Show todo items for a given todo list
		Given the following todo items:
			| description	| status		| list			|
			| Potatoes		| uncompleted	| Shopping list	|
			| Chips			| uncompleted	| Shopping list	|
		When I click on the row "Shopping list"
		Then In the right panel I should see "2" todo items
