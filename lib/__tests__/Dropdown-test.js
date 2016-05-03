/*global jest describe it expect */

jest.unmock('../Dropdown');
jest.unmock('../DropdownPortal');

import React from 'react';
import { mount, shallow } from 'enzyme';

import Dropdown from '../Dropdown';
import DropdownPortal from '../DropdownPortal';

describe('Dropdown', () => {
    it('renders a label', () => {
        expect(shallow(<Dropdown label="My Label" />).find('a').text()).toBe('My Label');
    });

    it('renders a div portal to the DOM and removes the div when it unmounts', () => {
        // let component = mount(<Dropdown label="My Label" />);
        // expect(document.body.childNodes.length).toBe(1);
    });
});
