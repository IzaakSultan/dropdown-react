import React from 'react';
import ReactDOM from 'react-dom';

export default class DropdownItem extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ])
    };

    render() {
        return (
            <div style={{padding: '6px 18px'}}>{this.props.children}</div>
        );
    }
}
