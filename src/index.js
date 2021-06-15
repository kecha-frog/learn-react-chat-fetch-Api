import "./index.css"
import { Chat } from "@app/pages"
import { persistor, store } from "@store"
import ReactDom from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import { PersistGate } from "redux-persist/integration/react"

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
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
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
