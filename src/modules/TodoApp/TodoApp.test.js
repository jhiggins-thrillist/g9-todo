import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';

import TodoApp from './TodoApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    mount(<TodoApp />);
});

it('renders a title', () => {

    const todoApp = shallow((
        <TodoApp />
    ));

    expect(todoApp.find('h1')).toHaveLength(1);
});