import {
  /*getGists,*/
  getAllGists,
  getAllGistsByUserName,
  getGistsError,
  getGistsList,
  getGistsPending,
  getGistsSendValue,
  getGistsValue,
} from "@store/gists"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useMemo, useRef } from "react"
import debounce from "lodash.debounce"

export const Gists = () => {
  const gists = useMemo(() => getGistsList(), [])
  const gistsList = useSelector(gists)
  const gistsPending = useMemo(() => getGistsPending(), [])
  const pending = useSelector(gistsPending)
  const gistsValue = useMemo(() => getGistsValue(), [])
  const value = useSelector(gistsValue)
  const gistsError = useMemo(() => getGistsError(), [])
  const error = useSelector(gistsError)
  const dispatch = useDispatch()
  const ref = useRef("")

  /*  const gists = useMemo(() => getGists(), [])
  const { gistsList, pending } = useSelector(gists)
  const dispatch = useDispatch()*/ //TODO Почему такой код не рендерит ?

  const handleChangeValue = debounce((value) => {
    dispatch(getGistsSendValue(value))
  }, 500)

  useEffect(() => {
    ref.current = value
    dispatch(getAllGistsByUserName(value, ref.current))
    /*dispatch(getAllGists())*/
  }, [dispatch, value])

  if (error) {
    return <h1>Error oops!</h1>
  }

  return (
    <>
      <h1>Gists</h1>
      <input
        placeholder={"Search..."}
        onChange={(e) => handleChangeValue(e.target.value)}
        /*value={value}*/
        type="text"
      />
      {pending ? (
        <h3>Обрабатывается fetch</h3>
      ) : (
        <ul>
          {gistsList?.map((item, index) => (
            <li key={index}>{item.description || "Нет Описания"}</li>
          ))}
        </ul>
      )}
    </>
  )
}
