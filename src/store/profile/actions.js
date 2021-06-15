import {
  INPUT_PROFILE,
  TOGGLE_PROFILE_CHECKBOX,
  UPDATE_USER_NAME,
} from "@store/profile/types"

export const toggleCheckBox = () => {
  return { type: TOGGLE_PROFILE_CHECKBOX }
}

export const handleChangInput = (value) => {
  return { type: INPUT_PROFILE, payload: value }
}

export const updateUserName = () => {
  return { type: UPDATE_USER_NAME }
}
