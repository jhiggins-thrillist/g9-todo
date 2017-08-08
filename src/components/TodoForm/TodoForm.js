import React from 'react';
const KEY_ENTER = 13;

class TodoForm extends React.Component {

    addTodo() {

        if (!this.input.value.length) {
            return;
        }

        this.props.addTodo(this.input.value);
        this.input.value = '';
    }

    onKeyPress(e) {

        if (e.which === KEY_ENTER) {
            this.addTodo();
        }

    }

    onButtonClick(e) {
        this.addTodo();
    }

    render() {

        // Input tracker
        let input;

        // const {addTodo} = this.props;

        return (
            <div className="todo-form">
                <input
                    ref={node => this.input = node}
                    onKeyPress={this.onKeyPress.bind(this)
                } />

                <button
                    onClick={this.onButtonClick.bind(this)}
                >
                    +
                </button>
            </div>
        );
    }

}

export default TodoForm;