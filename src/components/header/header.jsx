import { Link, useParams } from "react-router-dom"
import React from "react"
import styles from "./header.module.css"

export const Header = () => {
  const { roomId } = useParams()

  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.text}>room #{roomId}</h3>
        <Link to="/chat">Chat</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/gists">Gists</Link>
      </header>
    </>
  )
}
