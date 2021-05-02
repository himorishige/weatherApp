import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '.';

export default {
  title: 'WeatherApp/Atoms/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const SearchButton = Template.bind({});
