### Run
`npm start` to run dev server, with a simple input field for testing in the browser. Don't forget to `npm install` pacakges first.

### Test
`npm test` to run test

### Design and Technology
Simple Redux usage is demostrated in this application.

Since this application requires storing user settings, which can be treated as a state store. Redux makes it relatively easy to manipulate global state, and get notified across different components. A global state store also make it easier to save user state in local browser, ie., LocalStorage.

JSONP in my opinion should be avoided, it is hard to write a test against JSONP call. If callback is not setup correctly, could leads to security issue. JSONP request is relatively difficult to handle as well.

As I have relatively weak experience on automated testing framework. Especially setup and writing E2E test is very difficult compare to normal unit test. Also, JSONP is hard to write a proper unit test against it. But, if there is list of REST API calls, a unit test suite is absolute necessary.

I try to make CSS as clean as possible, without using any framework. CSS has its corresponding JavaScript file which makes it easier to reasoning about the layout issue.