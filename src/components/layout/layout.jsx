import { Header } from "@components"
import PropTypes from "prop-types"
import React from "react"
import styles from "./layout.module.css"

export class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.chatList = props.chatList
    this.messageList = props.messageList
  }

  static propTypes = {
    chatList: PropTypes.object,
    messageList: PropTypes.object,
  }

  render() {
    return (
      <>
        <Header />
        <div className={styles.messenger}>
          {this.chatList}
          {this.messageList}
        </div>
      </>
    )
  }
}

/*
export const Layout = ({ chatList, messageList }) => {
  return (
    <>
      <Header />
      <div className={styles.messenger}>
        {chatList}
        {messageList}
      </div>
    </>
  )
}

Layout.propTypes = {
  chatList: PropTypes.object,
  messageList: PropTypes.object,
}
*/
