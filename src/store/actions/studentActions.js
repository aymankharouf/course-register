import { db } from '../../db/firebase'
export const register = (student) => {
  return (dispatch) => {
    db.collection('students').add({
      ...student,
      createdAt: new Date()
    }).catch((err) => {
      //handle offline
      dispatch({type: 'REGISTER_ERROR', err})
    })
  }
}



