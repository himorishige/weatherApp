import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchArea, { Props } from '.';

export default {
  title: 'WeatherApp/Organisms/SearchArea',
  component: SearchArea,
} as Meta;

export const Default: Story<Props> = (args) => <SearchArea {...args} />;

Default.args = {};
