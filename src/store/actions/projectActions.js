import db from '../../db/firebase'
export const createProject = (project) => {
  return (dispatch, getState) => {
    db.collection('projects').add({
      ...project,
      autherFirstName: 'Ayman',
      autherLastName: 'Wafa'
    }).then(() => {
      dispatch({type: 'CREATE_PROJECT', project})
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
  }
}