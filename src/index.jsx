import "./index.css"
import ReactDom from "react-dom"
import React from "react"

/*class ClassExample extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Class</h1>
      </div>
    )
  }
}

const Example = () => {
  return (
    <React.Fragment>
      <h1>Hello React</h1>
      <ClassExample />
    </React.Fragment>
  )
}

ReactDom.render(<Example />, document.getElementById("root"))

const ExampleWithoutJSX = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello createElement Without JSX"),
    React.createElement(ClassExample, null, null),
  )
}

const test = () => {
  ReactDom.render(<ExampleWithoutJSX />, document.getElementById("root"))
}

setTimeout(test, 2000)

const Message = ({ message }) => {
  return (
    <React.Fragment>
      <h1>{message}</h1>
    </React.Fragment>
  )
}

const MessageField = ({ messages }) => {
  return messages.map((message, index) => (
    <Message message={message} key={index} isVisible={true} />
  ))
}

ReactDom.render(
  <MessageField messages={["test1"]} />,
  document.getElementById("root"),
)*/

const arrayText = ["Хорошо", "Отлично"]

function addText() {
  arrayText.push("Нормально")
  ReactDom.render(<MessageDiv />, document.getElementById("root"))
}

const Messages = (props) => (
  <h3 className="messages-box__messages">{props.text}</h3>
)

const MessageField = (props) => {
  return props.messages.map((message, index) => (
    <Messages text={message} key={index} />
  ))
}
const Button = () => (
  <button onClick={addText} className={"messages-box__input"} type={"button"}>
    Отправить
  </button>
)

const MessageDiv = () => (
  <React.Fragment>
    <MessageField messages={arrayText} />
    <Button />
  </React.Fragment>
)

ReactDom.render(<MessageDiv />, document.getElementById("root"))
