import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyBqtmdlVNBaPMvtSXnZzzwN8fjVt7F0wLE',
    authDomain: 'unichat-1eb50.firebaseapp.com',
    projectId: 'unichat-1eb50',
    storageBucket: 'unichat-1eb50.appspot.com',
    messagingSenderId: '725151750505',
    appId: '1:725151750505:web:e75ba19027ea80fe9605f8',
  })
  .auth()
