# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Development Notes

### Styled Components
Using styled components to provide styling. 
This is a best practice I found when working for a client at Slalom. 

### Jest testing library 
- utilizing this for component testing
- in this project, each component is tested individually for now. can be found near the associated files

### Cypress Testing
- this is for front end automated regression testing.
- the tests will be simple for the part of having the knowledge in here
- When working with Cyress, a reference guide can be found at:
    * https://example.cypress.io

### Context
Using the concept of context to apply changes at different components without prop drilling.

This provides access to application resources that allows developers to efficiently manage and 
share state across their application without having to pass props down through every level of the component tree.
A major benefit of context is global variables can be shared across different components, making it easier to access data

It provides a cleaner architecture that is easier ro read and manage, especially as apps grow in complexity