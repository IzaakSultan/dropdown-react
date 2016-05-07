import React from 'react';

export default class DropdownItem extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ])
    };

    render() {
        return (
            <div className="DropdownReact__item">{this.props.children}</div>
        );
    }
}
