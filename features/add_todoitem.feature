Feature: Adding a todo item for a certain todo list
    Background:
        Given the following todo lists:
            | title          |
            | Shopping list  |
        And the following todo items:
            | description   | status        | list          |
            | Potatoes      | uncompleted   | Shopping list |
            | Chips         | uncompleted   | Shopping list |
        And I click on the row "Shopping list"

    Scenario: Entering a new item with empty value
        When I enter the following value in the "Description" form field
            """
            empty
            """
        And I click the "Add" button
        Then I should see a message box titled "An Error has occurred"
        And The message box should contains text "description can't be blank"
        And The "Todos" panel should contains "2" rows

    Scenario: Entering a new item with value too long
        When I enter the following value in the "Description" form field
            """
            Description very long description very long description very long 
            description very long description very long description very long 
            description very long description very long description very long 
            """
        And I click the "Add" button
        Then I should see a message box titled "An Error has occurred"
        And The message box should contains text "description must be up to 150 chars"
        And The "Todos" panel should contains "2" rows

    Scenario: Entering a new item with a valid value
        When I enter the following value in the "Description" form field
            """
            This is a valid item description
            """
        And I click the "Add" button
        Then I should see a message box titled "Success"
        And The message box should contains text "TodoItem was successfully created."
        And The "Todos" panel should contains "3" rows