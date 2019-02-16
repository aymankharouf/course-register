import { auth, db } from '../../db/firebase'
export const login = (user) => {
  return (dispatch) => {
    console.log('user =', user)
    auth.signInWithEmailAndPassword(user.email, user.password)
      .catch(err => dispatch({type: 'LOGIN_ERROR', err}))
  }
}

export const logout = () => {
  return (dispatch) => {
    auth.signOut().catch(err => dispatch({type: 'LOGOUT_ERROR', err}))
  }
}

export const signup = (user) => {
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        return db.collection('users').doc(res.user.uid).set({
          firstName: user.firstName,
          lastName: user.lastName,
          initials: user.firstName[0] + user.lastName[0]
        })
      }).catch(err => dispatch({type: 'SIGNUP_ERROR', err}))
  }
}