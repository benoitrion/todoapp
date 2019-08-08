import React, { useState } from 'react';
import classNames from 'classnames';

export default function Task({
  task: { id, title, completed, editing },
  onToggle,
  onDelete,
  onEdit,
  onSave,
  onCancel
}) {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  const [editText, setEditText] = useState(title);

  function handleSubmit() {
    const val = editText.trim();
    if (val) {
      onSave(val);
      setEditText(val);
    } else {
      onDelete();
    }
  }

  function handleEdit() {
    onEdit();
    setEditText(title);
  }

  function handleKeyDown(event) {
    if (event.which === ESCAPE_KEY) {
      setEditText(title);
      onCancel();
    } else if (event.which === ENTER_KEY) {
      handleSubmit();
    }
  }

  function handleChange(event) {
    if (editing) {
      setEditText(event.target.value);
    }
  }

  return (
    <li
      className={classNames({
        completed: completed,
        editing: editing
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onClick={onToggle}
        />
        <label onDoubleClick={handleEdit}>{title}</label>
        <button className="destroy" onClick={onDelete}></button>
      </div>
      <input
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}
