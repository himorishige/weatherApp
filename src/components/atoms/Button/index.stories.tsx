import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { Props } from '.';

export default {
  title: 'WeatherApp/Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const SearchButton = Template.bind({});
SearchButton.args = {
  disabled: false,
};
