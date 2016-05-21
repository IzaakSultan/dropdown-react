import React from 'react';

import DropdownItem from '../DropdownItem';

export default class DropdownCheckbox extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ]),
        onChange: React.PropTypes.func.isRequired,
        checked: React.PropTypes.bool.isRequired
    };

    static defaultProps = {
        onChange: () => {}
    }

    state = {
        checked: false
    }

    handleChange(checked) {
        this.props.onChange(checked);
    }

    render() {
        const {children, checked} = this.props;

        return (
            <div className="DropdownReact__item DropdownReact__checkbox" onClick={() => this.handleChange(!checked)}>
                <input type="checkbox" onChange={() => this.handleChange(!checked)} checked={checked} />
                <span className="DropdownReact__checkbox__label">{children}</span>
            </div>
        );
    }
}
