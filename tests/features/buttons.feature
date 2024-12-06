Feature: All play  Buttons should be present and work correctly after clicking them

  Background: We have started a game
    Given that game is starded with joining game "http://localhost:3000"
    Then that there are available all buttons "Enter the cafe", "Wait", "Go north", "Go south", "Help"

  Scenario: Checking button Enter the caffe
    When button "Enter the cafe" is clicked
    Then should be changed "view", "text" and available button "Buy an espresso"

  Scenario: Checking button Wait
    When button "Wait" is pressed
    Then "Health" should be decreased and color changed to red