import PropTypes from "prop-types"
import React from "react"
import styles from "./layout.module.css"

export const Layout = (props) => {
  const { messageList, chatList, header } = props

  return (
    <>
      {header}
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
  header: PropTypes.object,
}
