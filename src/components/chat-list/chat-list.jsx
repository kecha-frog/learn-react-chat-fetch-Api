import { Chat } from "@components"
import { List } from "@material-ui/core"
import React from "react"
import styles from "./chat-list.module.css"

export class ChatList extends React.Component {
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  }

  render() {
    const { chats, selectedIndex } = this.state
    return (
      <List
        aria-label="contacts"
        className={styles.chat_list}
        disablePadding={true}
      >
        {chats.map((chat, index) => (
          <Chat title={chat} key={index} selected={selectedIndex} />
        ))}
      </List>
    )
  }
}
