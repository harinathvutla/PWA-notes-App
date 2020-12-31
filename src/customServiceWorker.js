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
