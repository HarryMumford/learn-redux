import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment } from "./actions"

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment)}>+</button>
      <button>-</button>
      {isLogged ? <h3>Welcome</h3> : <h3>Please log in</h3>}
    </div>
  )
}

export default App
