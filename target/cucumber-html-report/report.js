$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FacebookLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook login smoke test",
  "description": "",
  "id": "facebook-login-smoke-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Facebook login upon",
  "description": "",
  "id": "facebook-login-smoke-test;facebook-login-upon",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User will be login to fb successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "facebook-login-smoke-test;facebook-login-upon;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "facebook-login-smoke-test;facebook-login-upon;;1"
    },
    {
      "cells": [
        "srujan43.d@gmail.com",
        "sru@1234"
      ],
      "line": 11,
      "id": "facebook-login-smoke-test;facebook-login-upon;;2"
    },
    {
      "cells": [
        "7386093805",
        "narendra"
      ],
      "line": 12,
      "id": "facebook-login-smoke-test;facebook-login-upon;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Facebook login upon",
  "description": "",
  "id": "facebook-login-smoke-test;facebook-login-upon;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"srujan43.d@gmail.com\" and \"sru@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User will be login to fb successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FbloginSmokeTest.Open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 10081762041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srujan43.d@gmail.com",
      "offset": 15
    },
    {
      "val": "sru@1234",
      "offset": 42
    }
  ],
  "location": "FbloginSmokeTest.I_enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 885394423,
  "status": "passed"
});
formatter.match({
  "location": "FbloginSmokeTest.User_will_be_login_to_fb_successfully()"
});
formatter.result({
  "duration": 13756535256,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Facebook login upon",
  "description": "",
  "id": "facebook-login-smoke-test;facebook-login-upon;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"7386093805\" and \"narendra\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User will be login to fb successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FbloginSmokeTest.Open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 9083473851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7386093805",
      "offset": 15
    },
    {
      "val": "narendra",
      "offset": 32
    }
  ],
  "location": "FbloginSmokeTest.I_enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 921426055,
  "status": "passed"
});
formatter.match({
  "location": "FbloginSmokeTest.User_will_be_login_to_fb_successfully()"
});
formatter.result({
  "duration": 2134647234,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Gmail login",
  "description": "",
  "id": "facebook-login-smoke-test;gmail-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open Gmail and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "we will see gmail home page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailLogin.open_Gmail_and_start_application()"
});
formatter.result({
  "duration": 12566628141,
  "status": "passed"
});
formatter.match({
  "location": "GmailLogin.we_will_see_gmail_home_page()"
});
formatter.result({
  "duration": 609630,
  "status": "passed"
});
});