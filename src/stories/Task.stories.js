import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from '../components/Task';

export const task = {
  id: '1',
  title: 'Test Task',
  completed: false,
  editing: false
};

export const actions = {
  onToggle: action('onToggle'),
  onDelete: action('onDelete'),
  onEdit: action('onEdit'),
  onSave: action('onSave'),
  onCancel: action('onCancel')
};

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('completed', () => (
    <Task task={{ ...task, completed: true }} {...actions} />
  ))
  .add('editing', () => (
    <Task task={{ ...task, editing: true }} {...actions} />
  ));
