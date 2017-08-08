import React from 'react';

class Todo extends React.Component {

    componentWillMount() {
        this.setState({
            isHovered: false
        });
    }

    onClickRemove() {
        this.props.remove(this.props.todo.id)
    }

    onMouseEnter(e) {
        this.setState({
            isHovered: true
        });
    }

    onMouseLeave(e) {
        this.setState({
            isHovered: false
        });
    }

    render() {
        const {todo} = this.props;
        const {isHovered} = this.state;

        // Each Todo
        return (
            <li
                onClick={this.onClickRemove.bind(this)}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
            >
                {todo.text} {isHovered ? ' - Remove' : ''}
            </li>
        );
    }

}

export default Todo;