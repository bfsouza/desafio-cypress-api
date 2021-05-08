@post
Feature: Add User

  Scenario Outline: Add user information    
    Given I send POST HTTP request to user api endpoint for "<name>", "<email>", "<gender>" and "<status>"
    When I receive HTTP response code "<code>"
    Then I see the code "<bodyCode>" into the body
    And I see the message "<message>" into the body
    Examples:
      | name               | email                 | gender  | status  | code | bodyCode | message                |
      | Kayson Suarez      | kaysonsuarez@mail.com | Male    | Active  | 200  | 201      | <Empty>                |
      | Amie Wardle        | kaysonsuarez@mail.com | Female  | Active  | 200  | 422      | has already been taken |
      | <Empty>            | thaiscastro@mail.com  | Female  | Active  | 200  | 422      | can't be blank         |
      | Thaís Castro       | <Empty>               | Female  | Active  | 200  | 422      | can't be blank         |
      | Letícia Rodrigues  | leticiarodr@mail.com  | <Empty> | Active  | 200  | 422      | can't be blank         |
      | Douglas Araujo     | douglasarjo@mail.com  | Male    | <Empty> | 200  | 422      | can't be blank         |