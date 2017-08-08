import React from 'react';
import Todo from '../Todo';

class TodoList extends React.Component {

    render() {
        const {todos, remove} = this.props;

        // Map through the todos
        const todoNode = todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} remove={remove} />)
        });

        return <ul>{todoNode}</ul>;
    }

}

export default TodoList;