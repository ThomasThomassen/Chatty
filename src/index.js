import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { Provider } from 'react-redux';
import store from "./store";

const firebaseConfig = {
  //INSERT FIREBASE CONFIG
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);