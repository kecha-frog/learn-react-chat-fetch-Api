import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./message.module.css"

export const Message = (props) => {
  const { messages } = props
  const { author, message } = messages

  return (
    <li
      className={classNames(
        styles.message__box,
        `message__box--${author.toLowerCase()}`,
      )}
    >
      <p className={styles.message__text}>{message}</p>
      <h5 className={styles.message__user}>{author}</h5>
    </li>
  )
}

Message.propTypes = {
  messages: PropTypes.shape({
    author: PropTypes.string,
    message: PropTypes.string,
  }),
}
