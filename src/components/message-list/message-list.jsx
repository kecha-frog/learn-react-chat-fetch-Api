import { Message } from "@components"
import PropTypes from "prop-types"
import React from "react"

export class MessageList extends React.Component {
  static propTypes = {
    messagesList: PropTypes.array,
  }

  render() {
    const { messagesList } = this.props
    return (
      <div className={"client-messenger__messages"}>
        {messagesList.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    )
  }
}
