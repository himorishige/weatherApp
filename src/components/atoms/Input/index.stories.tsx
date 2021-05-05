import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { Props } from '.';

export default {
  title: 'WeatherApp/Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const SearchInput = Template.bind({});
SearchInput.args = {
  disabled: false,
};
