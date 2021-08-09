## Notes

I've completed all the tasks for this test. In addition to the main tasks, I added the following:

- [x] Cleared answers for a new quiz. (After finishing a quiz, you could see your last test if you start a new one)
- [x] Fixed answers with random index after selecting one option. (Random order function was called after every render).
- [x] Fixed bug that allowed you to submit your quiz when you had only answered the last question (an array with empty elements was created, so I added a filter that deletes empty elements before taking into account the length of the array).

## Introduction

Quiz is a small application that is using a sample of questions to display list of multiselect trivia questions. Users can start the quiz, answer trivia questions and complete the quiz when all questions are answered.

### You have been asked to:

- [x] Create new component that displays number of correct answers (for example 'You answered 5 out of 10 questions correctly.')
  - [x] add component to the Results page.
  - [x] write tests to ensure correct functionality.
- [x] Refactor the application code using clean coding principles to make the code maintainable.
- [x] Think about semantics and accessibility.
- [x] Style your work to fit the application.
- [x] Do not break the existing functionality.
- [x] Propose changes to the application to make it production ready.

Please only spend a reasonable amount of time on the task. If it does not get completed, we would
like to know what your next steps would have been and how you would have accomplished them.

### What we look for:

When reviewing the test, we look for a solution which:

- Is clean, easy to understand and maintainable
- Shows an understanding of software craftsmanship
- Doesn’t break the existing functionality

Your solution will form the main part of your technical interview where we’ll discuss your design decisions.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
