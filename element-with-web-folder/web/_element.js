import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `element-with-web-folder`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ElementWithWebFolder extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'element-with-web-folder',
      },
    };
  }
}

window.customElements.define('element-with-web-folder', ElementWithWebFolder);
