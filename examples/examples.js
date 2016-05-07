import React from 'react';
import ReactDOM from 'react-dom';

import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from '../lib';

function Example() {
    return (
        <div>
            <Dropdown label="Hello World">
                <DropdownItem>Dropdown Item!</DropdownItem>
                <DropdownItem>Dropdown Item 2!</DropdownItem>
                <DropdownItem>Dropdown Item 3!</DropdownItem>
                <DropdownDivider />
                <DropdownLink href="http://google.com">I am a link!</DropdownLink>
                <DropdownCheckbox>Yes</DropdownCheckbox>
            </Dropdown>
        </div>
    );
}

ReactDOM.render(<Example />, document.getElementById('root'));
