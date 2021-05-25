import "./index.css"
import { Layout } from "@components"
import ReactDom from "react-dom"
import React from "react"

const App = () => {
  return <Layout />
}

ReactDom.render(App(), document.getElementById("root"))
