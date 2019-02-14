const authReducer = (state = {}, action) => {
  switch (action.type){
    case 'LOGIN_ERROR':
      console.log('login failed', action.err.message)
      return {
        ...state,
        uid: '',
        firstName: '',
        lastName: '',
        initials: '',
      authError: action.err.message
      }
    case 'SIGNUP_ERROR':
      console.log('signup failed', action.err.message)
      return {
        ...state,
        uid: '',
        firstName: '',
        lastName: '',
        initials: '',
      authError: action.err.message
      }
    case 'RESTORE_UID':
      console.log('restore uid')
      if (action.profile) {
        return {
          ...state,
          uid: action.profile.uid,
          firstName: action.profile.firstName,
          lastName: action.profile.lastName,
          initials: action.profile.initials,
          authError: ''
        }
      } else {
        return {
          ...state,
          uid: '',
          firstName: '',
          lastName: '',
          initials: '',
          authError: ''
      }
    }
    default:
      return state
  }
}

export default authReducer