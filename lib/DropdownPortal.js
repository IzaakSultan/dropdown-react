import React from 'react';
import ReactDOM from 'react-dom';

export default class DropdownPortal extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ]),
        closePortal: React.PropTypes.func.isRequired,
        width: React.PropTypes.number.isRequired,
        align: React.PropTypes.oneOf(['right', 'left'])
    };

    constructor(props) {
        super(props);
        this._handleDocumentClick = ::this._handleDocumentClick;
    }
    _handleDocumentClick(e) {
        if (!ReactDOM.findDOMNode(this).contains(e.target)) {
            this.props.closePortal();
        }
    }

    componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick);
    }

    render() {
        let {boundingRect, width, align} = this.props;

        const position = {
            position: 'absolute',
            top: boundingRect.bottom,
            left: align == 'left' ? boundingRect.left : boundingRect.right - width,
            width: width
        };

        return (
            <div ref={'portal'} style={position} className="DropdownReact__dropdown">
                {this.props.children}
            </div>
        );
    }
}
