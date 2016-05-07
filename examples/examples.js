import React from 'react';
import ReactDOM from 'react-dom';

import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from '../lib';

function Example() {
    return (
        <div>
            <Dropdown label="Click Me!">
                <DropdownItem>Dropdown Item!</DropdownItem>
                <DropdownDivider />
                <DropdownLink href="http://google.com">I am a link!</DropdownLink>
                <DropdownDivider />
                <DropdownCheckbox>Check me</DropdownCheckbox>
            </Dropdown>
        </div>
    );
}

ReactDOM.render(<Example />, document.getElementById('root'));
