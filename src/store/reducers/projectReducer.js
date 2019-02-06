const initState = {
  projects: [
    {id: '1', title: '1st project title', content: '1st project content'},
    {id: '2', title: '2nd project title', content: '2nd project content'},
    {id: '3', title: '3rd project title', content: '3rd project content'}

  ]
}
const projectReducer = (state = initState, action) => {
  switch (action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      break;
    case 'CREATE_PROJECT_ERROR':
      console.log('created project error', action.err)
      break;
    default:
      console.log('default')
  }
  return state
}

export default projectReducer