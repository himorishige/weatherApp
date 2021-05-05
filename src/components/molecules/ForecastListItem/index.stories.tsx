import React from 'react';
import { Meta, Story } from '@storybook/react';
import ForecastListItem, { Props } from '.';

import { data } from 'src/data/openweather';

export default {
  title: 'WeatherApp/Molecules/ForecastListItem',
  component: ForecastListItem,
  args: {
    data: data.daily[0],
  },
} as Meta;

export const Default: Story<Props> = (args) => <ForecastListItem {...args} />;
