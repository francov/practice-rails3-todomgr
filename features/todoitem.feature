Feature: Editing a todo item for a certain todo list
    Background:
        Given the following todo lists:
            | title          |
            | Shopping list  |
        And the following todo items:
            | description   | status        | list          |
            | Potatoes      | uncompleted   | Shopping list |
            | Chips         | uncompleted   | Shopping list |
        And I click on the row "Shopping list"

    Scenario: Deleting a todo item
        When I click the action "Delete" on the row "Potatoes"
        Then The "Todos" panel should contains "1" rows