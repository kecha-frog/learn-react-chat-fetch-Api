import { Chat } from "@components"
import { List } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import styles from "./chat-list.module.css"

export class ChatList extends React.Component {
  state = {
    selectedIndex: 0,
  }

  static propTypes = {
    parentState: PropTypes.object,
    parentAction: PropTypes.object,
  }

  handleListItemClick = (event, index) => {
    this.setState({
      selectedIndex: index,
    })
  }

  render() {
    const { parentState } = this.props
    const { conversations } = parentState

    const { parentAction } = this.props
    const { addRoom } = parentAction
    return (
      <List
        aria-label="contacts"
        className={styles.chat_list}
        disablePadding={true}
      >
        {conversations.map((conversation, index) => (
          <Chat
            handleListItemClick={this.handleListItemClick}
            title={conversation.title}
            key={index}
            index={index}
            selected={this.state.selectedIndex === index}
          />
        ))}
        <li>
          <button onClick={addRoom}>Добавить</button>
        </li>
      </List>
    )
  }
}
