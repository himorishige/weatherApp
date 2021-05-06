import React from 'react';
import { Meta, Story } from '@storybook/react';
import Skelton, { Props } from '.';

export default {
  title: 'WeatherApp/Atoms/Skelton',
  component: Skelton,
} as Meta;

const Template: Story<Props> = (args) => <Skelton {...args} />;

export const Default = Template.bind({});
Default.storyName = 'ローディング時';
Default.args = {
  width: '100%',
  height: '1.5rem',
};
