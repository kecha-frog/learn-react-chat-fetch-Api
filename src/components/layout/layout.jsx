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
    this.chatList = this.props.chatList
    this.messageList = this.props.messageList

    return (
      <div>
        <Switch>
          <Route path={["/chat/:roomId"]}>
            {(params) => (
              <MessageTransfer {...params}>
                {(state, actions) => (
                  <>
                    <Header />
                    <div className={styles.messenger}>
                      <this.chatList parentState={state} />
                      <this.messageList
                        parentState={state}
                        parentAction={actions}
                      />
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
