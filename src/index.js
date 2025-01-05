import React from "react"
import createDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"

import Counter from "./components/counter"


const App  = () => {
  return <Counter />
}

createDom.render(<App />, document.getElementById('root'))
