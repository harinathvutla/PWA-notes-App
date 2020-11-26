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
  "/PWA-notes-App/precache-manifest.dc0f895bfc340930670cdae9bc3d7e73.js"
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
self.addEventListener( 'fetch', e => {
    console.log(`interception ${e.request.method} to ${e.request.url}`);
})

// Caching the files for offline purpose

self.addEventListener('install', function(event) {
    event.waitUntil(
     caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/static/css/main.1f170ed0.chunk.css',
          '/static/js/2.77d9dfa4.chunk.js',
          '/static/js/main.ec0c4f59.chunk.js',
          'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
          'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin',
          'https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXiWtFCc.woff2',
          'https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2',
          'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/themes/default/assets/fonts/icons.woff2',
          'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/themes/default/assets/fonts/outline-icons.woff2'
        ])
     })
     );
  });
  