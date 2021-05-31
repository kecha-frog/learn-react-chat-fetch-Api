import { ChatList, Layout, MessageList, Header } from "@components"
import { Link, Route, Switch } from "react-router-dom"
import React from "react"

export const Chat = () => {
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
              header={Header}
              messageList={MessageList}
              chatList={ChatList}
              {...params}
            />
          )}
        </Route>
      </Switch>
    </>
  )
}
