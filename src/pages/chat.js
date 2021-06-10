import {
  ChatList,
  Header,
  Layout,
  MessageList,
  Profile,
  Gists,
} from "@components"
import { Route, Switch } from "react-router-dom"
import React from "react"

export const Chat = () => {
  return (
    <>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/gists" component={Gists} />
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
