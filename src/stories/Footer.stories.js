import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ALL, ACTIVE, COMPLETED } from '../constants';

import Footer from '../components/Footer';

export const footer = {
  count: 2,
  showing: ALL,
  completedCount: 1,
  onClearCompleted: action('onClearCompleted')
};
console.log(ALL);

storiesOf('Footer', module)
  .add('default', () => <Footer {...footer} />)
  .add('empty', () => <Footer {...footer} count={0} completedCount={0} />)
  .add('showingActive', () => <Footer {...footer} showing={ACTIVE} />)
  .add('showingCompleted', () => <Footer {...footer} showing={COMPLETED} />);
