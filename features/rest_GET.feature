@get
Feature: Get User

  Scenario Outline: Get user information by a valid ID    
    Given I send GET HTTP request to user api endpoint for a valid id
    When I receive HTTP response code "<code>"
    Then I see the code "<bodyCode>" into the body    
    Examples:
      | code | bodyCode |      
      | 200  | 200      |

  Scenario Outline: Get user information by an invalid ID    
    Given I send GET HTTP request to user api endpoint for "<id>"
    When I receive HTTP response code "<code>"
    Then I see the code "<bodyCode>" into the body    
    Examples:
      | id    | code | bodyCode |
      | 99999 | 200  | 404      |      