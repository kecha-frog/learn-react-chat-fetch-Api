import "./index.css"
import { Layout, MessageList, ChatList } from "@components"
import ReactDom from "react-dom"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import React from "react"

const App = () => {
  return (
    <>
      <Switch>
        <Route path={"/"}>
          <Link to="/chat/room1">Chat</Link>
        </Route>
      </Switch>
      <Switch>
        <Route path={["/chat/:roomId"]}>
          {(params) => (
            <Layout
              messageList={MessageList}
              chatList={ChatList}
              params={params}
            />
          )}
        </Route>
      </Switch>
    </>
  )
}

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
)
