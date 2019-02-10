const projectReducer = (state = [], action) => {
  switch (action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      break;
    case 'CREATE_PROJECT_ERROR':
      console.log('created project error', action.err)
      break;
    case 'GET_PROJECTS':
      return action.projects
    case 'GET_PROJECTS_ERROR':
      console.log('get project err', action.err)
      break;
    default:
      console.log('default')
  }
  return state
}

export default projectReducer