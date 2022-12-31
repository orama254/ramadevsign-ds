import Button from '@ramadevsign-ds/react-fe/src/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Ramadevsign/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Rds Button',
};
