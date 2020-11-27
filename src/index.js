import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import notesReducer from '../src/store/notesReducer';
import searchReducer from '../src/store/searchReducer';

const rootReducer = combineReducers({notesReducer, searchReducer});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

/* function notifyMe() {
	if (!("Notification" in window)) {
	  alert("This browser does not support system notifications");
	}
	else if (Notification.permission === "granted") {
		console.log('granted');
	  notify();
	}
	else if (Notification.permission !== 'denied') {
	  Notification.requestPermission().then(function (permission) {
		if (permission === "granted") {
			console.log(permission);
		  notify();
		}
	  });
	}
	
	function notify() {
	  let notification = new Notification('TITLE OF NOTIFICATION');
 
	}
  
  }
  notifyMe(); */