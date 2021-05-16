import "./index.css"
import ReactDom from "react-dom"
import React from "react"

let arrayText = ["Хорошо", "Отлично"]

function addText() {
  arrayText = [...arrayText, "Нормально"]
  ReactDom.render(<MessageDiv />, document.getElementById("root"))
}

const Messages = (props) => (
  <h4 className="messages-box__messages">{props.text}</h4>
)

const MessageField = (props) => {
  return props.messages.map((message, index) => (
    <Messages text={message} key={index} />
  ))
}

const MessageDiv = () => (
  <>
    <MessageField messages={arrayText} />
    <button onClick={addText} className={"messages-box__input"} type={"button"}>
      Отправить
    </button>
  </>
)

ReactDom.render(<MessageDiv />, document.getElementById("root"))
