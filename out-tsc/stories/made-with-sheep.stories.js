import { html } from 'lit';
import '../src/made-with-sheep.js';
export default {
    title: 'MadeWithSheep',
    component: 'made-with-sheep',
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const Template = ({ header, backgroundColor = 'white' }) => html `
  <made-with-sheep style="--made-with-sheep-background-color: ${backgroundColor}" .header=${header}></made-with-sheep>
`;
export const App = Template.bind({});
App.args = {
    header: 'My app',
};
//# sourceMappingURL=made-with-sheep.stories.js.map