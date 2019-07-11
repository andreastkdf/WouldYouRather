import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import "typeface-roboto"
import reducer from "./reducers"
import middleware from "./middleware"
import "./index.css"
import App from "./components/App"
import { getInitialData } from "./utils/api"

const store = createStore(reducer, composeWithDevTools(middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

console.log("getInitialData: ", getInitialData())
