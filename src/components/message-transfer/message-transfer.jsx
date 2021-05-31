import { addParams } from "@store/route"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"

export const MessageTransfer = (props) => {
  const { children, match } = props
  const { params } = match

  const dispatch = useDispatch()
  dispatch(addParams(params))

  // патерн render-prop
  return children(params)
}

MessageTransfer.propTypes = {
  match: PropTypes.object,
  children: PropTypes.func,
}
