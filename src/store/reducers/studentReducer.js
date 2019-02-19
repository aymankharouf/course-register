const studentReducer = (state = [], action) => {
  switch (action.type){
    case 'REGISTER':
      const student = {id:action.change.doc.id, ...action.change.doc.data()}
      return [...state, student]
    case 'UNREGISTER':
      const newState = state.filter(id => id !== action.change.doc.id)
      return newState
    case 'REGISTER_ERROR':
      console.log('register error', action.err)
      break;
    default:
      return state
  }
}

export default studentReducer