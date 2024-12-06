Feature: As a user  after pressing help I want to come back to the same page.

  Scenario Outline: you will come back to the same page after checking help function at all location "<location>"
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I have navigated to the position "<location>"
    And that my position is "<location>"
    When I click on the button "Help"
    And I click on the button "Continue"
    Then my position should be "<location>"

    Examples:
      | location            |
      | outside the cafe    |
      | inside the cafe     |
      | on an empty street  |
      | in a crowded bar    |
      | in the country-side |
      | at the concert      |