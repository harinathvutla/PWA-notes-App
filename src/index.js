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

/*  function notifyMe() {
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
  notifyMe();  */

  function urlBase64ToUint8Array(base64String) {
	const padding = '='.repeat((4 - base64String.length % 4) % 4);
	const base64 = (base64String + padding)
	  .replace(/-/g, '+')
	  .replace(/_/g, '/');
   
	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);
   
	for (let i = 0; i < rawData.length; ++i) {
	  outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
  } 

  const vapidPublicKey = "BImYznJgvAQVQkKk_o7xnkEoUmGx8g6kVh7hT8rpt_0oJX7pkVrM1q1QXivTn6JRarWnrYHwT_EHwMLCMd-kUJE";
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey); 

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
    .then(function(registration) {
      console.log('A service worker is active:', registration.active);
  
      // At this point, you can call methods that require an active
      // service worker, like registration.pushManager.subscribe()
    });
  } else {
    console.log('Service workers are not supported.');
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration=> {
		console.log('registration', registration);
		return registration.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: convertedVapidKey
		});

/*         return registration.pushManager.getSubscription().then((subscription)=> {
 
        }); */
    });
  }