import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import * as firebase from 'firebase'
import Login from './screens/login'
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

const RouteConfigs = {
  Login: {screen:Login},
  Home: {screen:Home},
}

const StackNavigatorConfig = {
  headerMode:'none',
}

export default StackNavigator(RouteConfigs, StackNavigatorConfig)