import { db } from '../../db/firebase'
export const createProject = (project) => {
  return (dispatch) => {
    db.collection('projects').add({
      ...project,
      autherFirstName: 'Ayman',
      autherLastName: 'Wafa'
    }).catch((err) => {
      //handle offline
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
  }
}



