import "./index.css"
import { Chat } from "@app/pages"
import { store } from "@store"
import ReactDom from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import React from "react"

const App = () => {
  return (
    <>
      <Chat />
    </>
  )
}

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root"),
)

/*const App = () => {
  return (
    <>
      <Chat />
    </>
  )
}*/
