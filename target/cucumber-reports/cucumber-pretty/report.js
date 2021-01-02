$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying Login page functionality",
  "description": "",
  "id": "verifying-login-page-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "verify user login with invalid credentials",
  "description": "",
  "id": "verifying-login-page-functionality;verify-user-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User opens URL \"https://dyn.stg.contido.io/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters Email as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not be able to login to application",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should stay on  login page  only.",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "verifying-login-page-functionality;verify-user-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "verifying-login-page-functionality;verify-user-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "test@123",
        "test@123"
      ],
      "line": 17,
      "id": "verifying-login-page-functionality;verify-user-login-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "verify user login with invalid credentials",
  "description": "",
  "id": "verifying-login-page-functionality;verify-user-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User opens URL \"https://dyn.stg.contido.io/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters Email as \"test@123\" and Password as \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not be able to login to application",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should stay on  login page  only.",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_Launches_Chrome_browser()"
});
formatter.result({
  "duration": 3685034000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://dyn.stg.contido.io/login",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_opens_URL(String)"
});
formatter.result({
  "duration": 3791875700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@123",
      "offset": 22
    },
    {
      "val": "test@123",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinition.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 184140600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_able_to_login_to_application()"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_stay_on_login_page_only()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 590050400,
  "status": "passed"
});
});