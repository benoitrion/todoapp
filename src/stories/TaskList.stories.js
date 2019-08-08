import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TaskList from '../components/TaskList';

export const taskList = [
  { id: 't1', title: 'Board the plane', completed: false, editing: false },
  { id: 't2', title: 'Sleep', completed: false, editing: false },
  {
    id: 't3',
    title: 'Try to finish conference slides',
    completed: false,
    editing: false
  },
  {
    id: 't4',
    title: 'Eat cheese and drink wine',
    completed: false,
    editing: false
  },
  { id: 't5', title: 'Go around in Uber', completed: false, editing: false },
  {
    id: 't6',
    title: 'Talk with conf attendees',
    completed: false,
    editing: false
  },
  { id: 't7', title: 'Show Demo 1', completed: false, editing: false },
  { id: 't8', title: 'Show Demo 2', completed: false, editing: false },
  {
    id: 't9',
    title: 'Lament about the state of animation',
    completed: false,
    editing: false
  },
  { id: 't10', title: 'Show Secret Demo', completed: false, editing: false },
  { id: 't11', title: 'Go home', completed: false, editing: false }
];

export const props = {
  toggleAll: action('toggleAll'),
  tasks: taskList,
  activeTodoCount: taskList.length,
  onToggle: action('onToggle'),
  onDelete: action('onDelete'),
  onEdit: action('onEdit'),
  onSave: action('onSave'),
  onCancel: action('onCancel')
};

storiesOf('TaskList', module)
  .add('default', () => <TaskList {...props} />)
  .add('empty', () => <TaskList {...props} tasks={[]} activeTodoCount={0} />);
