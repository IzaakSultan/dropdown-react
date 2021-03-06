# dropdown-react
[![Build Status](https://travis-ci.org/IzaakSultan/dropdown-react.svg?branch=master)](https://travis-ci.org/IzaakSultan/dropdown-react)
[![Coverage Status](https://coveralls.io/repos/github/IzaakSultan/dropdown-react/badge.svg?branch=master)](https://coveralls.io/github/IzaakSultan/dropdown-react?branch=master)

A react dropdown component

### Example
[https://izaaksultan.github.io/dropdown-react/](https://izaaksultan.github.io/dropdown-react/)

### Installation
`npm install dropdown-react`

### Usage

```javascript
import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from 'dropdown-react';

import 'dropdown-react/dist/index.css';

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
```
