import { Chat } from "@components"
import { List } from "@material-ui/core"
import React from "react"
import styles from "./chat-list.module.css"

export class ChatList extends React.Component {
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  }

  handleListItemClick = (event, index) => {
    this.setState({
      selectedIndex: index,
    })
  }

  render() {
    const { chats } = this.state
    return (
      <List
        aria-label="contacts"
        className={styles.chat_list}
        disablePadding={true}
      >
        {chats.map((chat, index) => (
          <Chat
            handleListItemClick={this.handleListItemClick}
            title={chat}
            key={index}
            index={index}
            selected={this.state.selectedIndex === index}
          />
        ))}
      </List>
    )
  }
}
