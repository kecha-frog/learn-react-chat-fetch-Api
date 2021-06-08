export const getGistsList = () => {
  return (state) => state.gistsReducer.gists
}
export const getGistsPending = () => {
  return (state) => state.gistsReducer.pending
}
export const getGistsValue = () => {
  return (state) => state.gistsReducer.value
}

export const getGistsError = () => {
  return (state) => state.gistsReducer.err
}

export const getGists = () => {
  return (state) => state.gistsReducer
}
