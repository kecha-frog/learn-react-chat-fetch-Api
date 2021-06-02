import { ChatList, Layout, MessageList, Header, Profile } from "@components"
import { Route, Switch } from "react-router-dom"
import React from "react"

export const Chat = () => {
  return (
    <>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Switch>
        <Route path={["/chat/:roomId", "/chat", "/"]}>
          <Layout
            messageList={<MessageList />}
            chatList={<ChatList />}
            header={<Header />}
          />
        </Route>
      </Switch>
    </>
  )
}
