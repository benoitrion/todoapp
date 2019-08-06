import React from 'react';
import Task from './Task.js';

export default function TaskList({
  toggleAll,
  activeTodoCount,
  tasks,
  ...props
}) {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
        checked={activeTodoCount === 0}
        style={{ display: tasks.length === 0 ? 'none' : 'inline' }}
      />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {tasks.map(t => (
          <Task key={t.id} task={t} {...props} />
        ))}
      </ul>
    </section>
  );
}
