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
  "/PWA-notes-App/precache-manifest.b9bf0fd16ec2232ae3874997aa5328a0.js"
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

importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

self.addEventListener( 'fetch', e => {
    console.log(`interception ${e.request.method} to ${e.request.url}`);
});
  
self.addEventListener('notificationclick', function(event) {
	console.log('On notification click: ', event.notification.tag);
	console.log('On notification: ', event.notification);
	event.notification.close();

	event.waitUntil(clients.matchAll({
	  type: "window"
	}).then(function(clientList) {
	  for (var i = 0; i < clientList.length; i++) {
		var client = clientList[i];
		if (client.url == '/' && 'focus' in client)
		  return client.focus();
	  }
	  if (clients.openWindow)
		return clients.openWindow('/');
	}));
  });
