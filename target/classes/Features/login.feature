Feature: Verifying Login page functionality 

 

Scenario Outline: verify user login with invalid credentials 

	Given User Launches Chrome browser 
	When User opens URL "https://dyn.stg.contido.io/login"  
	And User enters Email as "<username>" and Password as "<password>" 
	And user clicks on login  
	Then User should not be able to login to application
	And User should stay on  login page  only.
	And close browser  
	
	Examples: 
		| username | password |
		| test@123  | test@123 |