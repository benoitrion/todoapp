import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Task from './Task';
// import Header from "./Header";

describe('App', () => {
  const TODOAPP = 'todoapp';
  const taskList = [
    {
      id: 1,
      title: 'title',
      completed: false,
      editing: false
    },
    {
      id: 2,
      title: 'title',
      completed: true,
      editing: false
    },
    {
      id: 3,
      title: 'title',
      completed: false,
      editing: false
    }
  ];
  beforeEach(() => {
    // clear localStorage
    localStorage.clear();
  });

  it('renders without crashing', () => {
    shallow(<App taskList={taskList} />);
  });

  it('renders empty list', () => {
    const component = mount(<App />);
    expect(component.find(Task).length).toEqual(0);
  });

  it('renders three tasks', () => {
    const component = mount(<App taskList={taskList} />);
    expect(component.find(Task).length).toEqual(3);
  });

  /*
  it("creates a new task", () => {
    const component = mount(<App taskList={taskList} />);
    const inputValue = "editText";
    component
      .find(Header)
      .simulate("change", { target: { value: inputValue } });
    component.find(Header).simulate("submit");
    console.log(component.find(Task).length);
    expect(component.find(Task).length).toEqual(4);
  });

  it("toggles all tasks", () => {
    const component = mount(<App taskList={taskList} />);
    component.find(".toggle-all").simulate("change");
    console.log(component.find(Task).length);
    expect(component.find(".completed").length).toEqual(3);
  });

  it("select all", () => {
    const component = mount(<App taskList={taskList} />);
    component.find("#all-btn").simulate("click");
    console.log(component.find(Task).length);
    expect(component.find(Task).length).toEqual(3);
  });

  it("select active", () => {
    const component = mount(<App taskList={taskList} />);
    component.find("#active-btn").simulate("click");
    console.log(component.find(Task).length);
    expect(component.find(Task).length).toEqual(2);
  });

  it("select completed", () => {
    const component = mount(<App taskList={taskList} />);
    component.find("#completed-btn").simulate("click");
    console.log(component.find(Task).length);
    expect(component.find(Task).length).toEqual(1);
  });

  it("clear completed", () => {
    const component = mount(<App taskList={taskList} />);
    component.find(".clear-completed").simulate("click");
    expect(component.find(Task).length).toEqual(2);
  });*/

  it('assert local storage', () => {
    mount(<App taskList={taskList} />);

    const store = localStorage.getItem(TODOAPP);

    expect(JSON.parse(store)).toEqual(taskList);
  });

  it('assert empty local storage', () => {
    mount(<App />);

    const store = localStorage.getItem(TODOAPP);

    expect(JSON.parse(store)).toEqual([]);
  });

  it('updated task is stored in local storage', () => {
    const component = mount(<App taskList={taskList} />);
    component
      .find('.toggle')
      .first()
      .simulate('click');

    const jsonStore = localStorage.getItem(TODOAPP);

    const store = JSON.parse(jsonStore);

    expect(store[0].completed).toBe(true);
  });
});
