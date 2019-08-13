import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import TaskList from "./TaskList.js";
import Footer from "./Footer.js";
import { ALL, ACTIVE, COMPLETED } from "../constants";
import uuidv4 from "uuid/v4";

function App({ taskList }) {
  const TODOAPP = "todoapp";
  const [tasks, setTasks] = useState(store(TODOAPP, taskList));
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(ALL);

  useEffect(() => {
    store(TODOAPP, tasks);
  }, [tasks]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: value.trim(),
      completed: false,
      editing: false
    };
    setTasks([newTodo].concat(tasks));
  }

  function toggleAll(event) {
    const checked = event.target.checked;
    setTasks(
      tasks.map(t => {
        t.completed = checked;
        return t;
      })
    );
  }

  function handleSelect(selected) {
    setSelected(selected);
  }

  function onClearCompleted() {
    setTasks(tasks.filter(t => !t.completed));
  }

  function onTaskListUpdate(tasks) {
    setTasks(tasks);
  }

  function filterTasks() {
    const filteredTasks = tasks.filter(
      ({ completed }) =>
        (selected === COMPLETED && completed) ||
        (selected === ACTIVE && !completed) ||
        selected === ALL
    );
    return filteredTasks;
  }

  function store(namespace, data) {
    if (data) {
      localStorage.setItem(namespace, JSON.stringify(data));
    }
    const store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
  }

  const activeTodoCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.length - activeTodoCount;
  return (
    <section className="todoapp">
      <Header
        handleSubmit={handleSubmit}
        value={value}
        handleChange={handleChange}
      />
      <TaskList
        toggleAll={toggleAll}
        activeTodoCount={activeTodoCount}
        tasks={filterTasks()}
        onTaskListUpdate={onTaskListUpdate}
      />
      <Footer
        count={activeTodoCount}
        selected={selected}
        completedCount={completedCount}
        onClearCompleted={onClearCompleted}
        handleSelect={handleSelect}
      />
    </section>
  );
}

export default App;
