import React from 'react';

import {window} from '../browser';

export default class DropdownLink extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ]),
        href: React.PropTypes.string.isRequired
    };

    handleClick() {
        const {href} = this.props;
        window.location = href;
    }

    render() {
        const {children} = this.props;

        return (
            <div className="DropdownReact__item DropdownReact__link" onClick={::this.handleClick}>
                <span className="DropdownReact__link__a">{children}</span>
            </div>
        );
    }
}
