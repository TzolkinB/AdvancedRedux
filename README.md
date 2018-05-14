# Advanced Redux
## Udemy Tutorial: Advanced Redux by Stephen Grider
- [Advanced Redux course on Udemy](https://www.udemy.com/react-redux-tutorial/)
- his github repo for the course: https://github.com/StephenGrider/AdvancedReduxCode

# ReduxSimpleStarter
cloned ReduxSimpleStarter boilerplate template from:
https://github.com/StephenGrider/ReduxSimpleStarter.git


### Getting Started

```
> npm install
> npm start
```

- specifically had to update the boilerplate from react-router 2 to v4 though I
    updated many of the other package versions as well.
    - `react-router-dom` has history prop (this.props.history.push('/')) that you can automatically access instead of the old way of adding contextType of router. https://reacttraining.com/react-router/core/api/history
    
- NPM packages used:
    - Mocha
    - Chai
    - chai-jquery
