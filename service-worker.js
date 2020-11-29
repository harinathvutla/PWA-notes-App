/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/PWA-notes-App/precache-manifest.916db239f84531ab84fc45e5602120fc.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/PWA-notes-App/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
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

/* if ('serviceWorker' in navigator) {
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
        return registration.pushManager.getSubscription().then((subscription)=> {
            return registration.pushManager.subscribe({
                userVisibleOnly: true,
             //   applicationServerKey: convertedVapidKey
            });
        });
    });
  } */


self.addEventListener( 'fetch', e => {
    console.log(`interception ${e.request.method} to ${e.request.url}`);
});
  