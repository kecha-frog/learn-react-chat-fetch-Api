import "./index.css"
import { Layout, MessageList, ChatList } from "@components"
import ReactDom from "react-dom"
import React from "react"

const App = () => {
  return <Layout messageList={<MessageList />} chatList={<ChatList />} />
}

ReactDom.render(App(), document.getElementById("root"))
