import React from 'react';
import ReactDOM from 'react-dom';

import DropdownPortal from './DropdownPortal';

export default class Dropdown extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ]),
        label: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired,
        align: React.PropTypes.oneOf(['right', 'left']).isRequired
    };

    static defaultProps = {
        width: 160,
        align: 'left'
    }

    state = {
        isOpen: false
    }

    componentDidMount() {
        this._node = document.createElement('div');
        this._node.className = 'ReactDropdownMenu';
        document.body.appendChild(this._node);
    }

    componentWillReceiveProps(newProps) {
        const {width, align, children} = newProps;

        if (this.state.isOpen) {
            this.renderDropdown(width, align, children);
        }
    }

    renderDropdown(width, align, children) {
        const boundingRect = ReactDOM.findDOMNode(this.button).getBoundingClientRect();

        this.setState({isOpen: true});

        ReactDOM.render(
            <DropdownPortal boundingRect={boundingRect} closePortal={::this.unrenderDropdown} width={width} align={align}>
                {children}
            </DropdownPortal>,
            this._node
        );
    }

    unrenderDropdown() {
        this.setState({isOpen: false});
        ReactDOM.unmountComponentAtNode(this._node);
    }

    toggleDropdown(e) {
        const {width, align, children} = this.props;

        e.stopPropagation();

        if (!this.state.isOpen) {
            this.renderDropdown(width, align, children);
        } else {
            this.unrenderDropdown();
        }
    }

    compoentWillUnmount() {
        this.unrenderDropdown();
        document.body.removeChild(this._node);
    }

    render() {
        return (
            <a ref={e => this.button = e} className="DropdownReact__button" onClick={::this.toggleDropdown}>{this.props.label}</a>
        );
    }
}
