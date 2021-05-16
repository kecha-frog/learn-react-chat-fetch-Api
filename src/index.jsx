import "./index.css"
import ReactDom from "react-dom"
import React, { createRef } from "react"

class Messages extends React.Component {
  constructor(props) {
    super(props)``
    this.state = {
      array: ["Хорошо", "Отлично"],
    }
    this.inputRef = createRef()
  }

  Message = (props) => {
    return (
      <h4 className="messages-box__messages" onClick={this.addText}>
        {props.text}
      </h4>
    )
  }

  addText = () => {
    this.setState({ array: [...this.state.array, this.inputRef.current.value] })
  }

  render() {
    this.MessageField = (props) => {
      return props.messages.map((message, index) => (
        <this.Message text={message} key={index} />
      ))
    }

    return (
      <>
        <this.MessageField messages={this.state.array} />
        <input type="text" ref={this.inputRef} />
      </>
    )
  }
}

ReactDom.render(<Messages />, document.getElementById("root"))
