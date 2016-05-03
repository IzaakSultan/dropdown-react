import React from 'react';
import ReactDOM from 'react-dom';

import Dropdown, {DropdownItem} from '../lib';

import '../lib/scss/index.scss';

function Example() {
    return (
        <div>
            <Dropdown label="Hello World">
                <DropdownItem>Dropdown Item!</DropdownItem>
            </Dropdown>
        </div>
    );
}

ReactDOM.render(<Example />, document.getElementById('root'));
