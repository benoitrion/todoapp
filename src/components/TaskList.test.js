import React from 'react';
import { shallow, mount } from 'enzyme';
import TaskList from './TaskList';
import Task from './Task';

describe('TaskList', () => {
  const clickFn = jest.fn();
  const mockedTasks = [
    {
      id: 1,
      title: 'title',
      completed: false,
      editing: false
    },
    {
      id: 2,
      title: 'title',
      completed: false,
      editing: false
    },
    {
      id: 3,
      title: 'title',
      completed: false,
      editing: false
    }
  ];
  const emptyFunc = function() {};

  it('renders without crashing', () => {
    shallow(
      <TaskList
        toggleAll={emptyFunc}
        activeTodoCount={0}
        tasks={mockedTasks}
        onTaskListUpdate={emptyFunc}
      />
    );
  });

  it('renders empty list', () => {
    const component = mount(
      <TaskList
        toggleAll={emptyFunc}
        activeTodoCount={0}
        tasks={[]}
        onTaskListUpdate={emptyFunc}
      />
    );
    expect(component.find(Task).length).toEqual(0);
  });

  it('renders three tasks', () => {
    const component = mount(
      <TaskList
        toggleAll={emptyFunc}
        activeTodoCount={0}
        tasks={mockedTasks}
        onTaskListUpdate={emptyFunc}
      />
    );
    expect(component.find(Task).length).toEqual(3);
  });

  it('toggleAll is triggered when checkbox is clicked', () => {
    const component = shallow(
      <TaskList
        toggleAll={clickFn}
        activeTodoCount={0}
        tasks={mockedTasks}
        onTaskListUpdate={emptyFunc}
      />
    );

    component.find('.toggle-all').simulate('change');

    expect(clickFn).toHaveBeenCalled();
  });

  it('checkbox is checked when active todo count is equal to 0', () => {
    const component = shallow(
      <TaskList
        toggleAll={emptyFunc}
        activeTodoCount={0}
        tasks={mockedTasks}
        onTaskListUpdate={emptyFunc}
      />
    );
    expect(component.find('.toggle-all').props().checked).toBe(true);
  });

  it('checkbox is not checked when active todo count is greater than 0', () => {
    const component = shallow(
      <TaskList
        toggleAll={emptyFunc}
        activeTodoCount={1}
        tasks={mockedTasks}
        onTaskListUpdate={emptyFunc}
      />
    );
    expect(component.find('.toggle-all').props().checked).toBe(false);
  });

  it('onTaskListUpdate is triggered when a task is updated', () => {
    const component = mount(
      <TaskList
        toggleAll={emptyFunc}
        activeTodoCount={1}
        tasks={mockedTasks}
        onTaskListUpdate={clickFn}
      />
    );

    component
      .find('.toggle')
      .first()
      .simulate('click');

    expect(clickFn).toHaveBeenCalledWith(mockedTasks);
  });
});
