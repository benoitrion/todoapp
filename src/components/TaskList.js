import React from 'react';
import Task from './Task.js';

export default function TaskList({
  toggleAll,
  activeTodoCount,
  tasks,
  onTaskListUpdate
}) {
  function onToggle(id) {
    tasks.map(t => (t.id === id ? (t.completed = !t.completed) : t));
    onTaskListUpdate(tasks);
  }

  function onDelete(id) {
    const updatedTasks = tasks.filter(t => t.id !== id);
    onTaskListUpdate(updatedTasks);
  }

  function onEdit(id) {
    tasks.map(t => (t.id === id ? (t.editing = true) : t));
    onTaskListUpdate(tasks);
  }

  function onSave(id, editedText) {
    tasks.map(t => {
      if (id === t.id) {
        t.title = editedText;
        t.editing = false;
      }
      return t;
    });
    onTaskListUpdate(tasks);
  }

  function onCancel(id) {
    tasks.map(t => (t.id === id ? (t.editing = false) : t));
    onTaskListUpdate(tasks);
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
        checked={activeTodoCount === 0}
      />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {tasks.map(task => {
          return (
            <Task
              key={task.id}
              task={task}
              onToggle={onToggle.bind(this, task.id)}
              onDelete={onDelete.bind(this, task.id)}
              onEdit={onEdit.bind(this, task.id)}
              onSave={onSave.bind(this, task.id)}
              onCancel={onCancel.bind(this, task.id)}
            />
          );
        })}
      </ul>
    </section>
  );
}
