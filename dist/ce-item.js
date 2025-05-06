"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
customElements.define('tinderforbananas-item', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this._dragging = false;
    _this.startX = 0;
    _this.startY = 0;
    _this._startDrag = _this._startDrag.bind(_this);
    _this._stopDrag = _this._stopDrag.bind(_this);
    _this._drag = _this._drag.bind(_this);
    _this._data = {};
    _this._selected = 0;
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.addEventListener('mousedown', this._startDrag);
      document.addEventListener('mouseup', this._stopDrag);
      document.addEventListener('mousemove', this._drag);
      this.addEventListener('touchstart', this._startDrag);
      document.addEventListener('touchend', this._stopDrag);
      document.addEventListener('touchmove', this._drag);
      this._actions = Array.from(this.querySelectorAll('.action'));
      this.onResize();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this._gBCR = this.getBoundingClientRect();
      this._rotationLerp = lerp(0, this._gBCR.width / 2, 0, 10, {
        noClamp: true
      });
      this._nopeOpacityLerp = lerp(0, -this._gBCR.width / 3, 0, 1);
      this._likeOpacityLerp = lerp(0, this._gBCR.width / 3, 0, 1);
      this._superlikeOpacityLerp = lerp(-this._gBCR.height / 8, -this._gBCR.height / 8 - this._gBCR.height / 3, 0, 1);
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(value) {
      this._data = value;
      this._updateBindings();
    }
  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    },
    set: function set(value) {
      this._selected = value;
      this._updateBindings();
    }
  }, {
    key: "_updateBindings",
    value: function _updateBindings() {
      this.querySelector('.item__details__name').textContent = "".concat(this.data.name);
      this.querySelector('.item__details__age').textContent = "".concat(this.data.age);
      this.querySelector('.item__details__job').textContent = "".concat(this.data.job);
      this.querySelector('picture').style.backgroundImage = "url('".concat(this.data.images[this.selected], "')");
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      this._inmovable = newValue !== null;
    }
  }, {
    key: "_startDrag",
    value: function _startDrag(event) {
      if (this._inmovable) return;
      this._dragging = true;
      this.startX = event.clientX || event.touches[0].clientX;
      this.startY = event.clientY || event.touches[0].clientY;
      event.preventDefault();
    }
  }, {
    key: "_stopDrag",
    value: function _stopDrag(event) {
      if (this._inmovable) return;
      if (!this._dragging) return;
      this._dragging = false;
      var deltaX = (event.clientX || event.changedTouches[0].clientX) - this.startX;
      var deltaY = (event.clientY || event.changedTouches[0].clientY) - this.startY;
      this._actions.forEach(function (a) {
        return a.style.opacity = 0;
      });
      event.preventDefault();
      if (this._superlikeOpacityLerp(deltaY) >= 1) return this.superlike();
      if (this._nopeOpacityLerp(deltaX) >= 1) return this.nope();
      if (this._likeOpacityLerp(deltaX) >= 1) return this.like();
      if (deltaX === 0 && deltaY === 0) return this.dispatchEvent(new CustomEvent('details', {
        detail: this.data,
        bubbles: true
      }));
      return this._animate('initial');
    }
  }, {
    key: "_drag",
    value: function _drag(event) {
      if (this._inmovable) return;
      if (!this._dragging) return;
      var deltaX = (event.clientX || event.touches[0].clientX) - this.startX;
      var deltaY = (event.clientY || event.touches[0].clientY) - this.startY;
      this.style.transform = "rotate(".concat(this._rotationLerp(deltaX), "deg) translate(").concat(deltaX, "px, ").concat(deltaY, "px)");
      this._actions.find(function (a) {
        return a.classList.contains('action--nope');
      }).style.opacity = this._nopeOpacityLerp(deltaX);
      this._actions.find(function (a) {
        return a.classList.contains('action--like');
      }).style.opacity = this._likeOpacityLerp(deltaX);
      this._actions.find(function (a) {
        return a.classList.contains('action--superlike');
      }).style.opacity = this._superlikeOpacityLerp(deltaY);
      event.preventDefault();
    }
  }, {
    key: "_animate",
    value: function _animate(target) {
      var _this2 = this;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.style.transition = 'transform 0.3s ease-in-out';
      return requestAnimationFramePromise().then(function (_) {
        _this2.style.transform = target;
        return transitionEndPromise(_this2);
      }).then(function (_) {
        _this2.style.transition = 'initial';
      });
    }
  }, {
    key: "like",
    value: function like(item) {
      var _this3 = this;
      return this._animate('translateX(200%)', {
        next: true
      }).then(function (_) {
        return _this3.dispatchEvent(new CustomEvent('swipe', {
          detail: 'like'
        }));
      });
    }
  }, {
    key: "nope",
    value: function nope(item) {
      var _this4 = this;
      return this._animate('translateX(-200%)', {
        next: true
      }).then(function (_) {
        return _this4.dispatchEvent(new CustomEvent('swipe', {
          detail: 'nope'
        }));
      });
    }
  }, {
    key: "superlike",
    value: function superlike(item) {
      var _this5 = this;
      return this._animate('translateY(-200%)', {
        next: true
      }).then(function (_) {
        return _this5.dispatchEvent(new CustomEvent('swipe', {
          detail: 'superlike'
        }));
      });
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['inmovable'];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));