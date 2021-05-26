import "./index.css"
import { Layout, MessageList, ChatList } from "@components"
import ReactDom from "react-dom"
import { BrowserRouter } from "react-router-dom"
import React from "react"

const App = () => {
  return <Layout messageList={MessageList} chatList={ChatList} />
}

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
)
