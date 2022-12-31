import Button from '@ramadevsign-ds/react-fe/src/ButtonTW';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@ramadevsign-ds/react-fe/lib/output.css';

export default {
  title: 'Ramadevsign/Button Tailwind',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Rds Button',
};
