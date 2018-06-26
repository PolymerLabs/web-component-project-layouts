import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `element-with-tools-folder`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ElementWithToolsFolder extends PolymerElement {
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
        value: 'element-with-tools-folder',
      },
    };
  }
}

window.customElements.define('element-with-tools-folder', ElementWithToolsFolder);
