/**
 * Use as <c-checkbox 
 *            label="Regular Checkbox"
 *            value={checkboxValue}
 *            onchange={handleCheckboxChange}>
 *        </c-checkbox>
 */

import { LightningElement, api} from 'lwc';

export default class Checkbox extends LightningElement {
    @api label = '';

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