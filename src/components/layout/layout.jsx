import { Header, MessageTransfer } from "@components"
import PropTypes from "prop-types"
import React from "react"
import styles from "./layout.module.css"

export const Layout = (props) => {
  const ChatList = props.chatList
  const MessageList = props.messageList
  const params = props.params

  console.log(props.match)

  return (
    <MessageTransfer {...params}>
      {(state, actions, params) => (
        <>
          <Header {...params} />
          <div className={styles.messenger}>
            <ChatList parentState={state} parentAction={actions} />
            <MessageList parentState={state} parentAction={actions} />
          </div>
        </>
      )}
    </MessageTransfer>
  )
}

Layout.propTypes = {
  chatList: PropTypes.func,
  messageList: PropTypes.func,
  params: PropTypes.object,
  actions: PropTypes.object,
  state: PropTypes.object,
}
