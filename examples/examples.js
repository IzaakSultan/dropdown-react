import React from 'react';
import ReactDOM from 'react-dom';

import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from '../lib';

class Example extends React.Component {
    state = {
        checked: false
    };

    render() {
        return (
            <div>
                <Dropdown label="Click Me!">
                    <DropdownItem>Dropdown Item!</DropdownItem>
                    <DropdownDivider />
                    <DropdownLink href="http://google.com">I am a link!</DropdownLink>
                    <DropdownDivider />
                    <DropdownCheckbox checked={this.state.checked} onChange={checked => this.setState({checked})}>Check me</DropdownCheckbox>
                </Dropdown>
            </div>
        );
    }
}

ReactDOM.render(<Example />, document.getElementById('root'));
