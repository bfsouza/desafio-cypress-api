@delete
Feature: Delete User

  Scenario Outline: Delete user by a valid ID    
    Given I send DELETE HTTP request to user api endpoint for a valid id
    When I receive HTTP response code "<code>"
    Then I see the code "<bodyCode>" into the body    
    Examples:
      | code | bodyCode |
      | 200  | 204      |

  Scenario Outline: Delete user by an invalid ID    
    Given I send DELETE HTTP request to user api endpoint for an invalid id "<id>"
    When I receive HTTP response code "<code>"
    Then I see the code "<bodyCode>" into the body
    And I see the message "<message>" into the body
    Examples:
      | id    | code | bodyCode | message            |
      | 99999 | 200  | 404      | Resource not found |     