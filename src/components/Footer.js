import React from 'react';
import classNames from 'classnames';
import { ALL, ACTIVE, COMPLETED } from '../constants';

export default function Footer({
  count,
  selected,
  completedCount,
  onClearCompleted,
  handleSelect
}) {
  function pluralize(count, word) {
    return count > 1 ? word + 's' : word;
  }

  function renderClearButton() {
    return completedCount > 0 ? (
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    ) : null;
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> {pluralize(count, 'item')} left
      </span>
      <ul className="filters">
        <li>
          <a
            className={classNames({ selected: selected === ALL })}
            onClick={handleSelect.bind(null, ALL)}
          >
            All
          </a>
        </li>{' '}
        <li>
          <a
            className={classNames({ selected: selected === ACTIVE })}
            onClick={handleSelect.bind(null, ACTIVE)}
          >
            Active
          </a>
        </li>{' '}
        <li>
          <a
            className={classNames({ selected: selected === COMPLETED })}
            onClick={handleSelect.bind(null, COMPLETED)}
          >
            Completed
          </a>
        </li>
      </ul>
      {renderClearButton()}
    </footer>
  );
}
