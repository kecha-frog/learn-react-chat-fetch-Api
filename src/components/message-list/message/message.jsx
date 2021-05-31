import PropTypes from "prop-types"
import React from "react"
import styles from "./message.module.css"

export class Message extends React.Component {
  static propTypes = {
    messages: PropTypes.shape({
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  }

  render() {
    const { messages } = this.props
    const { author, message } = messages

    return (
      <div
        className={
          styles.message__box + ` message__box--${author.toLowerCase()}`
        }
      >
        <p className={styles.message__text}>{message}</p>
        <h5 className={styles.message__user}>{author}</h5>
      </div>
    )
  }
}
