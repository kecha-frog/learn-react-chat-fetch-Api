import { Header, MessageTransfer } from "@components"
import PropTypes from "prop-types"
import { Switch, Route, Link } from "react-router-dom"
import React from "react"
import styles from "./layout.module.css"

export const Layout = (props) => {
  const ChatList = props.chatList
  const MessageList = props.messageList

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
            <MessageTransfer {...params}>
              {(state, actions, params) => (
                <>
                  <Header parentParams={params} />
                  <div className={styles.messenger}>
                    <ChatList parentState={state} parentAction={actions} />
                    <MessageList parentState={state} parentAction={actions} />
                  </div>
                </>
              )}
            </MessageTransfer>
          )}
        </Route>
      </Switch>
    </>
  )
}

Layout.propTypes = {
  chatList: PropTypes.func,
  messageList: PropTypes.func,
}
