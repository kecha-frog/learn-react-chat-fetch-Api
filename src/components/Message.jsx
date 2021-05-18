import React from "react"

export class Message extends React.Component {
  constructor(props) {
    super(props)
    this.messageText = props.messageText
    this.messageUser = props.messageUser
    this.classComponent = props.classComponent
  }

  render() {
    return (
      <div
        className={`client-messenger__messagesBox client-messenger__messagesBox--${this.classComponent}`}
      >
        <p className="client-messenger__messageText">{this.messageText}</p>
        <h5 className="client-messenger__messageUser">{this.messageUser}</h5>
      </div>
    )
  }
}
