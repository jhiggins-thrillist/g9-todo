import React from 'react';
import Title from '../../components/Title';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

// Contaner Component
// Todo Id
window.id = 0;
class TodoApp extends React.Component{

    constructor(props) {
        super(props);
        this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
    }

    component

    componentWillMount() {

        // Set initial state
        this.state = {
            data: []
        };

        console.log('component will mount');
    }

    componentDidMount() {
        // throw new Error('wtf');
        // this.setState({
        //     data: [{text: 'hello', id: window.id++}, ...this.state.data]
        // });
        // fetch(this.apiUrl)
        //     .then(res => res.json())
        //     .then(json => {
        //         this.setState({data: [{
        //             text: 'herro',
        //             id: window.id++
        //         }]});
        //     });
        console.log('component did mount');
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    // Add todo handler
    addTodo(val) {

        // Assemble data
        const todo = {
            text: val,
            id: window.id++
        }

        // Update data
        // this.state.data.push(todo);
        const data = this.state.data;
        data.push(todo);

        // Update state
        this.setState({
            data
        });
    }

    // Handle remove
    handleRemove(id) {

        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {

            if (todo.id !== id) {
                return todo;
            }

            return undefined;
        });

        // Update state with filter
        this.setState({
            data: remainder
        });
    }

    render() {

        // Render JSX
        return (
            <div className="todo-app">
                <Title>Todo App</Title>
                <TodoForm
                    addTodo={this.addTodo.bind(this)}
                />
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );

    }

};

export default TodoApp;