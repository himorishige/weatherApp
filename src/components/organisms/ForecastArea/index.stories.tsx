import React from 'react';
import { Meta, Story } from '@storybook/react';
import ForecastArea, { Props } from '.';
import { data } from 'src/data/openweather';

export default {
  title: 'WeatherApp/Organisms/ForecastArea',
  component: ForecastArea,
} as Meta;

export const Default: Story<Props> = (args) => <ForecastArea {...args} />;

Default.args = {
  data: data,
};
