import PropTypes from "prop-types"
import React from "react"

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
        className={`client-messenger__messagesBox client-messenger__messagesBox--${user.toLowerCase()}`}
      >
        <p className="client-messenger__messageText">{text}</p>
        <h5 className="client-messenger__messageUser">{user}</h5>
      </div>
    )
  }
}
