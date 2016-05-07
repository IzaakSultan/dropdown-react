/*global jest describe it expect */

jest.mock('browser');
jest.unmock('../DropdownLink');

import React from 'react';
import { mount, shallow } from 'enzyme';

import DropdownLink from '../DropdownLink';
import {window} from '../../browser.js';

describe('DropdownLink', () => {
    it('renders a label', () => {
        expect(shallow(<DropdownLink href="https://facebook.github.io/react/">My DropdownLink</DropdownLink>).text()).toBe('My DropdownLink');
    });

    it('navigates to the specified url on click', () => {
        shallow(<DropdownLink href="https://facebook.github.io/react/">My DropdownLink</DropdownLink>).simulate('click');
        expect(window.location).toBe('https://facebook.github.io/react/');
    });
});
