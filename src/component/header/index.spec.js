import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import {findByDataAutomationID} from './../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('header component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('should render without errors', () => {
        const wrapper = findByDataAutomationID(component, '.headerComponent');
        expect(wrapper.length).toBe(1);
    });
    it('should render a logo', () => {
        const logo = findByDataAutomationID(component, '.logoIMG');
        expect(logo.length).toBe(1);
    });  
});           