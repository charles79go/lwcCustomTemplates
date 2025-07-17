/**
 * Use as <c-switch label="Switch"
 *                value={switchValue}
 *                onchange={handleSwitchChange}>
 *            </c-switch>
 */

import { LightningElement, api } from 'lwc';

export default class Switch extends LightningElement {
    @api label = '';

    inputValue;

    @api 
    get value() {
        return this.inputValue;
    }
    set value(val) {
        this.inputValue = val;
    }

    handleInputChange(event) {
        this.inputValue = event.target.checked;

        const changeEvent = new CustomEvent('change', {
            detail: { value: this.inputValue }
        });
        this.dispatchEvent(changeEvent);
    }
}