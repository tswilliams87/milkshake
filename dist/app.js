"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
(function () {
  var items = [{
    id: 0,
    name: 'Saba',
    age: 25,
    job: 'Phillippines',
    images: ['images/testpic4.jpg', 'images/testpic2.jpg', 'images/testpic1.jpg'],
    distance: 25,
    description: 'Swipe for me! You’ll find me very ap-peel-ing'
  }, {
    id: 1,
    name: 'Plantain',
    age: 28,
    job: 'Nicaragua',
    images: ['images/testpic2.jpg', 'images/testpic4.jpg'],
    distance: 4,
    description: 'Lorem ipsum dolor sit amet, quo ad cibo viris legimus, simul delicata constituto per cu. Pro an commodo liberavisse, cu mutat sensibus tractatos est, animal similique ei nec. Et est molestie phaedrum, ut eam quot meliore. Usu hendrerit complectitur at, at iriure habemus facilisis sit. An eos probo graece.Propriae contentiones eu ius, pro eu ignota liberavisse disputationi, duo ea docendi consectetuer. Cum posse semper ea, ius invidunt qualisque scriptorem cu, ullum reprehendunt pro eu. Illud erant reformidans usu in. Ad vim quem choro iracundia. Ius in case mnesarchum.Duis signiferumque sed cu. Ut duo error congue intellegebat, fugit nostrud urbanitas ei has. Copiosae dissentias te eam, dicta efficiendi mea ad. Numquam persequeris te sea, ad populo graeci per, et mea aperiam noluisse interesset.Malorum abhorreant pri eu, no vidit quaeque mei, usu in dico meliore philosophia. Causae verterem pri in, te case suavitate nam. In ius ignota sanctus. Propriae repudiandae ad sit, gubergren ullamcorper usu ei. Ne vis fierent mediocritatem. Id nominati maluisset ius, soluta graece lobortis ut his, vocibus copiosae placerat est ad.Duo alia ferri impetus ei, deleniti scriptorem comprehensam ius an. Mea ne labore oblique adolescens. Ne velit albucius salutatus quo, cum iudico eripuit bonorum ad. Stet suscipit sea ad. Nec prompta suscipit mandamus at.'
  }, {
    id: 2,
    name: 'Banan',
    age: 21,
    job: 'Finnland',
    images: ['images/testpic3.jpg', 'images/testpic2.jpg'],
    distance: 9,
    description: 'I like fruits!'
  }, {
    id: 3,
    name: 'Actually an orange',
    age: 12,
    job: 'Scammer',
    images: ['images/testpic1.jpg', 'images/testpic2.jpg'],
    distance: 2455,
    description: 'Follow me on my totally banana-related Instagram 📸'
  }];
  var dataProvider = /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!true) {
            _context.next = 4;
            break;
          }
          return _context.delegateYield(items, "t0", 2);
        case 2:
          _context.next = 0;
          break;
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })();
  function adjustSwipeItems() {
    var top = document.querySelector('.item--top');
    var next = document.querySelector('.item--next');
    next.classList.add('hidden');
    top.style.cssText = '';
    top.style.position = 'relative';
    var topR = top.getBoundingClientRect();
    top.style.position = '';
    next.classList.remove('hidden');
    top.style.top = next.style.top = "".concat(topR.top, "px");
    top.style.width = next.style.width = "".concat(topR.width, "px");
    top.style.height = next.style.height = "".concat(topR.height, "px");
    top.onResize();
    next.onResize();
  }
  function updateCards(event) {
    var top = document.querySelector('.item--top');
    window.ga && ga('send', 'event', "item-".concat(top.data.id), event.detail);
    var next = document.querySelector('.item--next');
    var details = document.querySelector('tinderforbananas-details');
    top.style.transform = '';
    top.selected = 0;
    top.data = next.data;
    next.data = dataProvider.next().value;
  }
  function hookupButtons() {
    var details = document.querySelector('.view--details');
    document.querySelectorAll('.control--like').forEach(function (btn) {
      return btn.addEventListener('click', function (_) {
        var p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(function (_) {
          return document.querySelector('.item--top').like();
        });
      });
    });
    document.querySelectorAll('.control--nope').forEach(function (btn) {
      return btn.addEventListener('click', function (_) {
        var p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(function (_) {
          return document.querySelector('.item--top').nope();
        });
      });
    });
    document.querySelectorAll('.control--superlike').forEach(function (btn) {
      return btn.addEventListener('click', function (_) {
        var p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(function (_) {
          return document.querySelector('.item--top').superlike();
        });
      });
    });
  }
  function showDetails(event) {
    var swipelist = document.querySelector('.view--swipelist');
    var data = swipelist.querySelector('.item--top').data;
    window.ga && ga('send', 'event', "item-".concat(data.id), 'details');
    var details = document.querySelector('.view--details');
    var detailsText1 = details.querySelector('.item__details');
    var detailsText2 = details.querySelector('.description');
    var detailsNav = details.querySelector('nav');
    var carousel = document.querySelector('tinderforbananas-carousel');
    var image = document.querySelector('.view--swipelist .item--top picture');
    details.querySelector('tinderforbananas-details').data = data;

    // Let’s do FLIP!
    var start = image.getBoundingClientRect();
    swipelist.classList.add('overlaid');
    details.classList.remove('hidden');
    var target = carousel.getBoundingClientRect();
    carousel.style.transformOrigin = 'top left';
    carousel.style.transform = "scaleX(".concat(start.width / target.width, ") scaleY(").concat(start.height / target.height, ") translate(").concat(start.left - target.left, "px, ").concat(start.top - target.top, "px)");
    return requestAnimationFramePromise().then(function (_) {
      return requestAnimationFramePromise();
    }).then(function (_) {
      carousel.style.transition = 'transform 0.15s ease-in-out';
      carousel.style.transform = 'initial';
      detailsText1.style.transform = 'initial';
      detailsText2.style.transform = 'initial';
      detailsNav.style.transform = 'initial';
      return transitionEndPromise(carousel);
    }).then(function (_) {
      carousel.style.transform = '';
      carousel.style.transition = '';
      carousel.style.transformOrigin = '';
    });
  }
  function hideDetails(event) {
    var swipelist = document.querySelector('.view--swipelist');
    var details = document.querySelector('.view--details');
    var detailsText1 = details.querySelector('.item__details');
    var detailsText2 = details.querySelector('.description');
    var detailsNav = details.querySelector('nav');
    var carousel = document.querySelector('tinderforbananas-carousel');
    var item = document.querySelector('.view--swipelist .item--top');
    var image = document.querySelector('.view--swipelist .item--top picture');
    item.selected = event && event.detail.selected || 0;
    var start = carousel.getBoundingClientRect();
    swipelist.classList.remove('overlaid');
    details.classList.add('hidden');
    var target = image.getBoundingClientRect();
    swipelist.classList.add('overlaid');
    details.classList.remove('hidden');
    item.style.overflow = 'visible';
    carousel.style.transformOrigin = 'top left';
    carousel.style.transition = 'transform 0.15s ease-in-out';
    return requestAnimationFramePromise().then(function (_) {
      return requestAnimationFramePromise();
    }).then(function (_) {
      carousel.style.transform = "scaleX(".concat(target.width / start.width, ") scaleY(").concat(target.height / start.height, ") translate(").concat(target.left - start.left, "px, ").concat(target.top - start.top, "px)");
      detailsText1.style.transform = '';
      detailsText2.style.transform = '';
      detailsNav.style.transform = '';
      return transitionEndPromise(carousel);
    }).then(function (_) {
      carousel.style.transform = '';
      carousel.style.transition = '';
      carousel.style.transformOrigin = '';
      item.style.overflow = 'hidden';
      details.classList.add('hidden');
      swipelist.classList.remove('overlaid');
    });
  }
  function copyControls() {
    document.querySelectorAll('.view--details .control').forEach(function (btn) {
      var actionName = Array.from(btn.classList).find(function (name) {
        return /(like|nope)/.test(name);
      });
      var svg = document.querySelector(".view--swipelist .".concat(actionName, " svg")).cloneNode(true);
      btn.appendChild(svg);
    });
  }
  function installServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('sw.js');
  }
  function init() {
    var top = document.querySelector('.item--top');
    top.data = dataProvider.next().value;
    top.addEventListener('swipe', updateCards);
    top.addEventListener('details', showDetails);
    var next = document.querySelector('.item--next');
    next.data = dataProvider.next().value;
    var details = document.querySelector('tinderforbananas-details');
    details.addEventListener('dismiss', hideDetails);
    copyControls();
    adjustSwipeItems();
    window.addEventListener('resize', adjustSwipeItems);
    hookupButtons();
    installServiceWorker();
  }
  document.addEventListener('DOMContentLoaded', init);
})();