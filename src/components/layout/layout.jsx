import { Header, MessageTransfer } from "@components"
import PropTypes from "prop-types"
import { Switch, Route } from "react-router-dom"
import React from "react"
import styles from "./layout.module.css"

export class Layout extends React.Component {
  static propTypes = {
    chatList: PropTypes.func,
    messageList: PropTypes.func,
  }

  render() {
    const ChatList = this.props.chatList
    const MessageList = this.props.messageList

    return (
      <div>
        <Switch>
          <Route path={["/chat/:roomId"]}>
            {(params) => (
              <MessageTransfer {...params}>
                {(state, actions, params) => (
                  <>
                    <Header parentParams={params} />
                    <div className={styles.messenger}>
                      <ChatList parentState={state} parentAction={actions} />
                      <MessageList parentState={state} parentAction={actions} />
                    </div>
                  </>
                )}
              </MessageTransfer>
            )}
          </Route>
        </Switch>
      </div>
    )
  }
}
