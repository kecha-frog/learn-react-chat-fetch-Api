import PropTypes from "prop-types"
import React from "react"
import styles from "./message.module.css"

export class Message extends React.Component {
  static propTypes = {
    message: PropTypes.shape({
      user: PropTypes.string,
      text: PropTypes.string,
    }),
  }

  render() {
    const { message } = this.props
    const { user, text } = message

    return (
      <div
        className={styles.message__box + ` message__box--${user.toLowerCase()}`}
      >
        <p className={styles.message__text}>{text}</p>
        <h5 className={styles.message__user}>{user}</h5>
      </div>
    )
  }
}
