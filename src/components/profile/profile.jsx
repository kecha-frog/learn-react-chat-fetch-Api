import {
  handleChangInput,
  toggleCheckBox,
  getProfile,
  updateUserName,
} from "@store"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import React from "react"

export const Profile = (props) => {
  const { value, isToggle, name } = useSelector(getProfile())
  const { header } = props
  const dispatch = useDispatch()

  return (
    <>
      {header}
      <label htmlFor="checkBox">Показать Имя</label>
      <input
        id="checkBox"
        type="checkbox"
        checked={isToggle}
        onChange={() => dispatch(toggleCheckBox())}
      />
      <br />
      <input
        value={value}
        onChange={(event) => dispatch(handleChangInput(event.target.value))}
        placeholder={"Введите имя"}
      />
      {value && (
        <button onClick={() => dispatch(updateUserName())}>Update Name</button>
      )}

      {isToggle && <h1>{name}</h1>}
    </>
  )
}

Profile.propTypes = {
  header: PropTypes.object,
}
