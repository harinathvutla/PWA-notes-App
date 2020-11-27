/* function urlBase64ToUint8Array(base64String) {
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
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey); */

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

navigator.serviceWorker.ready.then(registration=> {
    console.log('registration', registration);
    return registration.pushManager.getSubscription().then((subscription)=> {
        return registration.pushManager.subscribe({
            userVisibleOnly: true,
         //   applicationServerKey: convertedVapidKey
        });
    });
});


self.addEventListener( 'fetch', e => {
    console.log(`interception ${e.request.method} to ${e.request.url}`);
});
  