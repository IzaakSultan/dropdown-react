import React from 'react';

import DropdownItem from '../DropdownItem';

export default class DropdownCheckbox extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ]),
        onChange: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        onChange: () => {}
    }

    state = {
        checked: false
    }

    handleChange(e) {
        const {checked} = e.target;
        this.props.onChange(checked);
        this.setState({checked});
    }

    render() {
        const {children} = this.props;
        let {checked} = this.state;

        return (
            <div className="DropdownReact__item DropdownReact__checkbox" onClick={() => this.handleChange({target: {checked: !checked}})}>
                <input type="checkbox" onChange={::this.handleChange} checked={checked} />
                <span className="DropdownReact__checkbox__label">{children}</span>
            </div>
        );
    }
}
