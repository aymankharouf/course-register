const projectReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_PROJECT':
      const project = {id:action.change.doc.id, ...action.change.doc.data()}
      return [...state, project]
    case 'DELETE_PROJECT':
      const newState = state.filter(id => id !== action.change.doc.id)
      return newState
    case 'CREATE_PROJECT_ERROR':
      console.log('created project error', action.err)
      break;
    default:
      return state
  }
}

export default projectReducer