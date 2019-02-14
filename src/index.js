import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { db, auth } from './db/firebase'

const store = createStore(rootReducer, applyMiddleware(thunk))

// real-time listener
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('users').doc(user.uid).get().then((doc) => {
      if (doc.exists) {
        const profile = {
          uid: user.uid,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          initials: doc.data().initials
        }
        store.dispatch({type: 'RESTORE_UID', profile})
      }
    })
    
    db.collection('projects').onSnapshot(snapshot => {
      let changes = snapshot.docChanges()
      changes.forEach(change => {
        switch (change.type) {
          case 'added':
            store.dispatch({type: 'ADD_PROJECT', change})
            break
          case 'removed':
            store.dispatch({type: 'DELETE_PROJECT', change})
            break
          default:
            console.log('uncatched type')
        }
      })
    }, err => console.log(err.message))
  } else {
    store.dispatch({type: 'RESTORE_UID', user})
  }
})
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
