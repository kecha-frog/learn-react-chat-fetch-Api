import { getRouteParams } from "@store/route"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import React, { useMemo } from "react"
import styles from "./header.module.css"

export const Header = () => {
  const memoSelector = useMemo(() => getRouteParams(), [])
  const routeParams = useSelector(memoSelector)

  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.text}>{routeParams.roomId}</h3>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Chats</Link>
      </header>
    </>
  )
}
