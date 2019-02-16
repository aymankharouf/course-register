const notificationReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_NOTIFICATION':
      const notification = {id:action.change.doc.id, ...action.change.doc.data()}
      return [...state, notification]
    case 'DELETE_NOTIFICATION':
      const newState = state.filter(id => id !== action.change.doc.id)
      return newState
    case 'CREATE_NOTIFICATION_ERROR':
      console.log('created notification error', action.err)
      break;
    default:
      return state
  }
}

export default notificationReducer