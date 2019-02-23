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
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// real-time listener
auth.onAuthStateChanged(user => {
  store.dispatch({type: 'RESTORE_UID', user})
  if (user) {
    db.collection('notifications').orderBy('time', 'desc').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        switch (change.type) {
          case 'added':
            store.dispatch({type: 'ADD_NOTIFICATION', change})
            break
          case 'removed':
            store.dispatch({type: 'DELETE_NOTIFICATION', change})
            break
          default:
            console.log('uncatched type')
        }
      })
    }, err => console.log(err.message))
    db.collection('students').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        switch (change.type) {
          case 'added':
            store.dispatch({type: 'REGISTER', change})
            break
          case 'removed':
            store.dispatch({type: 'UNREGISTER', change})
            break
          default:
            console.log('uncatched type')
        }
      })
    }, err => console.log(err.message))
  } 
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
