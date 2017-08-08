/* eslint no-useless-constructor:0 */
import React from 'react';

/**
 * TodoApp Component
 */
class TodoApp extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Set initial state
    }

    /**
     * Creates a new todo and adds it to our collection
     * @param String text - Text contents of todo
     */
    addTodo(text) {
    }

    /**
     * Removes a todo by id
     * @param Integer id
     */
    handleRemove(id) {
    }

    /**
     * Renders our application
     */
    render() {

        // Render JSX
        return (
            <div className="todo-app">
		        <h1>TodoApp</h1>
            </div>
        );

    }

};

export default TodoApp;
