import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';

describe('Task', () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  const clickFn = jest.fn();
  const mockedTask = {
    id: 1,
    title: 'title',
    completed: false,
    editing: false
  };
  const mockedStyle = {};
  const emptyFunc = function() {};

  it('renders without crashing', () => {
    shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={emptyFunc}
        onEdit={emptyFunc}
        onSave={emptyFunc}
        onCancel={emptyFunc}
      />
    );
  });

  it("selected class doesn't exists when task is not completed ", () => {
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={emptyFunc}
        onEdit={emptyFunc}
        onSave={emptyFunc}
        onCancel={emptyFunc}
      />
    );
    expect(component.find('.selected').length).toEqual(0);
  });

  it('selected class exists when task is completed', () => {
    const mockedTask = {
      id: 1,
      title: 'title',
      completed: true,
      editing: false
    };
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={emptyFunc}
        onEdit={emptyFunc}
        onSave={emptyFunc}
        onCancel={emptyFunc}
      />
    );
    expect(component.find('.completed').length).toEqual(1);
  });

  it('checkbox is toggled when clicked ', () => {
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={clickFn}
        onDelete={emptyFunc}
        onEdit={emptyFunc}
        onSave={emptyFunc}
        onCancel={emptyFunc}
      />
    );
    // checkbox is clicked
    component.find('.toggle').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('editing input is triggered when double clicked ', () => {
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={emptyFunc}
        onEdit={clickFn}
        onSave={emptyFunc}
        onCancel={emptyFunc}
      />
    );

    component.find('.toggle').simulate('doubleClick');

    expect(clickFn).toHaveBeenCalled();
  });

  it('onDelete is triggered when delete button is clicked', () => {
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={clickFn}
        onEdit={emptyFunc}
        onSave={emptyFunc}
        onCancel={emptyFunc}
      />
    );
    component.find('.destroy').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });

  it('edited input is saved on blur event', () => {
    const mockedTask = {
      id: 1,
      title: 'title',
      completed: false,
      editing: true
    };
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={emptyFunc}
        onEdit={emptyFunc}
        onSave={clickFn}
        onCancel={emptyFunc}
      />
    );
    const inputValue = 'editText';

    //assert initial state
    //expect(component.state("editText")).toEqual(mockedTask.title);

    const editComponent = component.find('.edit');
    editComponent.simulate('change', { target: { value: inputValue } });
    editComponent.simulate('blur');

    expect(clickFn).toHaveBeenCalled();

    //assert state
    //expect(component.state("editText")).toEqual(updatedText);
  });

  it('onDelete called on blur event when input is empty', () => {
    const mockedTask = {
      id: 1,
      title: 'title',
      completed: false,
      editing: true
    };
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={clickFn}
        onEdit={emptyFunc}
        onSave={emptyFunc}
        onCancel={emptyFunc}
      />
    );
    //assert initial state

    const editComponent = component.find('.edit');
    editComponent.simulate('change', { target: { value: '' } });
    editComponent.simulate('blur');

    expect(clickFn).toHaveBeenCalled();

    //TODO assert state
  });

  it('update state editedText onChange event', () => {
    const mockedTask = {
      id: 1,
      title: 'title',
      completed: false,
      editing: true
    };
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={clickFn}
        onEdit={emptyFunc}
        onSave={emptyFunc}
        onCancel={emptyFunc}
      />
    );
    //TODO assert state
    //expect(component.state("editText")).toEqual(mockedTask.title);

    const inputValue = 'editText';
    const editComponent = component.find('.edit');

    //update value
    editComponent.simulate('change', { target: { value: inputValue } });

    //TODO assert state
    //expect(component.state("editText")).toEqual(inputValue);
  });

  it('update state editedText onKeyDown enter key event', () => {
    const mockedTask = {
      id: 1,
      title: 'title',
      completed: false,
      editing: true
    };
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={emptyFunc}
        onEdit={emptyFunc}
        onSave={clickFn}
        onCancel={emptyFunc}
      />
    );
    //TODO assert state

    const inputValue = 'editText';
    const editComponent = component.find('.edit');

    //update value
    editComponent.simulate('change', { target: { value: inputValue } });
    editComponent.simulate('keyDown', { keyCode: ENTER_KEY });

    expect(clickFn).toHaveBeenCalled();

    //TODO assert state
  });

  it('cancel update state editedText onKeyDown escape key event', () => {
    const mockedTask = {
      id: 1,
      title: 'title',
      completed: false,
      editing: true
    };
    const component = shallow(
      <Task
        task={mockedTask}
        style={mockedStyle}
        onToggle={emptyFunc}
        onDelete={emptyFunc}
        onEdit={emptyFunc}
        onSave={emptyFunc}
        onCancel={clickFn}
      />
    );
    //TODO assert state

    const inputValue = 'editText';
    const editComponent = component.find('.edit');

    //update value
    editComponent.simulate('change', { target: { value: inputValue } });
    editComponent.simulate('keyDown', { keyCode: ESCAPE_KEY });

    expect(clickFn).toHaveBeenCalled();

    //TODO assert state
  });
});
