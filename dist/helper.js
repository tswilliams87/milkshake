"use strict";

window.requestAnimationFramePromise = function (_) {
  return new Promise(requestAnimationFrame);
};
window.transitionEndPromise = function (elem) {
  return new Promise(function (resolve) {
    elem.addEventListener('transitionend', resolve, {
      once: true
    });
  });
};
window.lerp = function (minIn, maxIn, minOut, maxOut) {
  var opts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var rangeIn = maxIn - minIn;
  var rangeOut = maxOut - minOut;
  return function (v) {
    v = opts.absolute ? Math.abs(v) : v;
    var p;
    if (opts.noClamp) p = (v - minIn) / rangeIn;else p = Math.max(Math.min((v - minIn) / rangeIn, 1), 0);
    return p * rangeOut + minOut;
  };
};