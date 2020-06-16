import { Component } from "react";
import checkPropTypes from 'check-prop-types';

export const findByDataAutomationID = (component, attr) => {
    const wrapper = component.find(`[data-automation-id='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}