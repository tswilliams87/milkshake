class TinderForBananasItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          will-change: transform;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
          background: white;
          touch-action: pan-y;
        }

        picture {
          display: block;
          background-size: cover;
          background-position: center;
          height: 75%;
        }

        .item__details {
          padding: 10px;
          font-family: 'Nunito Sans', sans-serif;
        }
      </style>
      <picture></picture>
      <div class="item__details">
        <span class="item__details__name"></span>,
        <span class="item__details__age"></span><br />
        <span class="item__details__job"></span><br />
        <span class="item__details__distance"></span>
      </div>
    `;

    this._startX = 0;
    this._currentX = 0;
    this._dragging = false;

    this._onPointerDown = this._onPointerDown.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);
  }

  connectedCallback() {
    this.addEventListener('pointerdown', this._onPointerDown);
    this.addEventListener('pointermove', this._onPointerMove);
    this.addEventListener('pointerup', this._onPointerUp);
    this.addEventListener('pointercancel', this._onPointerUp);
  }

  disconnectedCallback() {
    this.removeEventListener('pointerdown', this._onPointerDown);
    this.removeEventListener('pointermove', this._onPointerMove);
    this.removeEventListener('pointerup', this._onPointerUp);
    this.removeEventListener('pointercancel', this._onPointerUp);
  }

  set data(val) {
    this._data = val;
    this._updateBindings();
  }

  get data() {
    return this._data;
  }

  get selected() {
    return this._selected || 0;
  }

  set selected(val) {
    this._selected = val;
    this._updateBindings();
  }

  _updateBindings() {
    const d = this.data;
    if (!d) return;

    const root = this.shadowRoot;

    root.querySelector('.item__details__name').textContent = d.name;
    root.querySelector('.item__details__age').textContent = d.age;
    root.querySelector('.item__details__job').textContent = d.job;
    root.querySelector('.item__details__distance').textContent = `${d.distance}km away`;

    const picture = root.querySelector('picture');
    if (d.images && d.images.length > 0) {
      picture.style.backgroundImage = `url('${d.images[this.selected]}')`;
    }
  }

  _onPointerDown(event) {
    this._startX = event.clientX;
    this._dragging = true;
    this.setPointerCapture(event.pointerId);
  }

  _onPointerMove(event) {
    if (!this._dragging) return;
    this._currentX = event.clientX - this._startX;
    this.style.transform = `translateX(${this._currentX}px) rotate(${this._currentX * 0.05}deg)`;
  }

  _onPointerUp(event) {
    if (!this._dragging) return;
    this._dragging = false;
    this.releasePointerCapture(event.pointerId);

    if (Math.abs(this._currentX) > 100) {
      this.style.transition = 'transform 0.3s ease-out';
      this.style.transform = `translateX(${this._currentX > 0 ? 1000 : -1000}px) rotate(${this._currentX * 0.1}deg)`;
      this.dispatchEvent(new CustomEvent('swipe', { detail: { direction: this._currentX > 0 ? 'right' : 'left' } }));
    } else {
      this.style.transition = 'transform 0.3s ease-out';
      this.style.transform = 'translateX(0px) rotate(0deg)';
    }

    this._currentX = 0;
  }
}

customElements.define('tinderforbananas-item', TinderForBananasItem);
