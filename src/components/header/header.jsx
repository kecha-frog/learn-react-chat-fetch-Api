import { Link, useParams } from "react-router-dom"
import React from "react"
import styles from "./header.module.css"

export const Header = () => {
  const { roomId } = useParams()

  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.text}>{roomId}</h3>
        <Link to="/profile">Profile</Link>
      </header>
    </>
  )
}
