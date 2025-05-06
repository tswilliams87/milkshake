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
customElements.define('tinderforbananas-carousel', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    var mo = new MutationObserver(_this.updateChildren.bind(_this));
    mo.observe(_this, {
      childList: true
    });
    _this.selected = 0;
    _this._startDrag = _this._startDrag.bind(_this);
    _this._stopDrag = _this._stopDrag.bind(_this);
    _this._drag = _this._drag.bind(_this);
    _this._dragging = false;
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.updateChildren();
      this.addEventListener('mousedown', this._startDrag);
      this.addEventListener('touchstart', this._startDrag);
      document.addEventListener('mousemove', this._drag);
      document.addEventListener('touchmove', this._drag);
      document.addEventListener('mouseup', this._stopDrag);
      document.addEventListener('touchend', this._stopDrag);
    }
  }, {
    key: "_startDrag",
    value: function _startDrag(event) {
      this._dragging = true;
      this._startX = event.clientX || event.touches[0].clientX;
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "_drag",
    value: function _drag(event) {
      if (!this._dragging) return;
      var deltaX = (event.clientX || event.touches[0].clientX) - this._startX;
      var maxDelta = this._width * (this._images.length - this.selected);
      if (this.selected === 0 && deltaX > 0) deltaX = 0;
      if (this.selected === this._images.length - 1 && deltaX < 0) deltaX = 0;
      this._images.forEach(function (img) {
        return img.style.transform = "translateX(".concat(deltaX, "px)");
      });
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "_stopDrag",
    value: function _stopDrag(event) {
      var _this2 = this;
      if (!this._dragging) return;
      this._dragging = false;
      var deltaX = (event.clientX || event.changedTouches[0].clientX) - this._startX;
      if (Math.abs(deltaX) < 10) return this.dispatchEvent(new CustomEvent('dismiss', {
        detail: {
          selected: this.selected
        },
        bubbles: true
      }));
      if (this.selected === 0 && deltaX > 0) deltaX = 0;
      if (this.selected === this._images.length - 1 && deltaX < 0) deltaX = 0;
      var idxOffset = 0;
      if (deltaX > this._width / 4) idxOffset = 1;
      if (deltaX < -this._width / 4) idxOffset = -1;
      this.selected -= idxOffset;
      var r1 = this._images[0].getBoundingClientRect();
      this.updateChildren();
      var r2 = this._images[0].getBoundingClientRect();
      this._images.forEach(function (img) {
        return img.style.transform = "translateX(".concat(r1.left - r2.left, "px)");
      });
      requestAnimationFramePromise().then(function (_) {
        return requestAnimationFramePromise();
      }).then(function (_) {
        _this2._images.forEach(function (img) {
          img.style.transition = 'transform 0.1s ease-in-out';
        });
      }).then(function (_) {
        return requestAnimationFramePromise();
      }).then(function (_) {
        return requestAnimationFramePromise();
      }).then(function (_) {
        _this2._images.forEach(function (img) {
          return img.style.transform = '';
        });
        return transitionEndPromise(_this2);
      }).then(function (_) {
        return _this2._images.forEach(function (img) {
          return img.style.transition = '';
        });
      });
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "updateChildren",
    value: function updateChildren() {
      this._images = this.querySelectorAll('.carousel__item');
      if (this._images.length <= 0) return;
      for (var i = 0; i < this._images.length; i++) {
        this._images[i].style.left = "".concat(100 * (i - this.selected), "%");
        this._images[i].style.transform = '';
      }
      var last = this._images[this._images.length - 1];
      var rect = last.getBoundingClientRect();
      this._width = rect.width;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));