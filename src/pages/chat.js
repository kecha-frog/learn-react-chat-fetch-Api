import { ChatList, Layout, MessageList, Header } from "@components"
import { Link, Route, Switch } from "react-router-dom"
import React, { createRef } from "react"

export const Chat = () => {
  const test = createRef()
  console.log(test.current)
  return (
    <>
      <Switch>
        <Route path={"/"}>
          <Link to="/chat/room1">Chat</Link>
        </Route>
      </Switch>
      <Switch>
        Provider
        <Route path={["/chat/:roomId"]} ref={test}>
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
