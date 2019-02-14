import { db } from '../../db/firebase'
export const createProject = (project) => {
  return (dispatch, getState) => {
    db.collection('projects').add({
      ...project,
      authorFirstName: getState().auth.firstName,
      authorLastName: getState().auth.lastName,
      authorId: getState().auth.uid,
      createdAt: new Date()
    }).catch((err) => {
      //handle offline
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
  }
}



