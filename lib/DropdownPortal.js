import React from 'react';
import ReactDOM from 'react-dom';

export default class DropdownPortal extends React.Component {
    static propTypes = {
        closePortal: React.PropTypes.func.isRequired,
        width: React.PropTypes.number.isRequired
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
        let {boundingRect, width} = this.props;

        const position = {
            position: 'absolute',
            top: boundingRect.bottom,
            // left: boundingRect.right - dropdownWidth,
            left: boundingRect.left,
            width: width
        };

        return (
            <div ref={'portal'} style={position} className="DropdownReact__dropdown">
                {this.props.children}
            </div>
        );
    }
}
