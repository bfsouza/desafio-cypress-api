@get
Feature: Get User

  Scenario Outline: Get user information by ID    
    Given I send GET HTTP request to user api endpoint for "<id>"
    When I receive HTTP response code "<code>"
    Then I see the code "<bodyCode>" into the body    
    Examples:
      | id    | code | bodyCode |
      | 99999 | 200  | 404      |
      | 1500  | 200  | 200      |