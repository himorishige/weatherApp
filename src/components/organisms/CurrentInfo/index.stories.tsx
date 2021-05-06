import React from 'react';
import { Meta, Story } from '@storybook/react';
import CurrentInfo, { Props } from '.';
import { data } from 'src/data/openweather';

export default {
  title: 'WeatherApp/Organisms/CurrentInfo',
  component: CurrentInfo,
} as Meta;

const Template: Story<Props> = (args) => <CurrentInfo {...args} />;

export const Default = Template.bind({});
Default.storyName = '読み込み完了時';
Default.args = {
  data: data,
};

export const Loading = Template.bind({});
Loading.storyName = 'ローディング中';
