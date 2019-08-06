import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from '../components/Header';

export const actions = {
  handleSubmit: action('handleSubmit'),
  handleChange: action('handleChange')
};

storiesOf('Header', module).add('default', () => (
  <Header value={'Test'} {...actions} />
));
