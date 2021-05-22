import { Message } from "@components"
import PropTypes from "prop-types"
import React from "react"
import styles from "./message-list.module.css"

export class MessageList extends React.Component {
  static propTypes = {
    messagesList: PropTypes.array,
  }

  render() {
    const { messagesList } = this.props
    return (
      <div className={styles.messagesList}>
        {messagesList.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    )
  }
}
