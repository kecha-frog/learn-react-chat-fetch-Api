import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import React from "react"
import styles from "./header.module.css"

export const Header = () => {
  const { routeReducer } = useSelector((state) => state)

  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.text}>{routeReducer.roomId}</h3>
        <Link to="/profile">Profile</Link>
      </header>
    </>
  )
}
