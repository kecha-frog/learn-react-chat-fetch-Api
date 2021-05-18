import "./index.css"
import { AppClientMessenger } from "@components/AppClientMessenger"
import ReactDom from "react-dom"
import React from "react"

const messagesArray = [
  {
    user: "User2112",
    text: "Вы кто ?",
  },
  {
    user: "Robot",
    text: "Я робот",
  },
]

ReactDom.render(
  <AppClientMessenger messagesList={messagesArray} />,
  document.getElementById("root"),
)
