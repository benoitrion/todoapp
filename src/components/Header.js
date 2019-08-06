import React from 'react';

export default function Header({
  handleSubmit,
  value,
  handleNewTodoKeyDown,
  handleChange
}) {
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus={true}
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
