# Tic Tac Toe game

## Introduction
- This is a follow up to the checkers game
- My goal here is to create a tic tac toe game that has 3 options:
    * 2 manual player
    * 1 manual player vs 1 AI player
    * watch as AI plays against itself
- A key goal is to learn machine learning here.
    * I want to master it here in a simpler game before adding it to checkers

## Development Notes
### Styled Components
- using styled components for custom components for specific responses

### Jest testing library 
- utilizing this for component testing
- in this project, each component is tested individually for now. can be found near the associated files

### Cypress Testing
- this is for front end automated regression testing.
- the tests will be simple for the part of having the knowledge in here
- When working with Cyress, a reference guide can be found at:
    * https://example.cypress.io

### Eslint
- setup in the eslint.config.mjs
- goal is simple ways to confirm standards
- TODO: add to pipeline check
- 2 scripts
    * lint
    * lint:fix

### Context
Using the concept of context to apply changes at different components without prop drilling.

This provides access to application resources that allows developers to efficiently manage and 
share state across their application without having to pass props down through every level of the component tree.
A major benefit of context is global variables can be shared across different components, making it easier to access data

It provides a cleaner architecture that is easier ro read and manage, especially as apps grow in complexity