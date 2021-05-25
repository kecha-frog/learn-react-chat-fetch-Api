import { Header, MessageTransfer } from "@components"
import PropTypes from "prop-types"
import { Link, Switch, Router } from "react-router-dom"
import React from "react"
import styles from "./layout.module.css"

export class Layout extends React.Component {
  static propTypes = {
    chatList: PropTypes.object,
    messageList: PropTypes.object,
  }

  render() {
    this.chatList = this.props.chatList
    this.messageList = this.props.messageList

    return (
      <div>
        <Link to="/chat/room1">TEst1</Link>
        <Link to="/chat/room2">TEst2</Link>
        <Switch>
          <Router path={["/chat/:roomId"]}>
            {(params) => (
              <MessageTransfer {...params}>
                {([state, actions]) => (
                  <div className={styles.messenger}>
                    {console.log(state, actions)}
                    {this.chatList}
                    {this.messageList}
                  </div>
                )}
              </MessageTransfer>
            )}
          </Router>
        </Switch>
      </div>
    )
  }
}

/*
{TODO Разобраться}
<Header />
<div className={styles.messenger}>
    {this.chatList}
    {this.messageList}
</div>






export const Layout = ({ chatList, messageList }) => {
  return (
    <>
      <Header />
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
}
*/
