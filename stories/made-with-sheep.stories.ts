import { html, TemplateResult } from 'lit';
import '../src/made-with-sheep.js';

export default {
  title: 'MadeWithSheep',
  component: 'made-with-sheep',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <made-with-sheep style="--made-with-sheep-background-color: ${backgroundColor}" .header=${header}></made-with-sheep>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
