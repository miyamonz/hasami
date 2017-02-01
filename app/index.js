require("babel-core/register")
const React = require("react")
const ReactDOM = require("react-dom")
const App = require("./app.jsx").default

ReactDOM.render(
  React.createElement(App),
  document.querySelector("#root")
)
