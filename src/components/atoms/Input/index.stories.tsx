import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { Props } from '.';

export default {
  title: 'WeatherApp/Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const SearchInput = Template.bind({});
SearchInput.storyName = '検索フィールド';
SearchInput.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.storyName = '無効時';
Disabled.args = {
  disabled: true,
};
