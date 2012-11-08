Feature: Hello World Feature
 
	Scenario: Hello World
		Given The Action is Hello
		And The user is "Pippo"
		When The Subject is World
		Then The Greeting message should be "Hello World! Pippo"