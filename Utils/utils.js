import { Component } from "react";

export const findByDataAutomationID = (component, attr) => {
    const wrapper = component.find(`[data-automation-id='${attr}']`);
    return wrapper;
}
