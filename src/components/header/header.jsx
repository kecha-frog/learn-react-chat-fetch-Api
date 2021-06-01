import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import React, { useCallback } from "react"
import styles from "./header.module.css"

const selector = () => {
  return (state) => state
}

export const Header = () => {
  const memoSelector = useCallback((state) => selector()(state), [])
  const { routeReducer } = useSelector(memoSelector)

  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.text}>{routeReducer.roomId}</h3>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Chats</Link>
      </header>
    </>
  )
}
