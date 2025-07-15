import { LightningElement, api } from 'lwc';

export default class CircleCheckbox extends LightningElement {
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