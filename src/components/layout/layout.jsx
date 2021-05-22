import { ChatList, Header, MessageList } from "@components"
import React from "react"
import styles from "./layout.module.css"

export class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.messenger}>
          <ChatList />
          <MessageList />
        </div>
      </>
    )
  }
}
