/*import React from "react"
import ReactDom from "react-dom"

class ClassExample extends React.Component {
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
import "./index.css"

const arrayText = ["Хорошо", "Отлично"]

const divMessage = document.createElement("div")
divMessage.className = "message-box"

const message = document.createElement("h3")
message.className = "message-box__message"
message.textContent = arrayText.join(", ")

const input = document.createElement("input")
input.className = "message-box__input"
input.value = "Привет"

const button = document.createElement("button")
button.className = "message-box__button"
button.type = "button"
button.textContent = "Отправить"

divMessage.append(input)
divMessage.append(button)
divMessage.append(message)
document.body.append(divMessage)

const addText = () => {
  if (input.value !== "") {
    arrayText.push(input.value)
    input.value = null
    message.textContent = arrayText.join(", ")
  }
}

button.addEventListener("click", addText)
