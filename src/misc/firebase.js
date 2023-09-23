import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBeBZsmKqrrfqm09Ljo-dCHMGQosZnx-oI',
  authDomain: 'chat-web-app-d7e15.firebaseapp.com',
  databaseURL: 'https://chat-web-app-d7e15-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-d7e15',
  storageBucket: 'chat-web-app-d7e15.appspot.com',
  messagingSenderId: '810768504740',
  appId: '1:810768504740:web:eaa0bea83008b8705a5331',
};

const app = firebase.initializeApp(config);
export const auth = app.auth(); //give auth object that we can use to interact with firebase
export const database =app.database();
