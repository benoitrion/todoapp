import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ALL, ACTIVE, COMPLETED } from '../constants';

import Footer from '../components/Footer';

export const footer = {
  count: 2,
  selected: ALL,
  completedCount: 1,
  onClearCompleted: action('onClearCompleted'),
  handleSelect: action('handleSelect')
};

storiesOf('Footer', module)
  .add('default', () => <Footer {...footer} />)
  .add('empty', () => <Footer {...footer} count={0} completedCount={0} />)
  .add('selectActive', () => <Footer {...footer} selected={ACTIVE} />)
  .add('selectCompleted', () => <Footer {...footer} selected={COMPLETED} />);
