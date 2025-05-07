(function () {
  const VERSION = '{%VERSION%}';
 const files = [
  '/app/images/bigbanan.jpg',
  '/app/images/banana.png',
  '/app/images/banana.svg',
  '/app/images/testpic1.jpg',
  '/app/images/testpic2.jpg',
  '/app/images/testpic3.jpg',
  '/app/images/testpic4.jpg',
  '/app/app.js',
  '/app/ce-carousel.js',
  '/app/ce-details.js',
  '/app/ce-item.js',
  '/app/custom-elements.min.js',
  '/app/helper.js',
  '/app/manifest.json',
  '/app/styles.css',
  '/app/index.html',
  '/app/landing.html',
  '/app/signup.html'
];


  self.oninstall = event => event.waitUntil(
    caches.open(`tinderforbananas-${VERSION}`)
      .then(cache => cache.addAll(files))
  );

  self.onactivate = event => event.waitUntil(
    caches.keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .map(c => c.split('-'))
            .filter(c => c[0] === 'tinderforbananas')
            .filter(c => c[1] !== VERSION)
            .map(c => caches.delete(c.join('-')))
        )
      )
  );

  self.onfetch = event => event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
})();