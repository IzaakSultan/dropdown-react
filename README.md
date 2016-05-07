# dropdown-react
[![Build Status](https://travis-ci.org/IzaakSultan/dropdown-react.svg?branch=master)](https://travis-ci.org/IzaakSultan/dropdown-react)
[![Coverage Status](https://coveralls.io/repos/github/IzaakSultan/dropdown-react/badge.svg?branch=master)](https://coveralls.io/github/IzaakSultan/dropdown-react?branch=master)

A react dropdown component

### Installation
`npm install dropdown-react`

### Usage

```javascript
import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from '../lib';

import 'dropdown-react/dist/index.css';

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

```
