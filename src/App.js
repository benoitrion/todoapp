import React, { useState } from 'react';
import Header from './components/Header.js';
import TaskList from './components/TaskList.js';
import Footer from './components/Footer.js';
import { ALL } from './constants';

function App() {
  const taskList = [
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
    { id: 't7', title: 'Show Demo 1', completed: true, editing: false },
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

  const [tasks, setTasks] = useState(taskList);
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState(ALL);

  function handleChange({ target: { value } }) {
    console.log(value);
    setValue(value);
  }

  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    const newTodo = {
      id: 't' + Date.now(),
      title: value.trim(),
      completed: false,
      editing: false
    };
    setTasks([newTodo].concat(tasks));
  }

  function toggleAll() {
    setTasks(tasks.map(t => (t.completed = false)));
  }

  function onClearCompleted() {}

  const activeTodoCount = tasks.filter(t => !t.completed).length;
  console.log(activeTodoCount);
  const completedCount = tasks.length - activeTodoCount;
  console.log(completedCount);

  return (
    <section className="todoapp">
      <Header
        value={value}
        handleSubmit={handleSubmit}
        onChange={handleChange}
      />
      <TaskList
        toggleAll={toggleAll}
        activeTodoCount={activeTodoCount}
        tasks={tasks}
      />
      <Footer
        count={activeTodoCount}
        showing={selected}
        completedCount={completedCount}
        onClearCompleted={onClearCompleted}
      />
    </section>
  );
}

export default App;
