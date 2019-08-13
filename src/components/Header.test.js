import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  const clickFn = jest.fn();

  it('renders without crashing', () => {
    const value = 'any';
    shallow(
      <Header
        handleSubmit={function() {}}
        value={value}
        handleChange={function() {}}
      />
    );
  });

  it('form submitted', () => {
    const value = 'any';
    const component = shallow(
      <Header
        handleSubmit={clickFn}
        value={value}
        handleChange={function() {}}
      />
    );
    component.find('.header > form').simulate('submit');
    expect(clickFn).toHaveBeenCalled();
  });

  it('input changed', () => {
    const value = 'any';
    const component = shallow(
      <Header
        handleSubmit={function() {}}
        value={value}
        handleChange={clickFn}
      />
    );
    const inputComponent = component.find('.new-todo').simulate('change');
    expect(inputComponent.props().value).toEqual(value);

    inputComponent.find('.new-todo').simulate('change');
    expect(clickFn).toHaveBeenCalled();
  });
});
