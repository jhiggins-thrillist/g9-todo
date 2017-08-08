import React from 'react';

class Title extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.children ? this.props.children : 'to-do' }</h1>
            </div>
        );
    }

}

export default Title;