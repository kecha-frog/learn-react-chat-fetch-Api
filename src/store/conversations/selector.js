export const getChatList = () => {
  return (state) => state.conversationsReducer
}

export const getChatValue = (roomId) => {
  return (state) =>
    state.conversationsReducer.find(
      (conversation) => conversation.title === roomId,
    )?.value || ""
}
