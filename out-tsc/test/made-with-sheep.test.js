import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/made-with-sheep.js';
describe('MadeWithSheep', () => {
    let element;
    beforeEach(async () => {
        element = await fixture(html `<made-with-sheep></made-with-sheep>`);
    });
    it('renders a h1', () => {
        const h1 = element.shadowRoot.querySelector('h1');
        expect(h1).to.exist;
        expect(h1.textContent).to.equal('My app');
    });
    it('passes the a11y audit', async () => {
        await expect(element).shadowDom.to.be.accessible();
    });
});
//# sourceMappingURL=made-with-sheep.test.js.map