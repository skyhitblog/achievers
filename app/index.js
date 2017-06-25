import React, {Component} from 'react'
import * as firebase from 'firebase'
import Home from './screens/home'

const firebaseConfig = {
    apiKey: "AIzaSyBEJV8Xq94wpDSKuLFssdPDRoRUIGS-xTU",
    authDomain: "achievers-60698.firebaseapp.com",
    databaseURL: "https://achievers-60698.firebaseio.com",
	projectId: "achievers-60698",
    storageBucket: "achievers-60698.appspot.com",
    messagingSenderId: "652031942889"
}

firebase.initializeApp(firebaseConfig)

export default class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}