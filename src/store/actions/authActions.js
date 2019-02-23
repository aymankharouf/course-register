import { auth } from '../../db/firebase'
export const login = (user) => {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(user.username, user.password)
      .catch(err => dispatch({type: 'LOGIN_ERROR', err}))
  }
}

export const logout = () => {
  return (dispatch) => {
    auth.signOut().catch(err => dispatch({type: 'LOGOUT_ERROR', err}))
  }
}

