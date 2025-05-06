"use strict";

(function () {
  var VERSION = '1.1.5';
  var files = ['images/bigbanan.jpg', 'images/banana.png', 'images/banana.svg', 'images/testpic1.jpg', 'images/testpic2.jpg', 'images/testpic3.jpg', 'images/testpic4.jpg', 'app.js', 'ce-carousel.js', 'ce-details.js', 'ce-item.js', 'custom-elements.min.js', 'helper.js', './', 'manifest.json', 'styles.css'];
  self.oninstall = function (event) {
    return event.waitUntil(caches.open("tinderforbananas-".concat(VERSION)).then(function (cache) {
      return cache.addAll(files);
    }));
  };
  self.onactivate = function (event) {
    return event.waitUntil(caches.keys().then(function (cacheNames) {
      return Promise.all(cacheNames.map(function (c) {
        return c.split('-');
      }).filter(function (c) {
        return c[0] === 'tinderforbananas';
      }).filter(function (c) {
        return c[1] !== VERSION;
      }).map(function (c) {
        return caches["delete"](c.join('-'));
      }));
    }));
  };
  self.onfetch = function (event) {
    return event.respondWith(caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }));
  };
})();