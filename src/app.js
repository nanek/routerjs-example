var router = require('./router');
var routes = require('./routes');
var util = require('./util');

// Listen for any errors `swallowed` by promises.
// https://github.com/tildeio/rsvp.js/#error-handling
//
RSVP.on('error', function(reason) {
  util.log(reason);
});

// router.js by design does implement a route hander lookup.
// Here is an example of one simple implementation.
//
router.getHandler = function(name) {
  if (routes[name]) {
    return routes[name];
  } else {
    util.log("Missing route for " + name);
  }
};

// router.js by design does not listen to hash changes.
// Here is a simple implementation.
// Listen for URL changes, and tell the router to handle a URL.
// https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange
//
function locationHashChanged() {
  var hash = location.hash.slice(1);
  router.handleURL(hash);
}

window.onhashchange = locationHashChanged;

// Render initial route.
locationHashChanged();
