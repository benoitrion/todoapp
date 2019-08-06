import React, { useState } from 'react';
import './components/Header.js';
import './components/TaskList.js';
import './components/Footer.js';
import { ALL } from '../constants';

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
  const [tasks, setTasks] = useState(taskList);
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState('all');

  function onClearCompleted() {}

  const activeTodoCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.lenght - activeTodoCount.length;
  return (
    <section className="todoapp">
      <Header value={value} />
      <TaskList tasks={tasks} selected={selected} />
      <Footer
        counter={activeTodoCount}
        showing={ALL}
        completedCount={completedCount}
        onClearCompleted={this.onClearCompleted}
      />
    </section>
  );
}

export default App;
