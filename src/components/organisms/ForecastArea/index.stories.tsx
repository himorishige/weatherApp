import React from 'react';
import { Meta, Story } from '@storybook/react';
import ForecastArea, { Props } from '.';
import { data } from 'src/data/openweather';

export default {
  title: 'WeatherApp/Organisms/ForecastArea',
  component: ForecastArea,
} as Meta;

const Template: Story<Props> = (args) => <ForecastArea {...args} />;

export const Default = Template.bind({});
Default.storyName = '読み込み完了時';
Default.args = {
  data: data,
};

export const Loading = Template.bind({});
Loading.storyName = 'ローディング中';
