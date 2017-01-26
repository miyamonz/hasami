require("babel-core/register")
const React = require("react")
const ReactDOM = require("react-dom")
const App = require("./app.jsx").default

console.log("load")
ReactDOM.render(
  React.createElement(App),
  document.querySelector("body")
)
