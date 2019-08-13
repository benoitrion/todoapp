import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { ALL, ACTIVE, COMPLETED } from '../constants';

describe('Footer', () => {
  const clickFn = jest.fn();

  it('renders without crashing', () => {
    shallow(
      <Footer
        count={1}
        selected={ALL}
        completedCount={0}
        onClearCompleted={function() {}}
        handleSelect={function() {}}
      />
    );
  });

  it('render footer with 1 item', () => {
    const component = shallow(
      <Footer
        count={1}
        selected={ALL}
        completedCount={0}
        onClearCompleted={function() {}}
        handleSelect={function() {}}
      />
    );
    const todoCountComponent = component.find('.todo-count');
    expect(todoCountComponent.text()).toEqual('1 item left');
  });

  it('render footer with 2 items', () => {
    const component = shallow(
      <Footer
        count={2}
        selected={ALL}
        completedCount={0}
        onClearCompleted={function() {}}
        handleSelect={function() {}}
      />
    );
    const todoCountComponent = component.find('.todo-count');
    expect(todoCountComponent.text()).toEqual('2 items left');
  });

  it("doesn't render clear-completed button when completed count is under 1", () => {
    const component = shallow(
      <Footer
        count={2}
        selected={ALL}
        completedCount={0}
        onClearCompleted={function() {}}
        handleSelect={function() {}}
      />
    );
    const clearComponentBtn = component.find('.clear-completed');
    expect(clearComponentBtn).toEqual({});
  });

  it('renders clear-completed button when count is above or equal to 1', () => {
    const component = shallow(
      <Footer
        count={2}
        selected={ALL}
        completedCount={2}
        onClearCompleted={clickFn}
        handleSelect={function() {}}
      />
    );
    component.find('.clear-completed').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });

  it("'all' button selected ", () => {
    const component = shallow(
      <Footer
        count={2}
        selected={ALL}
        completedCount={0}
        onClearCompleted={function() {}}
        handleSelect={function() {}}
      />
    );
    const selectedBtn = component.find('.selected');
    expect(selectedBtn.text()).toEqual('All');
  });

  it("'all' button clicked ", () => {
    const component = shallow(
      <Footer
        count={2}
        selected={ALL}
        completedCount={0}
        onClearCompleted={function() {}}
        handleSelect={clickFn}
      />
    );
    component.find('#all-btn').simulate('click');
    expect(clickFn).toHaveBeenCalledWith(ALL);
  });

  it("'active' button selected ", () => {
    const component = shallow(
      <Footer
        count={2}
        selected={ACTIVE}
        completedCount={0}
        onClearCompleted={function() {}}
        handleSelect={function() {}}
      />
    );
    const selectedBtn = component.find('.selected');
    expect(selectedBtn.text()).toEqual('Active');
  });

  it("'active' button clicked ", () => {
    const component = shallow(
      <Footer
        count={2}
        selected={ACTIVE}
        completedCount={0}
        onClearCompleted={function() {}}
        handleSelect={clickFn}
      />
    );
    component.find('#active-btn').simulate('click');
    expect(clickFn).toHaveBeenCalledWith(ACTIVE);
  });

  it("'completed' button selected ", () => {
    const component = shallow(
      <Footer
        count={2}
        selected={COMPLETED}
        completedCount={0}
        onClearCompleted={function() {}}
        handleSelect={function() {}}
      />
    );
    const selectedBtn = component.find('.selected');
    expect(selectedBtn.text()).toEqual('Completed');
  });

  it("'completed' button clicked ", () => {
    const component = shallow(<Footer handleSelect={clickFn} />);
    component.find('#completed-btn').simulate('click');
    expect(clickFn).toHaveBeenCalledWith(COMPLETED);
  });
});
