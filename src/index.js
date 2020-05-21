import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createStore, applyMiddleware } from "redux"
import allReducers from "./reducers"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

const store = createStore(allReducers, applyMiddleware(thunk))

// //Store (globalized state)

// //Action (describes what you want to do
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   }
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   }
// }

// //Reducer (describes how your actions transform your state into the next state)

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1
//     case "DECREMENT":
//       return state - 1
//     default:
//       return state
//   }
// }

// let store = createStore(counter)

// //Display it in the console
// store.subscribe(() => console.log(store.getState()))

// //Dispatch (describes the way you can actually execute the action )
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())

ReactDOM.render(
  <Provider store={store} r>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
