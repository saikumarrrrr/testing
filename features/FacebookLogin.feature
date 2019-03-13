Feature: Facebook login smoke test

  @smoke 
  Scenario Outline: Facebook login upon 
    Given Open Chrome and start application
    When I enter valid "<username>" and "<password>"
    Then User will be login to fb successfully
    
 Examples:
 | username | password |
 |	srujan43.d@gmail.com				|	   sru@1234 |
 |7386093805|narendra|
    
    @smoke
    Scenario: Gmail login
    Given Open Gmail and start application
    Then we will see gmail home page
    
     @Functional
    Scenario: TVSHOWS FOR MOBILE SITE login
    Given Open TVshows4mobile.com and start application
    Then we will see tvshowsmobile.com home page
    
    