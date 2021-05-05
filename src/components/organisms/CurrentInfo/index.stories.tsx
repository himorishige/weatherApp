import React from 'react';
import { Meta, Story } from '@storybook/react';
import CurrentInfo, { Props } from '.';
import { data } from 'src/data/openweather';

export default {
  title: 'WeatherApp/Organisms/CurrentInfo',
  component: CurrentInfo,
} as Meta;

export const Default: Story<Props> = (args) => <CurrentInfo {...args} />;

Default.args = {
  data: data,
};
