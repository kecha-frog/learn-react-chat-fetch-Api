import { routeParams } from "@store/route"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import React from "react"
import styles from "./layout.module.css"

export const Layout = (props) => {
  const ChatList = props.chatList
  const MessageList = props.messageList

  const { match } = props
  const { params } = match

  const dispatch = useDispatch()
  dispatch(routeParams(params))

  return (
    <>
      <div className={styles.messenger}>
        <ChatList />
        <MessageList />
      </div>
    </>
  )
}

Layout.propTypes = {
  chatList: PropTypes.func,
  messageList: PropTypes.func,
  header: PropTypes.func,
  match: PropTypes.object,
}
