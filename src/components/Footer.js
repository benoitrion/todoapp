import React from 'react';
import classNames from 'classnames';
import { ALL, ACTIVE, COMPLETED } from '../constants';

export default function Footer({
  count,
  showing,
  completedCount,
  onClearCompleted
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
          <a href="#/" className={classNames({ selected: showing === ALL })}>
            All
          </a>
        </li>{' '}
        <li>
          <a
            href="#/activated"
            className={classNames({ selected: showing === ACTIVE })}
          >
            Active
          </a>
        </li>{' '}
        <li>
          <a
            href="#/completed"
            className={classNames({ selected: showing === COMPLETED })}
          >
            Completed
          </a>
        </li>
      </ul>
      {renderClearButton()}
    </footer>
  );
}
