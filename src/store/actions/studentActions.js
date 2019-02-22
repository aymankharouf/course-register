import { db } from '../../db/firebase'
export const register = (student) => {
  return (dispatch) => {
    if (!student.name) {
      dispatch({type: 'REGISTER_ERROR', message: 'please specify your name'})
      return
    }
    if (!student.email) {
      dispatch({type: 'REGISTER_ERROR', message: 'please specify your email'})
      return
    }
    if (!student.mobile) {
      dispatch({type: 'REGISTER_ERROR', message: 'please specify your mobile'})
      return
    }
    db.collection('students').add({
      ...student,
      createdAt: new Date()
    }).catch((err) => {
    //handle offline
      dispatch({type: 'REGISTER_ERROR', message: err.message})
    })
  }
}




