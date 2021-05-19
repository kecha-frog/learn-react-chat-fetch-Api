import { Message } from "@components/Message"
import React from "react"

export class MessageField extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={"client-messenger__messages"}>
        {this.props.messagesList.map((message, index) => (
          <Message
            classComponent={message.user.toLowerCase()}
            messageText={message.text}
            messageUser={message.user}
            key={index}
          />
        ))}
      </div>
    )
  }
}
