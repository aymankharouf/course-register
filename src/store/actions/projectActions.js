import db from '../../db/firebase'
export const createProject = (project) => {
  return (dispatch) => {
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

export const getProjects = () => {
  return (dispatch) => {
    const projects = []
    db.collection('projects').get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        projects.push({id:doc.id, ...doc.data()})
      })
      dispatch({type: 'GET_PROJECTS', projects})
    }).catch((err) => {
      dispatch({type: 'GET_PROJECTS_ERROR', err})
    })
  }
}