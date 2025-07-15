/**
 * Use as <c-input01 value={userName} onchange={handleUserNameChange} label="Username"></c-input01>
 */

import { LightningElement, api } from 'lwc';

export default class Input01 extends LightningElement {
    @api type = 'text'; // default type is text
    @api label = 'Enter Label';
    inputValue = '';

    @api 
    get value() {
        return this.inputValue;
    }
    set value(val) {
        this.inputValue = val;
    }

    handleInputChange(event) {
        this.inputValue = event.target.value;

        const changeEvent = new CustomEvent('change', {
            detail: { value: this.inputValue }
        });
        this.dispatchEvent(changeEvent);
    }
}