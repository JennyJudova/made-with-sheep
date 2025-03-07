import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;
let MadeWithSheep = class MadeWithSheep extends LitElement {
    constructor() {
        super(...arguments);
        this.header = 'My app';
    }
    render() {
        return html `
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <p>Edit <code>src/MadeWithSheep.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
    }
};
MadeWithSheep.styles = css `
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--made-with-sheep-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;
__decorate([
    property({ type: String })
], MadeWithSheep.prototype, "header", void 0);
MadeWithSheep = __decorate([
    customElement('made-with-sheep')
], MadeWithSheep);
export { MadeWithSheep };
//# sourceMappingURL=made-with-sheep.js.map