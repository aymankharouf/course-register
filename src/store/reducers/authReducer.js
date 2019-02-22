const authReducer = (state = {}, action) => {
  switch (action.type){
    case 'LOGIN_ERROR':
      console.log('login failed', action.err.message)
      return {
        ...state,
        uid: '',
        error: action.err.message
      }
    case 'RESTORE_UID':
      console.log('restore uid')
      if (action.user) {
        return {
          ...state,
          uid: action.user.uid,
          error: ''
        }
      } else {
        return {
          ...state,
          uid: '',
          error: ''
      }
    }
    default:
      return state
  }
}

export default authReducer