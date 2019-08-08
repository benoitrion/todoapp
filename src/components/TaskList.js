import React from 'react';
import Task from './Task.js';
import { TransitionMotion, spring, presets } from 'react-motion';

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

  function getDefaultStyles() {
    return tasks.map(task => {
      return {
        task,
        key: task.id,
        style: { height: 0, opacity: 1 }
      };
    });
  }

  function getStyles() {
    return tasks.map(task => {
      return {
        data: task,
        key: task.id,
        style: {
          height: spring(60, presets.gentle),
          opacity: spring(1, presets.gentle)
        }
      };
    });
  }

  function willEnter() {
    return {
      height: 0,
      opacity: 1
    };
  }

  function willLeave() {
    return {
      height: spring(0),
      opacity: spring(0)
    };
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
      <TransitionMotion
        defaultStyles={getDefaultStyles()}
        styles={getStyles()}
        willLeave={willLeave}
        willEnter={willEnter}
      >
        {styles => (
          <ul className="todo-list">
            {styles.map(({ key, data, style }) => {
              return (
                <Task
                  key={key}
                  style={style}
                  task={data}
                  onToggle={onToggle.bind(this, data.id)}
                  onDelete={onDelete.bind(this, data.id)}
                  onEdit={onEdit.bind(this, data.id)}
                  onSave={onSave.bind(this, data.id)}
                  onCancel={onCancel.bind(this, data.id)}
                />
              );
            })}
          </ul>
        )}
      </TransitionMotion>
    </section>
  );
}
