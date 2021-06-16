import {
  getAllGists,
  getAllGistsByUserName,
  getGists,
  getGistsSendValue,
} from "@store"
import debounce from "lodash.debounce"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useRef } from "react"

export const Gists = (props) => {
  const { header } = props
  const { gists, error, pending, value } = useSelector(getGists())
  const dispatch = useDispatch()
  const ref = useRef("")

  const handleChangeValue = debounce((value) => {
    dispatch(getGistsSendValue(value))
  }, 500)

  useEffect(() => {
    ref.current = value
    dispatch(getAllGistsByUserName(value, ref.current))
    /*dispatch(getAllGists())*/
  }, [dispatch, value])

  return (
    <>
      {header}
      <h1>Gists</h1>
      <input
        placeholder={"Search..."}
        onChange={(e) => handleChangeValue(e.target.value)}
        type="text"
      />
      {error && <h1>{error}</h1>}
      {pending && !error ? (
        <h3>Обрабатывается fetch</h3>
      ) : (
        <ul>
          {gists?.map((item, index) => (
            <li key={index}>{item.description || "Нет Описания"}</li>
          ))}
        </ul>
      )}
    </>
  )
}

Gists.propTypes = {
  header: PropTypes.object,
}
